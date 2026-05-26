import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Anti-Aliasing Structural Cost | Subhash Kashyap',
  description: 'Accepted at MIDL 2026. Translates BlurPool downsampling into a 3D volumetric SegResNet operating natively on the BraTS 2021 clinical MRI dataset.',
}

export default function AntiAliasingProject() {
  return (
    <article className="space-y-12 py-8 text-sm leading-relaxed text-[#d4d4d4]">
      {/* Back to Home Link */}
      <div className="font-mono text-xs">
        <Link href="/" className="text-[#8b8b8b] hover:text-[#d4d4d4] underline underline-offset-4 decoration-1 decoration-[#222225] hover:decoration-[#8b8b8b] transition-all">
          &larr; Return to Homepage
        </Link>
      </div>

      {/* Academic Header */}
      <header className="space-y-4">
        <div className="text-xs font-mono text-[#8b8b8b] space-x-2">
          <span>MIDL 2026 SHORT PAPER</span>
          <span>&bull;</span>
          <span>BRATS 2021 VOLUMETRIC MRI EVALUATION</span>
        </div>
        
        <h1 className="text-lg font-semibold tracking-tight text-[#d4d4d4] leading-snug">
          Spectral Aliasing in CNN-Based Brain Tumor Segmentation: The Structural Cost of Anti-Aliasing in 3D Volumetric Segmentation
        </h1>

        <div className="text-xs text-[#8b8b8b]">
          <p className="font-medium text-[#d4d4d4]">Subhash Kashyap</p>
          <p className="font-mono">Department of Computer Science and Engineering, NIT Rourkela &bull; ISI Bangalore</p>
        </div>

        {/* Resources Action Bar */}
        <div className="flex gap-4 text-xs font-sans">
          <a 
            href="https://openreview.net/forum?id=F7RaWxyKXD" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="underline underline-offset-4 decoration-1 decoration-[#222225] hover:decoration-[#8b8b8b] hover:text-[#d4d4d4] transition-all"
          >
            OpenReview Forum
          </a>
          <a 
            href="https://github.com/Subkash2206/aliasing-tumor-boundaries" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="underline underline-offset-4 decoration-1 decoration-[#222225] hover:decoration-[#8b8b8b] hover:text-[#d4d4d4] transition-all"
          >
            GitHub Codebase
          </a>
        </div>
      </header>

      {/* Abstract */}
      <section className="space-y-3">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-[#8b8b8b] border-b border-[#222225] pb-2">
          Abstract
        </h2>
        <p className="text-[#d4d4d4]">
          The classical mathematical assumption in standard Deep Learning literature is that anti-aliasing repairs convolutional shift variance and strictly improves overall network intelligence. This project translates anti-aliasing techniques from basic two-dimensional toy classifiers directly into a massive state-of-the-art three-dimensional Volumetric SegResNet operating natively on the BraTS 2021 clinical MRI dataset.
        </p>
        <p className="text-[#d4d4d4]">
          The empirical results physically prove a major structural trade-off in modern medical imaging models. Injecting mathematical low-pass filters into the network cleanly reduces deep spectral variance by roughly 50%. However, forcing a complex three-dimensional dense medical architecture to obey strict Nyquist equivariance paradoxically damages its ability to accurately trace complex anatomical topologies. Elite geometric architectures actively and mathematically exploit high-frequency aliased edges through decoder skip connections to draw rigid boundaries. When an anti-aliasing filter like BlurPool mathematically eliminates those sharp high frequencies, the clinical boundaries bloom unpredictably, the shift consistency crashes, and the core topological precision drops natively.
        </p>
      </section>

      {/* Key Results */}
      <section className="space-y-3">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-[#8b8b8b] border-b border-[#222225] pb-2">
          Key Results
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs text-[#d4d4d4] border-collapse">
            <thead>
              <tr className="border-b border-[#222225] text-[#8b8b8b]">
                <th className="py-2 text-left font-semibold">Metric (N=251)</th>
                <th className="py-2 text-right font-semibold">Baseline</th>
                <th className="py-2 text-right font-semibold">BlurPool</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#222225]">
              <tr>
                <td className="py-2">ET Boundary F1 (Mean)</td>
                <td className="py-2 text-right font-semibold">72.60%</td>
                <td className="py-2 text-right text-red-500 font-semibold">71.83%</td>
              </tr>
              <tr>
                <td className="py-2">ET Global Dice (Mean)</td>
                <td className="py-2 text-right font-semibold">83.03%</td>
                <td className="py-2 text-right text-red-500 font-semibold">81.87%</td>
              </tr>
              <tr>
                <td className="py-2">Mean Alias Violation Ratio (AVR)</td>
                <td className="py-2 text-right">0.066</td>
                <td className="py-2 text-right font-semibold">0.033 (~50% reduction)</td>
              </tr>
              <tr>
                <td className="py-2">Shift Consistency at 5px (IoU)</td>
                <td className="py-2 text-right font-semibold">~98%</td>
                <td className="py-2 text-right text-red-500 font-semibold">~91%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Implementation Details */}
      <section className="space-y-3">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-[#8b8b8b] border-b border-[#222225] pb-2">
          Technical Highlights
        </h2>
        <ul className="space-y-2 list-disc pl-4 marker:text-[#8b8b8b]">
          <li>
            <strong>3D Volumetric blur pool operator</strong>: Formulated as the outer product of 1D binomial kernels K₃D = K₁D ⊗ K₁D ⊗ K₁D to maintain computational efficiency on volumetric tensor dimensions.
          </li>
          <li>
            <strong>Topological breakdown</strong>: Anti-aliasing suppresses deep-layer phase representations, preventing skip-connections from propagating sharp step-edge features. This causes severe boundary "blooming" and False Positive failures along critical tumor borders.
          </li>
        </ul>
      </section>

      {/* Reproducibility */}
      <section className="space-y-3">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-[#8b8b8b] border-b border-[#222225] pb-2">
          Reproducibility
        </h2>
        <pre className="font-mono text-xs bg-[#131314] text-[#8b8b8b] p-4 border border-[#222225] rounded overflow-x-auto">
{`# 3D Volumetric SegResNet baseline training
python src/train_segresnet_3d.py --batch_size 1

# Mathematical Anti-Aliased training protocol
python src/train_segresnet_3d.py --blurpool --batch_size 1

# Wilcoxon & Boundary Interrogation diagnostics
python src/analysis/final_significance.py
python src/analysis/get_pearson.py`}
        </pre>
      </section>

      {/* Cite this Work */}
      <section className="space-y-3">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-[#8b8b8b] border-b border-[#222225] pb-2">
          Cite this Work
        </h2>
        <pre className="font-mono text-xs bg-[#131314] text-[#8b8b8b] p-4 border border-[#222225] rounded overflow-x-auto select-all">
{`@inproceedings{kashyap2026the,
  title={The Structural Cost of Anti-Aliasing in 3D Volumetric Segmentation},
  author={Subhash Kashyap},
  booktitle={Medical Imaging with Deep Learning - Short Papers},
  year={2026},
  url={https://openreview.net/forum?id=F7RaWxyKXD}
}`}
        </pre>
      </section>

      {/* License */}
      <section className="space-y-2 text-xs text-[#8b8b8b]">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-[#8b8b8b] border-b border-[#222225] pb-2">
          License
        </h2>
        <p>
          The source code in this repository is licensed under the MIT License. The manuscript and figures are licensed under Creative Commons Attribution 4.0 International (CC-BY 4.0).
        </p>
      </section>

      {/* Project Page Footer */}
      <footer className="pt-8 border-t border-[#222225] font-mono text-xs flex justify-between text-[#8b8b8b]">
        <span>LAST UPDATED: MAY 2026</span>
        <Link href="/" className="underline underline-offset-4 decoration-1 decoration-[#222225] hover:decoration-[#8b8b8b] hover:text-[#d4d4d4] transition-all">
          Back to Homepage &larr;
        </Link>
      </footer>
    </article>
  )
}
