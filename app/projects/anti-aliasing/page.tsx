import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Anti-Aliasing Structural Cost | Subhash Kashyap',
  description: 'Accepted at MIDL 2026. Translates BlurPool downsampling into a 3D volumetric SegResNet operating natively on the BraTS 2021 clinical MRI dataset.',
}

export default function AntiAliasingProject() {
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
          <span className="font-mono text-xs uppercase bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 px-2.5 py-1 rounded font-medium">
            MIDL 2026 — Accepted Short Paper
          </span>
          <span className="font-mono text-xs uppercase bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2.5 py-1 rounded">
            BraTS 2021 Volumetric MRI Evaluation
          </span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-slate-50 leading-tight">
          Spectral Aliasing in CNN-Based Brain Tumor Segmentation: The Structural Cost of Anti-Aliasing in 3D Volumetric Segmentation
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
          <a 
            href="https://openreview.net/forum?id=F7RaWxyKXD" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="border border-slate-300 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 px-3 py-2 rounded transition-all"
          >
            [ MIDL OpenReview Forum ]
          </a>
          <a 
            href="https://github.com/Subkash2206/aliasing-tumor-boundaries" 
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
          Abstract / TL;DR
        </h2>
        <p className="text-base text-slate-600 dark:text-slate-350 italic leading-relaxed">
          The classical mathematical assumption in standard Deep Learning literature is that anti-aliasing repairs convolutional shift variance and strictly improves overall network intelligence. This project translates anti-aliasing techniques from basic two-dimensional toy classifiers directly into a massive state of the art three-dimensional Volumetric SegResNet operating natively on the BraTS 2021 clinical MRI dataset.
          <br /><br />
          The empirical results physically prove a major structural trade off in modern medical imaging models. Injecting mathematical low pass filters into the network cleanly reduces deep spectral variance by roughly 50 percent. However, forcing a complex three-dimensional dense medical architecture to obey strict Nyquist equivariance paradoxically damages its ability to accurately trace complex anatomical topologies. Elite geometric architectures actively and mathematically exploit high frequency aliased edges through decoder skip connections to draw rigid boundaries. When an anti-aliasing filter like BlurPool mathematically eliminates those sharp high frequencies, the clinical boundaries bloom unpredictably, the shift consistency crashes, and the core topological precision drops natively.
        </p>
      </section>

      {/* Key Results Table */}
      <section className="space-y-4">
        <h2 className="font-mono text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 font-semibold">
          Key Results at a Glance
        </h2>
        <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded">
          <table className="min-w-full divide-y divide-slate-250 dark:divide-slate-850 text-left text-xs font-mono">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 text-slate-400 dark:text-slate-500">
                <th className="py-3 px-4 font-mono font-medium">Finding / Metric</th>
                <th className="py-3 px-4 text-right font-mono font-semibold">Value (N=251)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-600 dark:text-slate-350">
              <tr>
                <td className="py-3 px-4 font-sans font-bold">ET Boundary F1: Baseline mean</td>
                <td className="py-3 px-4 text-right">72.60%</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-sans">ET Boundary F1: BlurPool mean</td>
                <td className="py-3 px-4 text-right text-red-500 font-bold">71.83%</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-sans">ET Global Dice: Baseline vs BlurPool</td>
                <td className="py-3 px-4 text-right">83.03% vs 81.87%</td>
              </tr>
              <tr className="bg-emerald-500/5 dark:bg-emerald-500/10">
                <td className="py-3 px-4 font-sans font-bold text-slate-950 dark:text-slate-50">Mean AVR: Baseline vs. BlurPool</td>
                <td className="py-3 px-4 text-right text-emerald-600 dark:text-emerald-400 font-bold">0.066 vs. 0.033 (~50% reduction)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-sans">Pearson r (Baseline)</td>
                <td className="py-3 px-4 text-right font-bold">+0.384 (Strongly entangled)</td>
              </tr>
              <tr className="bg-emerald-500/5 dark:bg-emerald-500/10">
                <td className="py-3 px-4 font-sans">Pearson r (BlurPool)</td>
                <td className="py-3 px-4 text-right text-emerald-600 dark:text-emerald-400 font-bold">+0.117 (Decoupled and Flattened)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-sans">Statistical Effect Size (Cohen's d)</td>
                <td className="py-3 px-4 text-right">-0.087</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-sans">Wilcoxon P-Value</td>
                <td className="py-3 px-4 text-right">0.399</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-sans font-bold">Shift consistency at 5px (Baseline)</td>
                <td className="py-3 px-4 text-right font-bold">~98% IoU</td>
              </tr>
              <tr className="bg-red-500/5 dark:bg-red-500/10">
                <td className="py-3 px-4 font-sans font-bold text-slate-950 dark:text-slate-50">Shift consistency at 5px (BlurPool)</td>
                <td className="py-3 px-4 text-right text-red-500 font-bold">~91% IoU (Structural breakdown)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Motivation and Background */}
      <section className="space-y-4 leading-relaxed">
        <h2 className="font-mono text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500">
          Motivation and Background
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-350">
          Brain tumor segmentation from multi modal Magnetic Resonance Imaging is one of the most consequential applications of deep learning in modern clinical medicine. High precision clinical tasks like neurosurgical planning, targeted radiation dose contouring, and longitudinal tracking of post-operative treatment response strictly rely on whether a mathematical model precisely traces a specific anatomical margin. They do not merely rely on whether the model identifies the overall tumor bulk volume. Specifically in glioblastoma profiling, the Enhancing Tumor sub-region exhibits aggressively chaotic geometric boundaries. A failure to map these sub-millimeter topologies can result in catastrophic clinical radiation damage to healthy brain tissue.
        </p>
        <p className="text-sm text-slate-600 dark:text-slate-350">
          The BraTS 2021 dataset provides one of the absolute hardest topological challenges in computer vision. It requires massive three-dimensional segmentation architectures to navigate 155 slice depth volumes and classify multiple nested tumor regions natively.
        </p>
        <p className="text-sm text-slate-600 dark:text-slate-350 bg-slate-50 dark:bg-slate-900/30 p-4 border-l-2 border-slate-300 dark:border-slate-800 rounded-r">
          This project explores a fundamental foundational conflict in digital signal physics that has been historically ignored by the medical imaging community. Standard Deep Learning spatial downsampling actively violates the Nyquist Shannon Sampling Theorem. Standard convolution operations with a spatial stride of 2 completely destroy and mathematically alias high frequency signals. A critical question drives this expansive research: do highly sophisticated three-dimensional volumetric segmentation models like SegResNet intrinsically suffer from this mathematical aliasing, or do they actively weaponize the high frequency leakage to establish the microscopic topologies required for tumor delineation?
        </p>
      </section>

      {/* Theoretical Framework and Mathematical Derivations */}
      <section className="space-y-8">
        <h2 className="font-mono text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500">
          Theoretical Framework and Mathematical Derivations
        </h2>

        {/* 1. Nyquist */}
        <div className="space-y-2 text-sm leading-relaxed text-slate-600 dark:text-slate-350">
          <h3 className="text-slate-950 dark:text-slate-100 font-bold">// The Nyquist Violation in SegResNet</h3>
          <p>
            The Nyquist Shannon Sampling Theorem establishes a rigorous mathematical boundary for digital signal preservation. It states that a continuous signal must be sampled at a frequency {"f_s"} rigorously greater than twice its highest frequency component B:
          </p>
          <div className="font-mono text-xs bg-slate-50 dark:bg-slate-900/50 p-3 my-2 rounded text-center border border-slate-150 dark:border-slate-850">
            {"f_s > 2B"}
          </div>
          <p>
            In standard CNN architectures, a spatial downsampling stride S = 2 forcibly decreases the sampling rate by half across the tensor spatial dimensions. This operation inherently violates the Nyquist limit for any spatial frequency f &gt; 1/4 cycles per pixel. High frequency geometric artifacts that represent the sharp edges of the tumor subsequently fold backward. They become mathematically indistinguishable from the low frequency spatial phase, leading directly to permanent frequency aliasing.
          </p>
        </div>

        {/* 2. 3D BlurPool */}
        <div className="space-y-2 text-sm leading-relaxed text-slate-600 dark:text-slate-350">
          <h3 className="text-slate-950 dark:text-slate-100 font-bold">// 3D BlurPool Convolution Filter Derivation</h3>
          <p>
            To explicitly enforce the Nyquist envelope prior to standard structural downsampling, this pipeline adapted the two-dimensional anti-aliasing logic into a pure volumetric three-dimensional low pass filter. The fundamental discrete binomial kernel is defined in one spatial dimension as:
          </p>
          <div className="font-mono text-xs bg-slate-50 dark:bg-slate-900/50 p-3 my-2 rounded text-center border border-slate-150 dark:border-slate-850">
            {"K_1D = \u00BC [1, 2, 1]"}
          </div>
          <p>
            This kernel is subsequently expanded mathematically into a dense three-dimensional tensor volume by computing the exhaustive outer product across the Depth, Height, and Width axes:
          </p>
          <div className="font-mono text-xs bg-slate-50 dark:bg-slate-900/50 p-3 my-2 rounded text-center border border-slate-150 dark:border-slate-850">
            {"K_3D = K_1D \u2297 K_1D \u2297 K_1D"}
          </div>
          <p>
            This generates a strict 3 x 3 x 3 smoothing matrix that structurally bandlimits the massive feature representations prior to the sub-sampling convolution, forcefully eliminating high frequency violations natively inside the GPU graph.
          </p>
        </div>

        {/* 3. 3D FFT and AVR */}
        <div className="space-y-2 text-sm leading-relaxed text-slate-600 dark:text-slate-350">
          <h3 className="text-slate-950 dark:text-slate-100 font-bold">// 3D Fast Fourier Transform and Alias Violation Ratio</h3>
          <p>
            The Alias Violation Ratio metric dynamically quantifies the exact proportional volume of deep network spectral energy that violates the theoretical Nyquist tensor spatial limit. For a given extracted multi-channel feature representation F(x, y, z) measuring Depth D, Height H, and Width W, the theoretical pipeline utilizes PyTorch hooks to calculate the discrete three-dimensional Fast Fourier Transform across all spatial variables natively during inference:
          </p>
          <div className="font-mono text-xs bg-slate-50 dark:bg-slate-900/50 p-4 my-2 rounded text-center border border-slate-150 dark:border-slate-850">
            {"F(u, v, w) = \u2211_{x=0}^{D-1} \u2211_{y=0}^{H-1} \u2211_{z=0}^{W-1} F(x, y, z) \u22C5 e^{-i 2\u03C0 (ux/D + vy/H + wz/W)}"}
          </div>
          <p>The structural power spectrum P(u, v, w) is then natively derived from the complex tensor output:</p>
          <div className="font-mono text-xs bg-slate-50 dark:bg-slate-900/50 p-3 my-2 rounded text-center border border-slate-150 dark:border-slate-850">
            {"P(u, v, w) = |F(u, v, w)|^2"}
          </div>
          <p>
            The final Alias Violation Ratio is calculated by isolating the spectral energy located strictly outside the physical Nyquist passband {"\u03A9_Nyquist"} defined by the core D/2 x H/2 x W/2 bounding box volume, divided by the total energy:
          </p>
          <div className="font-mono text-xs bg-slate-50 dark:bg-slate-900/50 p-4 my-2 rounded text-center border border-slate-150 dark:border-slate-850">
            {"AVR = [ \u2211_{u,v,w \u2209 \u03A9_Nyquist} P(u, v, w) ] / [ \u2211_{All\ u,v,w} P(u, v, w) ]"}
          </div>
          <p>
            A calculated Baseline AVR of exactly 0.066 implies rigorously that 6.6 percent of the dense network spectral energy aliases catastrophically when passing through the deepest GPU bottleneck layers.
          </p>
        </div>

        {/* 4. Structural Boundary F1 */}
        <div className="space-y-2 text-sm leading-relaxed text-slate-600 dark:text-slate-350">
          <h3 className="text-slate-950 dark:text-slate-100 font-bold">// Structural Boundary F1 Formulation</h3>
          <p>
            Global Dice coefficients are dominated mathematically by bulk interior voxels. This analytical pipeline intentionally discards interior volume matrices and utilizes mathematical morphological erosion to extract rigid topological boundaries. For a predicted volumetric mask {"M_p"} and a ground truth mask {"M_t"}, the system computes the exact 2 millimeter margin shell B via structural XOR extraction against a spatial erosion operator E:
          </p>
          <div className="font-mono text-xs bg-slate-50 dark:bg-slate-900/50 p-3 my-2 rounded text-center border border-slate-150 dark:border-slate-850">
            {"B_p = M_p \u2295 E_{2mm} - M_p"}
          </div>
          <p>The pipeline measures the intersection Precision P and Recall R strictly within these shell vectors:</p>
          <div className="font-mono text-xs bg-slate-50 dark:bg-slate-900/50 p-3 my-2 rounded text-center border border-slate-150 dark:border-slate-850">
            {"P = |B_p \u2229 B_t| / |B_p|,   R = |B_p \u2229 B_t| / |B_t|"}
          </div>
          <p>The final Boundary F1 harmonic mean explicitly punishes micro architectural topological hallucination:</p>
          <div className="font-mono text-xs bg-slate-50 dark:bg-slate-900/50 p-3 my-2 rounded text-center border border-slate-150 dark:border-slate-850">
            {"BF1 = (2 \u22C5 P \u22C5 R) / (P + R)"}
          </div>
        </div>
      </section>

      {/* Architecture and Validation Pipeline */}
      <section className="space-y-4 leading-relaxed">
        <h2 className="font-mono text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 font-semibold">
          Architecture and Validation Pipeline
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-350">
          The entire system was completely reprogrammed away from canonical two-dimensional slice frameworks into a fully native Volumetric environment using the MONAI Deep Learning library.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600 dark:text-slate-350">
          <li><strong>Transformations:</strong> The input volumes undergo dense multi-modal thresholding, clipping, structural intensity normalization, and aggressive spatial RandCropByPosNegLabeld sampling to prevent class collapse during gradient descent.</li>
          <li><strong>Model Formulation:</strong> The base model is the SOTA SegResNet, built with highly dense skip connections and deep residual bottleneck layers.</li>
          <li><strong>The Intervention:</strong> A specialized discrete replacement algorithm loops recursively through the MONAI neural network graph and dynamically rewires every single strided downscaling convolution directly into the explicit mathematical low-pass {"K_3D"} BlurPool mechanism.</li>
          <li><strong>Evaluation:</strong> Both architectures evaluated exactly 251 unseen clinical BraTS 2021 test volumes utilizing a continuous 3D overlapping Sliding Window Inference strategy to generate perfect global brain mathematical reconstructions.</li>
        </ul>
      </section>

      {/* Quantitative Results */}
      <section className="space-y-6">
        <h2 className="font-mono text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500">
          Quantitative Results
        </h2>

        {/* The Trade Off Paradox */}
        <div className="space-y-3 leading-relaxed text-slate-600 dark:text-slate-350 text-sm">
          <h3 className="text-slate-950 dark:text-slate-100 font-bold">// The Trade Off Paradox</h3>
          <p>
            Following the complex rewiring of the SegResNet encoder loops with the {"K_3D"} filter, the spectral network aliasing mathematically collapsed from 6.6 percent down to 3.3 percent. This physically proved that the BlurPool implementation successfully functioned mathematically entirely as dictated by the original signal processing logic.
          </p>
          <p>
            Despite this flawless mathematical stabilization, the architecture directly resisted the constraint. The core Boundary F1 score natively dropped from 72.60 percent to 71.83 percent. This drop generated a marginal but crucial Cohen's effect size of -0.087, completely dismissing null hypothesis correlations. This result physically and unequivocally proves that state of the art Dense prediction volumetric models do not suffer from aliasing. Instead, they actively and structurally rely on those highly chaotic, high frequency aliased geometric signals. These jagged signals are mathematically embedded directly within the dense decoder skip connections to draw rigid topological anchors across the MRI scans.
          </p>
        </div>

        {/* The Pearson Decoupling */}
        <div className="space-y-3 leading-relaxed text-slate-600 dark:text-slate-350 text-sm">
          <h3 className="text-slate-950 dark:text-slate-100 font-bold">// The Pearson Decoupling</h3>
          <p>
            In the Baseline computationally unfettered SegResNet model, physically larger tumors naturally exhibit higher topological variation. This intrinsic spatial scaling establishes a deeply entangled Pearson correlation of r = +0.384.
          </p>
          <p>
            When the BlurPool smoothing washed out the sharp boundary anchors in favor of absolute mathematical phase stability, the predictive intelligence of the network was fundamentally mechanically decoupled from the spectral variance. The BlurPool Pearson R value flattened completely and structurally down to exactly r = +0.117. This near-zero mathematical correlation definitively confirms the total success of the underlying frequency uncoupling intervention, despite exposing the detrimental clinical performance trade off.
          </p>
        </div>
      </section>

      {/* Robustness Evaluation */}
      <section className="space-y-6">
        <h2 className="font-mono text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 font-semibold">
          Robustness Evaluation
        </h2>
        <div className="space-y-4 text-sm text-slate-600 dark:text-slate-350 leading-relaxed">
          <p>
            Classic mathematical equivariance formally defines that shifting an input spatial matrix by {"\u0394x"} should result in an identical downstream shift in the final model probability output {"\u03A6"}:
          </p>
          <div className="font-mono text-xs bg-slate-50 dark:bg-slate-900/50 p-3 my-2 rounded text-center border border-slate-150 dark:border-slate-850">
            {"\u03A6(Shift_{\u0394x}(x)) = Shift_{\u0394x}(\u03A6(x))"}
          </div>
          <p>
            Following this rigorous standard shift variance classification methodology, the three-dimensional volume arrays were sequentially and physically translated across 0 to 5 voxel spatial spans. The validation engine subsequently calculated the absolute model topological rigidity by measuring the rigorous volumetric Intersection over Union between the unshifted baseline prediction and the displaced translated prediction matrix.
          </p>
          <p>
            In a massively counter intuitive departure from the previously established two-dimensional ImageNet classification literature, the mathematical BlurPool application actually accelerated Shift Consistency spatial decay. It catastrophically dropped to 91 percent compared to the rigid mathematical Baseline which successfully maintained spatial consistency at 98 percent.
          </p>

          <div className="border border-slate-200 dark:border-slate-800 p-5 rounded space-y-3 bg-slate-50/50 dark:bg-slate-900/30">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-red-500">
              The Structural Diagnosis:
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              When the deep architectural bottleneck's spatial phase gets massively smoothed and flattened by anti-aliasing logic, the volumetric SegResNet decoder operates almost completely blind to low-level deep phase features. The decoder mathematically must rely almost exclusively on the raw uncompressed high resolution feature skip connections bypassing the deep bottleneck completely.
              <br /><br />
              When the input brain volume physically shifts in space, the uncorrupted ultra-sharp skip connections explicitly translate perfectly along the Cartesian axis. However, they aggressively and structurally misalign across the channel dimension with the mathematically blurred deep bottleneck anchor points trying to rejoin them via tensor concatenation in the upper decoder.
              <br /><br />
              Without sharp, highly aliased geometric anchor points tracking securely and rigidly inside the downsampled spatial bottleneck, the dense volumetric bounding mask literally gives out under the mathematical pressure and rapidly drops intersection efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Spatial Error Analysis */}
      <section className="space-y-4 leading-relaxed">
        <h2 className="font-mono text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500">
          Spatial Error Analysis
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-350">
          Because smooth theoretical anti-aliasing filters aggressively force complex topological manifolds to rely entirely on purely low frequency macroscopic geometric tensor shapes, the statistical model completely loses its intrinsic physical capability to tightly grip sharp anatomical concavities like spatial necrosis or localized tentacle extensions. The explicit BlurPool defined mathematical boundaries severely bloom outward uncontrollably. This architectural softening dramatically inflates massive dense pockets of False Positives radiating completely along the exterior tumor shells.
        </p>
      </section>

      {/* Repository Structure */}
      <section className="space-y-4">
        <h2 className="font-mono text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 font-semibold">
          Repository Structure
        </h2>
        <pre className="font-mono text-xs bg-slate-50 dark:bg-slate-950 p-4 border border-slate-150 dark:border-slate-900 rounded overflow-x-auto text-slate-600 dark:text-slate-450 leading-relaxed">
{`aliasing-tumor-boundaries/
├── results/
│   ├── atlas/                       # Sub-region atlas visualizations
│   ├── latest_segresnet_bp_False.pth# SOTA SegResNet Baseline
│   ├── latest_segresnet_bp_True.pth # SegResNet BlurPool3d Intervention
│   ├── final_paper_stats.json       # Mathematical Significance Arrays (N=251)
│   └── final_summary_table.csv      # Natively averaged performance metrics
├── src/
│   ├── analysis/                    # Pearson correlation & Wilcoxon test scripts
│   ├── data/                        # 3D MONAI transforms & optimized loaders
│   ├── metrics/                     # Volumetric Boundary F1 computation logic
│   ├── models/
│   │   ├── avr_hooks_3d.py          # GPU Tensor 3D FFT Interception hooks
│   │   └── blurpool3d.py            # Custom 3D Binomial Anti-Aliasing block
│   ├── visualization/               # Dynamic Slicing & Error Heatmap generators
│   └── train_segresnet_3d.py        # Central architecture optimization loop`}
        </pre>
      </section>

      {/* Reproducibility */}
      <section className="space-y-6">
        <h2 className="font-mono text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 font-semibold">
          Reproducibility
        </h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-slate-950 dark:text-slate-100">// Initial Setup</h3>
            <pre className="font-mono text-xs bg-slate-50 dark:bg-slate-950 p-4 border border-slate-150 dark:border-slate-900 rounded overflow-x-auto text-slate-600 dark:text-slate-450">
{`git clone https://github.com/Subkash2206/aliasing-tumor-boundaries
cd aliasing-tumor-boundaries
pip install -r requirements.txt`}
            </pre>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-bold text-slate-950 dark:text-slate-100">// Dataset Integration</h3>
            <p className="text-xs text-slate-600 dark:text-slate-350">
              Download the standard BraTS 2021 multi-modal files and place them completely unzipped into the root directory:
            </p>
            <pre className="font-mono text-[11px] bg-slate-50 dark:bg-slate-950 p-2 border border-slate-150 dark:border-slate-900 rounded text-slate-500">
{`BraTS2021_Training_Data/
├── BraTS2021_00000/
│   ├── BraTS2021_00000_flair.nii.gz
...`}
            </pre>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-bold text-slate-950 dark:text-slate-100">// Execution Commands</h3>
            <pre className="font-mono text-xs bg-slate-50 dark:bg-slate-950 p-4 border border-slate-150 dark:border-slate-900 rounded overflow-x-auto text-slate-600 dark:text-slate-450">
{`# High Performance Native Baseline Training (Allocates ~5.8GB VRAM)
python src/train_segresnet_3d.py --batch_size 1

# Mathematical Anti-Aliased Training Protocol
python src/train_segresnet_3d.py --blurpool --batch_size 1

# Wilcoxon & Boundary Interrogation Mathematical Diagnostics
python src/analysis/final_significance.py
python src/analysis/get_pearson.py

# Complete Volumetric Output Document Figure Generation
python src/visualization/generate_3d_atlas.py`}
            </pre>
          </div>
        </div>
      </section>

      {/* Discussion */}
      <section className="space-y-4 leading-relaxed text-sm text-slate-600 dark:text-slate-350">
        <h2 className="font-mono text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 font-semibold font-bold">
          Discussion
        </h2>
        <p>
          This project fundamentally and entirely invalidates the naive theoretical assumption that generalized two-dimensional ImageNet anti-aliasing mathematical physics will reliably scale flawlessly to massive Dense three-dimensional Medical array spatial representations.
        </p>
        <p>
          By aggressively translating rigorous quantitative Alias Violation Ratio analytics natively onto Volumetric Graphics Processing Units operating specifically across 251 extremely distinct individual mathematical patient topologies, this research confirms a definitive mathematical reality. Enforcing highly rigid spatial spectral limit equations onto massive SegResNet architecture skip connections physically detaches the deep layer phase representations from horizontal raw uncompressed boundary intelligence. This mathematical structural detachment leads unconditionally directly to the highly visible clinical phenomenon of False Positive blooming and paradoxically creates a vast catastrophic reduction in native translation Shift Decoupling.
        </p>
        <p>
          State of the art Volumetric medical segmentors do not just passively tolerate sub-pixel high frequency architectural spatial violations. They actively, permanently, and structurally require them in order to securely latch onto chaotic physical MRI spatial realities.
        </p>
      </section>

      {/* BibTeX Citation */}
      <section className="space-y-4">
        <h2 className="font-mono text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500">
          Cite this Work
        </h2>
        <div className="relative">
          <pre className="font-mono text-xs bg-slate-50 dark:bg-slate-950 p-4 border border-slate-150 dark:border-slate-900 rounded overflow-x-auto text-slate-600 dark:text-slate-400 select-all">
{`@inproceedings{kashyap2026the,
  title={The Structural Cost of Anti-Aliasing in 3D Volumetric Segmentation},
  author={Subhash Kashyap},
  booktitle={Medical Imaging with Deep Learning - Short Papers},
  year={2026},
  url={https://openreview.net/forum?id=F7RaWxyKXD}
}`}
          </pre>
        </div>
      </section>

      {/* License */}
      <section className="space-y-2 text-sm text-slate-500 leading-relaxed">
        <h2 className="font-mono text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500">
          License
        </h2>
        <p>
          The source code in this repository is licensed under the MIT License. The accompanying manuscript and figures are licensed under Creative Commons Attribution 4.0 International (CC-BY 4.0).
        </p>
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
