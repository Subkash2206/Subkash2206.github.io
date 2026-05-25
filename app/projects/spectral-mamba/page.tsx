import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Spectral Mamba | Subhash Kashyap',
  description: 'A rigorous spectral audit of VM-UNet (Visual Mamba) against Swin-Tiny and UNet-ResNet50 on dermatological image segmentation.',
}

export default function SpectralMambaProject() {
  return (
    <article className="max-w-4xl mx-auto py-12 px-4 space-y-16 font-sans antialiased text-slate-800 dark:text-slate-200">
      {/* Back to Home Link */}
      <div className="font-mono text-xs">
        <Link href="/" className="text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 transition-colors">
          &larr; Return to Portfolio
        </Link>
      </div>

      {/* Academic Header */}
      <header className="space-y-6">
        <div className="flex flex-wrap gap-2">
          <span className="font-mono text-xs uppercase bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2.5 py-1 rounded">
            MICCAI MSB Workshop 2026 — Under Review
          </span>
          <span className="font-mono text-xs uppercase bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 px-2.5 py-1 rounded font-medium">
            Primary Research Project
          </span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-slate-50 leading-tight">
          Spectral Mamba: Unmasking Spectral Artifacts in Mamba-Based Medical Image Segmentation
        </h1>

        <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
          <p className="font-medium text-slate-950 dark:text-slate-200">
            <strong>Subhash Kashyap</strong>
          </p>
          <p className="font-mono text-xs">
            Department of Computer Science and Engineering, NIT Rourkela // ISI Bangalore
          </p>
        </div>

        {/* Resources Action Bar */}
        <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono">
          <span className="border border-slate-200 dark:border-slate-800 text-slate-400 px-3 py-2 rounded select-none cursor-not-allowed">
            [ Preprint PDF coming soon ]
          </span>
          <a 
            href="https://github.com/Subkash2206/spectral-mamba-analysis" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="border border-slate-300 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 px-3 py-2 rounded transition-all"
          >
            [ Codebase on GitHub ]
          </a>
        </div>
      </header>

      {/* Abstract */}
      <section className="bg-slate-50/50 dark:bg-slate-900/10 border border-slate-100 dark:border-slate-900/50 p-6 rounded space-y-4">
        <h2 className="font-mono text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500">
          Abstract
        </h2>
        <p className="text-base text-slate-600 dark:text-slate-300 italic leading-relaxed">
          A rigorous spectral audit of VM-UNet (Visual Mamba) against Swin-Tiny and UNet-ResNet50 on dermatological image segmentation. We introduce and operationalize the Alias Violation Ratio (AVR), a mean-centered, DC-corrected spectral aliasing metric applied directly to intermediate encoder feature maps, to test the Spectral Debt hypothesis: that the Selective Scan mechanism in State Space Models (SSMs) introduces architectural aliasing artifacts that explain boundary segmentation deficits.
          <br /><br />
          The findings do not support the hypothesis that spectral aliasing globally explains boundary segmentation deficits. Instead, the analysis reveals a previously unreported dual-stage spectral fingerprint associated with the SSM scan order, whose existence is architectural and whose consequences for boundary precision become statistically negligible once intensity bias is properly removed.
        </p>
      </section>

      {/* TL;DR Section */}
      <section className="space-y-6">
        <h2 className="font-mono text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 font-semibold">
          TL;DR
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-350 leading-relaxed">
          Three architectures, one dataset, one question: does Mamba's spectral aliasing cost it boundary precision?
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-slate-200 dark:border-slate-900 p-5 rounded space-y-3 bg-slate-50/30 dark:bg-slate-900/10">
            <h3 className="font-mono text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-bold">
              Frequency Aliasing
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-semibold">
              Band Decomposition
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Mamba front-loads high-frequency energy at Stage 1, then aggressively self-corrects by Stage 4.
            </p>
            <p className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">
              → A dual-stage spectral fingerprint not shared by CNNs or Transformers.
            </p>
          </div>

          <div className="border border-slate-200 dark:border-slate-900 p-5 rounded space-y-3 bg-slate-50/30 dark:bg-slate-900/10">
            <h3 className="font-mono text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-bold">
              Spectral Fingerprints
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-semibold">
              Power Spectrum
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Mean-centered 2D-FFT heatmaps expose cross-shaped scan artifacts unique to the SSM scan order.
            </p>
            <p className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">
              → Structurally distinctive, not pathological.
            </p>
          </div>

          <div className="border border-slate-200 dark:border-slate-900 p-5 rounded space-y-3 bg-slate-50/30 dark:bg-slate-900/10">
            <h3 className="font-mono text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-bold">
              Correlation Collapse
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-semibold">
              AVR-BF1 Scatter
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Pooled AVR-BF1 Pearson r collapses to +0.0108 (p = 0.670) after DC removal.
            </p>
            <p className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">
              → Spectral aliasing does not globally explain boundary failure.
            </p>
          </div>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic">
          Mamba's O(N) linear scaling advantage over Transformer's O(N²) self-attention comes without a statistically verifiable spectral cost to boundary precision. The observed aliasing patterns appear to be architectural characteristics of the SSM scan mechanism rather than pathological predictors of boundary failure.
        </p>
      </section>

      {/* Background and Motivation */}
      <section className="space-y-4 leading-relaxed">
        <h2 className="font-mono text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500">
          Background and Motivation
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-350">
          State Space Models, and Vision Mamba architectures in particular, have emerged as a compelling alternative to both CNNs and Vision Transformers for dense prediction tasks. VM-UNet achieves competitive segmentation accuracy with linear computational scaling — a substantial efficiency advantage over window-based Transformer attention mechanisms such as Swin-Tiny. However, the Selective Scan mechanism, which processes spatial tokens along four directional traversals (horizontal, vertical, and their reverses), has unknown spectral properties. Unlike convolutions, which have well-characterized frequency responses tied to filter support, or Transformers, whose global self-attention aggregates all spatial frequencies simultaneously, the sequential scan has no obvious frequency-domain prior.
        </p>
        <p className="text-sm text-slate-600 dark:text-slate-350">
          The proposed <strong>Spectral Debt hypothesis</strong> posits that this scan order introduces boundary-frequency leakage — aliasing artifacts that are preferentially harmful to boundary-level precision (as measured by Boundary F1), even when semantic accuracy (Dice) is unaffected. This hypothesis is plausible: if Mamba's scan leaves high-frequency edge information poorly resolved at early stages, downstream boundary delineation could suffer systematically.
        </p>
        <p className="text-sm text-slate-600 dark:text-slate-350">
          This work performs a controlled test of that hypothesis. The key methodological contribution is the DC correction step: all spectral analysis operates on mean-centered feature maps, which strips out the DC component (mean pixel intensity) that otherwise dominates FFT energy spectra and creates spurious correlation artifacts. Prior analyses that reported strong AVR-BF1 links (Pearson r ~ -0.50) failed to apply this correction, and this work demonstrates that the reported link was entirely an artifact of intensity bias rather than structural frequency-domain pathology.
        </p>
      </section>

      {/* 1. Global Performance Audit */}
      <section className="space-y-4">
        <h2 className="font-mono text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500">
          1. Global Performance Audit
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-350">
          Evaluated across N = 519 images from the ISIC2018 validation split (a fixed-seed 20% hold-out of the standard ISIC2018 training set). All checkpoints loaded with strict=True via the flexible_load utility — 100% state-dict authenticated, no partial weight loading.
        </p>

        <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded">
          <table className="min-w-full divide-y divide-slate-250 dark:divide-slate-850 text-left text-xs font-mono">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 text-slate-400 dark:text-slate-500">
                <th className="py-3 px-4 font-mono font-medium">Architecture</th>
                <th className="py-3 px-4 text-right font-mono font-medium">Dice (↑)</th>
                <th className="py-3 px-4 text-right font-mono font-medium">BF1 (↑)</th>
                <th className="py-3 px-4 text-right font-mono font-medium">Mean AVR</th>
                <th className="py-3 px-4 text-right font-mono font-medium">Best Val Dice (Training)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-600 dark:text-slate-300">
              <tr>
                <td className="py-3 px-4 font-sans font-bold text-slate-900 dark:text-slate-100">VM-UNet (Mamba)</td>
                <td className="py-3 px-4 text-right">0.9027</td>
                <td className="py-3 px-4 text-right">0.4939</td>
                <td className="py-3 px-4 text-right">0.2799</td>
                <td className="py-3 px-4 text-right">0.9163</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-sans">Swin-Tiny</td>
                <td className="py-3 px-4 text-right">0.9023</td>
                <td className="py-3 px-4 text-right font-bold text-emerald-600 dark:text-emerald-400">0.5259</td>
                <td className="py-3 px-4 text-right">0.3291</td>
                <td className="py-3 px-4 text-right">0.9061</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-sans">UNet-ResNet50</td>
                <td className="py-3 px-4 text-right">0.9000</td>
                <td className="py-3 px-4 text-right">0.4470</td>
                <td className="py-3 px-4 text-right">0.2954</td>
                <td className="py-3 px-4 text-right">0.9083</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 italic">
          Source: VM-UNet/results/boundary_results.csv
        </p>
        <p className="text-sm text-slate-600 dark:text-slate-350">
          All three architectures converge to near-identical Dice (~0.90), indicating that semantic segmentation accuracy saturates at ISIC2018 scale regardless of architectural inductive bias. The 2.7-point BF1 gap between Swin-Tiny and VM-UNet is real, but it is not attributable to spectral aliasing. Mamba also carries the lowest mean AVR of the three architectures (0.2799 vs. 0.3291 for Swin and 0.2954 for UNet).
        </p>
      </section>

      {/* 2. Stage-wise AVR: The Dual-Stage Fingerprint */}
      <section className="space-y-4">
        <h2 className="font-mono text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500">
          2. Stage-wise AVR: The Dual-Stage Fingerprint
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-350">
          AVR (Alias Violation Ratio) measures the proportion of feature map energy concentrated above the 0.5 relative frequency threshold associated with aliasing-sensitive regions of the frequency plane. All AVRs are computed on mean-centered feature maps to suppress the DC component.
        </p>

        <div className="font-mono text-xs bg-slate-50 dark:bg-slate-900/50 p-4 rounded border border-slate-150 dark:border-slate-850 space-y-2">
          <p className="text-center font-semibold text-slate-900 dark:text-slate-100">
            {"AVR(f) = [ \u2211_{\u03BE,:,|\u03BE|_\u221E > 0.5} |f^(\u03BE)|^2 ] / [ \u2211_\u03BE |f^(\u03BE)|^2 ],   f^ = F[f - \u03BC(f)]"}
          </p>
          <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-normal">
            where Chebyshev frequency norm is normalized to [-1,1], and {"\u03BC(f)"} is the spatial mean computed over spatial dimensions.
          </p>
        </div>

        <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded pt-2">
          <table className="min-w-full divide-y divide-slate-250 dark:divide-slate-850 text-left text-xs font-mono">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 text-slate-400 dark:text-slate-500">
                <th className="py-3 px-4 font-mono font-medium">Model</th>
                <th className="py-3 px-4 text-right font-mono font-medium">Stage 1 (64x64)</th>
                <th className="py-3 px-4 text-right font-mono font-medium">Stage 2 (32x32)</th>
                <th className="py-3 px-4 text-right font-mono font-medium">Stage 3 (16x16)</th>
                <th className="py-3 px-4 text-right font-mono font-medium">Stage 4 (8x8)</th>
                <th className="py-3 px-4 text-right font-mono font-semibold">Mean AVR</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-600 dark:text-slate-300">
              <tr>
                <td className="py-3 px-4 font-sans">UNet-ResNet50</td>
                <td className="py-3 px-4 text-right">0.3427</td>
                <td className="py-3 px-4 text-right">0.3613</td>
                <td className="py-3 px-4 text-right">0.2974</td>
                <td className="py-3 px-4 text-right">0.1802</td>
                <td className="py-3 px-4 text-right">0.2954</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-sans">Swin-Tiny</td>
                <td className="py-3 px-4 text-right">0.3276</td>
                <td className="py-3 px-4 text-right">0.3744</td>
                <td className="py-3 px-4 text-right">0.2519</td>
                <td className="py-3 px-4 text-right">0.3623</td>
                <td className="py-3 px-4 text-right">0.3291</td>
              </tr>
              <tr className="bg-emerald-500/5 dark:bg-emerald-500/10">
                <td className="py-3 px-4 font-sans font-bold text-slate-950 dark:text-slate-50">VM-UNet (Mamba)</td>
                <td className="py-3 px-4 text-right text-red-500 font-bold">0.4600</td>
                <td className="py-3 px-4 text-right">0.3840</td>
                <td className="py-3 px-4 text-right text-emerald-600 dark:text-emerald-400">0.1408</td>
                <td className="py-3 px-4 text-right text-emerald-600 dark:text-emerald-400 font-bold">0.1346</td>
                <td className="py-3 px-4 text-right font-bold">0.2799</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 italic">
          Source: VM-UNet/results/avr_stagewise_results_matched.csv
        </p>
        <p className="text-sm text-slate-600 dark:text-slate-350">
          <strong>The Dual-Stage Characteristic:</strong> Mamba enters Stage 1 at AVR 0.46 — approximately 35% above the CNN baseline of 0.34. This is the Spectral Debt: substantial high-frequency energy at full spatial resolution, a direct consequence of the four-directional Selective Scan processing tokens before downsampling. By Stage 4, however, Mamba exhibits the strongest high-frequency suppression of the three, reaching AVR 0.13 — well below Swin (0.36) and UNet (0.18). This front-loaded debt followed by deep-layer self-correction is a defining fingerprint of the SSM selective scan, not shared by CNNs (smooth monotonic decline) or Transformers (plateau behavior from Stages 2-4).
        </p>
      </section>

      {/* 3. Correlation Analysis: The Collapse */}
      <section className="space-y-4">
        <h2 className="font-mono text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 font-semibold">
          3. Correlation Analysis: The Collapse
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-350">
          Per-image Pearson correlation between mean AVR (averaged across all four encoder stages) and Boundary F1, computed across the full N = 519 validation set after DC correction.
        </p>

        <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded">
          <table className="min-w-full divide-y divide-slate-250 dark:divide-slate-850 text-left text-xs font-mono">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 text-slate-400 dark:text-slate-500">
                <th className="py-3 px-4 font-mono font-medium">Population</th>
                <th className="py-3 px-4 text-right font-mono font-medium">Pearson r</th>
                <th className="py-3 px-4 text-right font-mono font-medium">p-value</th>
                <th className="py-3 px-4 text-right font-mono font-medium">N</th>
                <th className="py-3 px-4 font-mono font-medium">Interpretation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-600 dark:text-slate-300">
              <tr>
                <td className="py-3 px-4 font-sans font-bold">VM-UNet (Mamba)</td>
                <td className="py-3 px-4 text-right">+0.0998</td>
                <td className="py-3 px-4 text-right">0.0229</td>
                <td className="py-3 px-4 text-right">519</td>
                <td className="py-3 px-4 font-sans text-xs">Weak but significant within-model trend</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-sans">Swin-Tiny</td>
                <td className="py-3 px-4 text-right">+0.0188</td>
                <td className="py-3 px-4 text-right">0.6686</td>
                <td className="py-3 px-4 text-right">519</td>
                <td className="py-3 px-4 font-sans text-xs">No significant correlation</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-sans">UNet-ResNet50</td>
                <td className="py-3 px-4 text-right">-0.1880</td>
                <td className="py-3 px-4 text-right">&lt; 0.0001</td>
                <td className="py-3 px-4 text-right">519</td>
                <td className="py-3 px-4 font-sans text-xs">Weak but significant within-model trend</td>
              </tr>
              <tr className="bg-emerald-500/5 dark:bg-emerald-500/10 font-bold">
                <td className="py-3 px-4 font-sans text-slate-950 dark:text-slate-50">Pooled (all models)</td>
                <td className="py-3 px-4 text-right text-emerald-600 dark:text-emerald-400">+0.0108</td>
                <td className="py-3 px-4 text-right">0.6704</td>
                <td className="py-3 px-4 text-right">1,557</td>
                <td className="py-3 px-4 font-sans text-xs text-emerald-600 dark:text-emerald-400">No global correlation — Collapse confirmed</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-sans font-bold">Partial (model-controlled)</td>
                <td className="py-3 px-4 text-right">-0.0001</td>
                <td className="py-3 px-4 text-right">0.9956</td>
                <td className="py-3 px-4 text-right">1,557</td>
                <td className="py-3 px-4 font-sans text-xs">No structural link</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 italic">
          Source: VM-UNet/results/correlation_results.csv
        </p>
        <p className="text-sm text-slate-600 dark:text-slate-350">
          <strong>The Correlation Collapse:</strong> Mamba shows a statistically significant within-model trend (r = 0.0998, p = 0.023), but this disappears when pooling across architectures: pooled r = +0.0108 (p = 0.670), statistically indistinguishable from zero. The partial correlation yields r = -0.0001 (p = 0.996), confirming that the within-model signals are architecture-specific phenomena, not a structural spectral-to-boundary link.
          <br /><br />
          <strong>The intensity bias artifact:</strong> The previous (erroneous) finding of strong AVR-BF1 correlation was an artifact of uncentered FFTs. Without mean-centering, the DC component dominates the energy spectrum — bright images accumulate high DC energy that simultaneously predicts both high denominator AVR and easier segmentation tasks, creating a spurious negative correlation. The DC correction eliminates this confound entirely.
        </p>
      </section>

      {/* 4. Translation Equivariance (Shift Consistency) */}
      <section className="space-y-4">
        <h2 className="font-mono text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500">
          4. Translation Equivariance (Shift Consistency)
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-350">
          Shift consistency measures whether a model produces stable predictions under small spatial translations. For each validation image, a horizontal pixel shift of magnitude s is applied via torch.roll, inference is run on the shifted image, the output is shifted back by -s, and mean IoU is computed against the unshifted baseline prediction.
        </p>

        <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded">
          <table className="min-w-full divide-y divide-slate-250 dark:divide-slate-850 text-left text-xs font-mono">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 text-slate-400 dark:text-slate-500">
                <th className="py-3 px-4 font-mono font-medium">Model</th>
                <th className="py-3 px-4 text-right font-mono font-medium">Shift 1</th>
                <th className="py-3 px-4 text-right font-mono font-medium">Shift 2</th>
                <th className="py-3 px-4 text-right font-mono font-medium">Shift 3</th>
                <th className="py-3 px-4 text-right font-mono font-medium">Shift 4</th>
                <th className="py-3 px-4 text-right font-mono font-semibold">Shift 5</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-600 dark:text-slate-300">
              <tr>
                <td className="py-3 px-4 font-sans">UNet-ResNet50</td>
                <td className="py-3 px-4 text-right">0.9843</td>
                <td className="py-3 px-4 text-right">0.9773</td>
                <td className="py-3 px-4 text-right">0.9730</td>
                <td className="py-3 px-4 text-right">0.9730</td>
                <td className="py-3 px-4 text-right">0.9702</td>
              </tr>
              <tr className="bg-emerald-500/5 dark:bg-emerald-500/10">
                <td className="py-3 px-4 font-sans font-bold text-slate-950 dark:text-slate-50">VM-UNet (Mamba)</td>
                <td className="py-3 px-4 text-right">0.9719</td>
                <td className="py-3 px-4 text-right">0.9616</td>
                <td className="py-3 px-4 text-right">0.9592</td>
                <td className="py-3 px-4 text-right">0.9624</td>
                <td className="py-3 px-4 text-right text-emerald-600 dark:text-emerald-400 font-bold">0.9552</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-sans">Swin-Tiny</td>
                <td className="py-3 px-4 text-right">0.9621</td>
                <td className="py-3 px-4 text-right">0.9520</td>
                <td className="py-3 px-4 text-right">0.9487</td>
                <td className="py-3 px-4 text-right">0.9483</td>
                <td className="py-3 px-4 text-right text-red-500">0.9391</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 italic">
          Source: VM-UNet/results/shift_consistency_results.csv
        </p>
        <p className="text-sm text-slate-600 dark:text-slate-350">
          UNet-ResNet50 leads on shift consistency. More notable: Mamba outperforms Swin-Tiny at every shift magnitude (Shift-5 advantage: +1.61 IoU points, 0.9552 vs. 0.9391).
          <br /><br />
          Despite Mamba's high Stage-1 AVR, the Selective Scan mechanism does not propagate that instability through to output-level translation sensitivity. The dual-stage self-correction appears functionally effective: by the time activations reach the bottleneck, Mamba has suppressed the early spectral noise.
        </p>
      </section>

      {/* 5. Frequency Domain Diagnostics */}
      <section className="space-y-6">
        <h2 className="font-mono text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500">
          5. Frequency Domain Diagnostics
        </h2>

        {/* 5a. Band Decomposition */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">// 5a. Band Decomposition</h3>
          <p className="text-sm text-slate-600 dark:text-slate-350">
            Feature map energy partitioned into three frequency bands computed on mean-centered maps across all four encoder stages. Band boundaries are defined in normalized frequency units using the Chebyshev norm: Low ({"\u2264 0.25"}), Mid ({"0.25 < \u03BE \u2264 0.75"}), High ({"> 0.75"}).
          </p>

          <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded">
            <table className="min-w-full divide-y divide-slate-250 dark:divide-slate-850 text-left text-xs font-mono">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-900/50 text-slate-400 dark:text-slate-500">
                  <th className="py-3 px-4 font-mono font-medium">Model</th>
                  <th className="py-3 px-4 text-center font-mono font-medium">Stage</th>
                  <th className="py-3 px-4 text-right font-mono font-medium">Low</th>
                  <th className="py-3 px-4 text-right font-mono font-medium">Mid</th>
                  <th className="py-3 px-4 text-right font-mono font-medium">High</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-600 dark:text-slate-300">
                {/* UNet */}
                <tr>
                  <td className="py-3 px-4 font-sans font-bold" rowSpan={4}>UNet-ResNet50</td>
                  <td className="py-3 px-4 text-center">1</td>
                  <td className="py-3 px-4 text-right">0.394</td>
                  <td className="py-3 px-4 text-right">0.480</td>
                  <td className="py-3 px-4 text-right">0.126</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-center">2</td>
                  <td className="py-3 px-4 text-right">0.356</td>
                  <td className="py-3 px-4 text-right">0.506</td>
                  <td className="py-3 px-4 text-right">0.138</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-center">3</td>
                  <td className="py-3 px-4 text-right">0.430</td>
                  <td className="py-3 px-4 text-right">0.465</td>
                  <td className="py-3 px-4 text-right">0.105</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-center">4</td>
                  <td className="py-3 px-4 text-right">0.548</td>
                  <td className="py-3 px-4 text-right">0.401</td>
                  <td className="py-3 px-4 text-right">0.051</td>
                </tr>
                {/* Swin */}
                <tr className="border-t border-slate-200 dark:border-slate-800">
                  <td className="py-3 px-4 font-sans font-bold" rowSpan={4}>Swin-Tiny</td>
                  <td className="py-3 px-4 text-center">1</td>
                  <td className="py-3 px-4 text-right">0.558</td>
                  <td className="py-3 px-4 text-right">0.283</td>
                  <td className="py-3 px-4 text-right">0.159</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-center">2</td>
                  <td className="py-3 px-4 text-right">0.391</td>
                  <td className="py-3 px-4 text-right">0.414</td>
                  <td className="py-3 px-4 text-right">0.194</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-center">3</td>
                  <td className="py-3 px-4 text-right">0.440</td>
                  <td className="py-3 px-4 text-right">0.466</td>
                  <td className="py-3 px-4 text-right">0.094</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-center">4</td>
                  <td className="py-3 px-4 text-right">~0.000</td>
                  <td className="py-3 px-4 text-right">0.891</td>
                  <td className="py-3 px-4 text-right">0.109</td>
                </tr>
                {/* Mamba */}
                <tr className="border-t border-slate-200 dark:border-slate-800 bg-emerald-500/5 dark:bg-emerald-500/10">
                  <td className="py-3 px-4 font-sans font-bold" rowSpan={4}>VM-UNet (Mamba)</td>
                  <td className="py-3 px-4 text-center">1</td>
                  <td className="py-3 px-4 text-right">0.322</td>
                  <td className="py-3 px-4 text-right">0.451</td>
                  <td className="py-3 px-4 text-right text-red-500">0.228</td>
                </tr>
                <tr className="bg-emerald-500/5 dark:bg-emerald-500/10">
                  <td className="py-3 px-4 text-center">2</td>
                  <td className="py-3 px-4 text-right">0.372</td>
                  <td className="py-3 px-4 text-right">0.460</td>
                  <td className="py-3 px-4 text-right">0.168</td>
                </tr>
                <tr className="bg-emerald-500/5 dark:bg-emerald-500/10">
                  <td className="py-3 px-4 text-center">3</td>
                  <td className="py-3 px-4 text-right text-emerald-600 dark:text-emerald-400">0.710</td>
                  <td className="py-3 px-4 text-right">0.242</td>
                  <td className="py-3 px-4 text-right text-emerald-600 dark:text-emerald-400">0.048</td>
                </tr>
                <tr className="bg-emerald-500/5 dark:bg-emerald-500/10">
                  <td className="py-3 px-4 text-center">4</td>
                  <td className="py-3 px-4 text-right text-emerald-600 dark:text-emerald-400 font-bold">0.694</td>
                  <td className="py-3 px-4 text-right">0.274</td>
                  <td className="py-3 px-4 text-right text-emerald-600 dark:text-emerald-400">0.033</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 italic">
            Source: VM-UNet/results/band_decomposition_results.csv
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-350">
            At Stage 1, Mamba carries 22.8% of its energy in the high-frequency band — the highest of the three models. By Stage 4, this compresses to 3.3%, the lowest. The UNet trajectory is monotonically smooth. Swin exhibits an anomaly at Stage 4 where the low-band ratio collapses to machine epsilon (~2.7e-14): this is an expected artifact of LayerNorm in the final Swin transformer stage.
          </p>
        </div>

        {/* 5b. Spectral Fingerprints */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">// 5b. Spectral Fingerprints (2D-FFT Power Grids)</h3>
          <p className="text-sm text-slate-600 dark:text-slate-350">
            The cross-shaped artifacts in the Mamba rows correspond directly to the four-directional scan traversal of the SSM: horizontal and vertical sweeps and their reverses each contribute an oriented frequency signature, which manifests as a cross pattern in the 2D power spectrum. These artifacts are structural fingerprints of the scan mechanism — reproducible and interpretable — and are statistically inert with respect to boundary performance once intensity bias is removed.
          </p>
        </div>
      </section>

      {/* 6. Methodology and Audit Rigor */}
      <section className="space-y-6">
        <h2 className="font-mono text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500">
          6. Methodology and Audit Rigor
        </h2>

        <div className="space-y-4 text-sm text-slate-600 dark:text-slate-350">
          <div>
            <h3 className="text-slate-900 dark:text-slate-100 font-bold">// 6a. AVR Definition</h3>
            <p className="mt-1">All spectral metrics use mean-centered feature maps to exclude the DC component:</p>
            <div className="font-mono text-xs bg-slate-50 dark:bg-slate-900/50 p-4 my-2 rounded text-center border border-slate-150 dark:border-slate-850">
              {"AVR(f) = [ \u2211_{\u03BE,:,|\u03BE|_\u221E > 0.5} |Ff - \u03BC(f)|^2 ] / [ \u2211_{\u03BE} |Ff - \u03BC(f)|^2 ]"}
            </div>
            <p className="text-xs text-slate-500 mt-1">
              The threshold 0.5 in the Chebyshev norm corresponds to the boundary between the inner quarter and outer three-quarters of the 2D frequency plane, consistent with standard antialiasing conventions at the relative Nyquist limit. The mean-centering is applied per feature map over the spatial (H,W) dimensions using fmap.mean(dim=(-2, -1), keepdim=True).
            </p>
          </div>

          <div>
            <h3 className="text-slate-900 dark:text-slate-100 font-bold">// 6b. Boundary F1 Protocol</h3>
            <p className="mt-1">Edge precision is evaluated via morphological boundary extraction with a pixel-tolerance distance threshold of D = 2:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-xs text-slate-500">
              <li>Extract 1-pixel boundaries: boundary = mask XOR binary_erosion(mask, iterations=1)</li>
              <li>Build signed distance transforms from both pred and GT boundaries via distance_transform_edt(~boundary)</li>
              <li>Count true positives with tolerance: pred-boundary pixels within D = 2 pixels of the GT boundary, and vice versa</li>
              <li>Compute precision and recall from the tolerant TP counts</li>
              <li>BF1 = (2 * precision * recall) / (precision + recall)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-slate-900 dark:text-slate-100 font-bold">// 6c. Data Split</h3>
            <p className="mt-1 text-xs">
              The ISIC2018 training set contains 2,594 dermoscopy images. A 20% fixed-seed hold-out of the training distribution was used for all spectral and performance audits (N = 519). The split is deterministic and reproducible:
              <br />
              <code className="block bg-slate-50 dark:bg-slate-950 p-2 mt-2 border border-slate-150 dark:border-slate-900 rounded font-mono text-[10px]">
                random.seed(42)<br />
                random.shuffle(sorted_image_paths)<br />
                val_imgs = sorted_image_paths[int(0.8 * len(sorted_image_paths)):]
              </code>
            </p>
          </div>

          <div>
            <h3 className="text-slate-900 dark:text-slate-100 font-bold">// 6d. Feature Extraction Protocol</h3>
            <p className="mt-1 text-xs">
              Intermediate features are extracted via PyTorch forward hooks registered on the following modules:
              <br />
              - UNet-ResNet50: encoder.layer1 through encoder.layer4 (Output of each ResNet stage)
              <br />
              - Swin-Tiny: swin_unet.layers[i-1] (i=1..4) (Output of each Swin stage)
              <br />
              - VM-UNet (Mamba): vmunet.layers[i-1] (i=1..4) (Output of each VSS stage)
              <br />
              For Swin and Mamba stages whose outputs are in channel-last format (B, H, W, C) or sequence format (B, L, C), outputs are permuted or reshaped to (B, C, H, W) before AVR computation.
            </p>
          </div>

          <div>
            <h3 className="text-slate-900 dark:text-slate-100 font-bold">// 6e. Weight Authentication</h3>
            <p className="mt-1 text-xs">
              All model checkpoints are loaded via the flexible_load utility with strict=True, which enforces 100% state-dict key matching after stripping profiling metadata. No partial weight loading or weight interpolation is performed.
            </p>
          </div>

          <div>
            <h3 className="text-slate-900 dark:text-slate-100 font-bold">// 6f. Partial Correlation</h3>
            <p className="mt-1 text-xs">
              The partial correlation (Table 3, last row) controls for architecture-level mean differences in both AVR and BF1 via OLS regression:
              <br />
              <code className="block bg-slate-50 dark:bg-slate-950 p-2 mt-2 border border-slate-150 dark:border-slate-900 rounded font-mono text-[10px]">
                X = one_hot_architecture_indicators  # shape (1557, 3)<br />
                resid_avr = avr - X @ np.linalg.lstsq(X, avr, rcond=None)[0]<br />
                resid_bf1 = bf1 - X @ np.linalg.lstsq(X, bf1, rcond=None)[0]<br />
                r_partial, p_partial = pearsonr(resid_avr, resid_bf1)
              </code>
            </p>
          </div>
        </div>
      </section>

      {/* 7. Model Architectures and Training */}
      <section className="space-y-4">
        <h2 className="font-mono text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500">
          7. Model Architectures and Training
        </h2>

        <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded">
          <table className="min-w-full divide-y divide-slate-250 dark:divide-slate-850 text-left text-xs font-mono">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 text-slate-400 dark:text-slate-500">
                <th className="py-3 px-4 font-mono font-medium">Model</th>
                <th className="py-3 px-4 font-mono font-medium">Backbone</th>
                <th className="py-3 px-4 font-mono font-medium">Input Size</th>
                <th className="py-3 px-4 font-mono font-medium">Complexity</th>
                <th className="py-3 px-4 font-mono font-medium">Pretrained Encoder</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-600 dark:text-slate-300">
              <tr>
                <td className="py-3 px-4 font-sans font-bold">VM-UNet</td>
                <td className="py-3 px-4">VMamba (VSS blocks)</td>
                <td className="py-3 px-4">256x256</td>
                <td className="py-3 px-4">O(N)</td>
                <td className="py-3 px-4">No (scratch)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-sans font-bold">Swin-Tiny</td>
                <td className="py-3 px-4">Swin Transformer</td>
                <td className="py-3 px-4">224x224</td>
                <td className="py-3 px-4">O(N log N)</td>
                <td className="py-3 px-4">ImageNet-1K</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-sans font-bold">UNet-ResNet50</td>
                <td className="py-3 px-4">ResNet50</td>
                <td className="py-3 px-4">256x256</td>
                <td className="py-3 px-4">O(N)</td>
                <td className="py-3 px-4">ImageNet</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-350 leading-relaxed">
          VM-UNet uses encoder depths [2, 2, 9, 2] and decoder depths [2, 9, 2, 2], with drop path rate 0.2. All models output a single-channel binary segmentation mask. VM-UNet applies sigmoid internally in its forward pass, while UNet-ResNet50 and Swin-Tiny output raw logits.
        </p>

        <p className="text-xs text-slate-500 font-mono">
          Training Protocol:<br />
          - Optimizer: Adam (lr=1e-4) for all architectures.<br />
          - Batch Size: 4 for VM-UNet, 8 for Swin-Tiny & UNet-ResNet50.<br />
          - Loss Function: Dice loss. Trained for 100 epochs.<br />
          - Augmentations: Horizontal & vertical flips, random rotation (360 degrees).
        </p>
      </section>

      {/* 8. Repository Structure */}
      <section className="space-y-4">
        <h2 className="font-mono text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500">
          8. Repository Structure
        </h2>
        <pre className="font-mono text-xs bg-slate-50 dark:bg-slate-950 p-4 border border-slate-150 dark:border-slate-900 rounded overflow-x-auto text-slate-600 dark:text-slate-450 leading-relaxed">
{`spectral-mamba-analysis/
├── models/
│   └── vmunet/
│       ├── vmunet.py              # VM-UNet wrapper (sigmoid output)
│       └── vmamba.py              # VMamba backbone (SSM scan implementation)
├── tools/
│   ├── boundary_eval.py           # Global Dice + BF1 evaluation [AUTHORITATIVE]
│   ├── master_avr_audit.py        # Stage-wise AVR audit          [AUTHORITATIVE]
│   └── hook_test.py               # Hook validation utility
├── per_image_correlation.py       # AVR-BF1 Pearson correlation   [AUTHORITATIVE]
├── shift_consistency.py           # Translation equivariance audit [AUTHORITATIVE]
├── run_band_only.py               # Band decomposition & figure generation
├── results/
│   ├── boundary_results.csv
│   ├── correlation_results.csv
│   └── shift_consistency_results.csv`}
        </pre>
      </section>

      {/* 9. Reproduction Guide */}
      <section className="space-y-4">
        <h2 className="font-mono text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 font-semibold">
          9. Reproduction Guide
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-350">
          Ensure checkpoints are placed in <code className="font-mono bg-slate-100 dark:bg-slate-900 px-1 rounded">VM-UNet/best-ckpt/</code> and the ISIC2018 dataset is unzipped in <code className="font-mono bg-slate-100 dark:bg-slate-900 px-1 rounded">VM-UNet/data/isic18/</code>.
        </p>
        <pre className="font-mono text-xs bg-slate-50 dark:bg-slate-950 p-4 border border-slate-150 dark:border-slate-900 rounded overflow-x-auto text-slate-600 dark:text-slate-450">
{`# 1. Evaluate Dice and BF1 on N=519 validation images
python tools/boundary_eval.py

# 2. Run per-image correlation (disproves AVR-BF1 causal link)
python per_image_correlation.py

# 3. Audit translation equivariance (shift consistency)
python shift_consistency.py

# 4. Extract stage-wise AVR features via hooks
python tools/master_avr_audit.py

# 5. Generate band decomposition and 2D FFT figures
python run_band_only.py`}
        </pre>
      </section>

      {/* 10. Known Limitations */}
      <section className="space-y-4 leading-relaxed">
        <h2 className="font-mono text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500">
          10. Known Limitations
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600 dark:text-slate-350">
          <li><strong>Validation split:</strong> Evaluation is performed on a 20% hold-out of the ISIC2018 training distribution, not the official ISIC2018 test set.</li>
          <li><strong>Single dataset:</strong> Findings are derived exclusively from ISIC2018 dermoscopy images; generalization to CT/MRI remains an open question.</li>
          <li><strong>Horizontal-only shifts:</strong> Shift consistency is evaluated under horizontal pixel shifts only.</li>
          <li><strong>Cyclic boundary conditions:</strong> torch.roll shift introduces small wrap-around artifacts at the borders.</li>
          <li><strong>Swin Stage 4 low-band anomaly:</strong> Swin-Tiny Stage 4 low-band energy ratio collapses to machine epsilon (~2.7e-14) due to LayerNorm normalization.</li>
        </ul>
      </section>

      {/* BibTeX Citation */}
      <section className="space-y-4">
        <h2 className="font-mono text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500">
          Cite this Work
        </h2>
        <div className="relative">
          <pre className="font-mono text-xs bg-slate-50 dark:bg-slate-950 p-4 border border-slate-150 dark:border-slate-900 rounded overflow-x-auto text-slate-600 dark:text-slate-400 select-all">
{`@inproceedings{kashyap2026spectral,
  title={Spectral Mamba: Unmasking Spectral Artifacts in Mamba-Based Medical Image Segmentation},
  author={Kashyap, Subhash},
  booktitle={MICCAI MSB EMERGE Workshop},
  year={2026},
  url={https://github.com/Subkash2206/spectral-mamba-analysis}
}`}
          </pre>
        </div>
      </section>

      {/* Project Page Footer */}
      <footer className="pt-8 border-t border-slate-200 dark:border-slate-800 font-mono text-xs flex justify-between text-slate-450">
        <span>LAST UPDATED: MAY 2026</span>
        <Link href="/" className="hover:text-slate-900 dark:hover:text-slate-50 transition-colors">
          Back to Portfolio &larr;
        </Link>
      </footer>
    </article>
  )
}
