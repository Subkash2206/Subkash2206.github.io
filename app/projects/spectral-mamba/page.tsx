import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Spectral Mamba | Subhash Kashyap',
  description: 'A rigorous spectral audit of VM-UNet (Visual Mamba) against Swin-Tiny and UNet-ResNet50 on dermatological image segmentation.',
}

export default function SpectralMambaProject() {
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
          <span>MICCAI MSB WORKSHOP 2026</span>
          <span>&bull;</span>
          <span>UNDER REVIEW</span>
        </div>
        
        <h1 className="text-lg font-semibold tracking-tight text-[#d4d4d4] leading-snug">
          Spectral Mamba: Unmasking Spectral Artifacts in Mamba-Based Medical Image Segmentation
        </h1>

        <div className="text-xs text-[#8b8b8b]">
          <p className="font-medium text-[#d4d4d4]">Subhash Kashyap</p>
          <p className="font-mono">Department of Computer Science and Engineering, NIT Rourkela &bull; ISI Bangalore</p>
        </div>

        {/* Resources Action Bar */}
        <div className="flex gap-4 text-xs font-sans">
          <span className="text-[#8b8b8b] select-none">
            [ Preprint PDF coming soon ]
          </span>
          <a 
            href="https://github.com/Subkash2206/spectral-mamba-analysis" 
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
          This project performs a rigorous spectral audit of VM-UNet (Visual Mamba) against Swin-Tiny and UNet-ResNet50 on dermatological image segmentation (ISIC2018, $N = 519$). We introduce and operationalize the Alias Violation Ratio (AVR), a mean-centered, DC-corrected spectral aliasing metric applied directly to intermediate encoder feature maps, to test the Spectral Debt hypothesis: that the Selective Scan mechanism in State Space Models (SSMs) introduces architectural aliasing artifacts that explain boundary segmentation deficits.
        </p>
        <p className="text-[#d4d4d4]">
          The findings do not support the hypothesis that spectral aliasing globally explains boundary segmentation deficits. Instead, the analysis reveals a previously unreported dual-stage spectral fingerprint associated with the SSM scan order, whose existence is architectural and whose consequences for boundary precision become statistically negligible once intensity bias is properly removed.
        </p>
      </section>

      {/* TL;DR / High-level Summary */}
      <section className="space-y-3">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-[#8b8b8b] border-b border-[#222225] pb-2">
          Key Insights
        </h2>
        <ul className="space-y-2 list-disc pl-4 marker:text-[#8b8b8b]">
          <li>
            <strong>Dual-Stage Spectral Fingerprint</strong>: Mamba front-loads high-frequency energy at Stage 1, then aggressively self-corrects by Stage 4. This is a unique architectural behavior not shared by CNNs or Transformers.
          </li>
          <li>
            <strong>Aliasing Equivalence</strong>: AVR metrics prove that VM-UNet does not suffer from statistically elevated global aliasing noise compared to UNet-ResNet50 or Swin-Tiny.
          </li>
          <li>
            <strong>Topological Robustness</strong>: VM-UNet demonstrates an advantage of $+1.61\%$ IoU in boundary consistency under sub-pixel translation shifts compared to Swin-Tiny at Shift 5, disproving the notion of inherent SSM spatial discretization frailty.
          </li>
        </ul>
      </section>

      {/* Key Results */}
      <section className="space-y-3">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-[#8b8b8b] border-b border-[#222225] pb-2">
          Quantitative Evaluation (ISIC2018 validation set)
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs text-[#d4d4d4] border-collapse">
            <thead>
              <tr className="border-b border-[#222225] text-[#8b8b8b]">
                <th className="py-2 text-left font-semibold">Model Architecture</th>
                <th className="py-2 text-right font-semibold">Mean Dice</th>
                <th className="py-2 text-right font-semibold">Boundary F1</th>
                <th className="py-2 text-right font-semibold">Stage 1 AVR</th>
                <th className="py-2 text-right font-semibold">Stage 4 AVR</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#222225]">
              <tr>
                <td className="py-2">UNet-ResNet50 (Static CNN)</td>
                <td className="py-2 text-right">88.54%</td>
                <td className="py-2 text-right">80.20%</td>
                <td className="py-2 text-right">0.054</td>
                <td className="py-2 text-right">0.024</td>
              </tr>
              <tr>
                <td className="py-2">Swin-Tiny (Hierarchical ViT)</td>
                <td className="py-2 text-right font-semibold">89.92%</td>
                <td className="py-2 text-right">81.14%</td>
                <td className="py-2 text-right">0.061</td>
                <td className="py-2 text-right">0.028</td>
              </tr>
              <tr>
                <td className="py-2">VM-UNet (Visual Mamba SSM)</td>
                <td className="py-2 text-right">89.33%</td>
                <td className="py-2 text-right">80.95%</td>
                <td className="py-2 text-right font-semibold">0.078 (elevated)</td>
                <td className="py-2 text-right font-semibold">0.019 (damped)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Reproducibility */}
      <section className="space-y-3">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-[#8b8b8b] border-b border-[#222225] pb-2">
          Reproducibility
        </h2>
        <pre className="font-mono text-xs bg-[#131314] text-[#8b8b8b] p-4 border border-[#222225] rounded overflow-x-auto">
{`# Stage-wise power spectrum and AVR interrogation
python src/run_spectral_audit.py --config config/isic_audit.yaml

# Evaluate sub-pixel translation shift consistency
python src/eval_shift_consistency.py --model vmunet --dataset isic`}
        </pre>
      </section>

      {/* Cite this Work */}
      <section className="space-y-3">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-[#8b8b8b] border-b border-[#222225] pb-2">
          Cite this Work
        </h2>
        <pre className="font-mono text-xs bg-[#131314] text-[#8b8b8b] p-4 border border-[#222225] rounded overflow-x-auto select-all">
{`@article{kashyap2026spectral,
  title={Spectral Mamba: Unmasking Spectral Artifacts in Mamba-Based Medical Image Segmentation},
  author={Subhash Kashyap},
  journal={arXiv preprint arXiv:2605.xxxxx},
  year={2026},
  url={https://github.com/Subkash2206/spectral-mamba-analysis}
}`}
        </pre>
      </section>

      {/* License */}
      <section className="space-y-2 text-xs text-[#8b8b8b]">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-[#8b8b8b] border-b border-[#222225] pb-2">
          License
        </h2>
        <p>
          The evaluation suite and analysis scripts are licensed under the MIT License. Manuscript materials are licensed under Creative Commons Attribution 4.0 International (CC-BY 4.0).
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
