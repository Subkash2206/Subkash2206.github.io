import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'

export default function Home({ posts }) {
  return (
    <div className="space-y-20 pb-16">
      {/* 1. Hero Section */}
      <section className="pt-12 pb-6 md:pt-16 md:pb-10">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl dark:text-slate-100 leading-tight">
            Subhash Kashyap
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            Researching interpretable medical AI systems, spectral representation dynamics, and computational pathology.
          </p>
          <div className="flex flex-wrap items-center gap-x-2 text-xs font-mono tracking-wider text-slate-500 dark:text-slate-400">
            <span>RESEARCH INTERN @ ISI BANGALORE</span>
            <span>•</span>
            <span>B.TECH COMPUTER SCIENCE & ENGINEERING @ NIT ROURKELA</span>
            <span>•</span>
            <span>US CITIZEN</span>
          </div>
          <div className="pt-2 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
            <a 
              href={siteMetadata.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-900 dark:text-slate-100 hover:text-slate-500 dark:hover:text-slate-400 underline underline-offset-4 decoration-1 transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://drive.google.com/file/d/1UsCGwTBf8VV7aQwedVIc7pzQR2SWDNQr/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-900 dark:text-slate-100 hover:text-slate-500 dark:hover:text-slate-400 underline underline-offset-4 decoration-1 transition-colors"
            >
              CV / Resume
            </a>
            <a 
              href={siteMetadata.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-900 dark:text-slate-100 hover:text-slate-500 dark:hover:text-slate-400 underline underline-offset-4 decoration-1 transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href={`mailto:${siteMetadata.email}`}
              className="text-slate-900 dark:text-slate-100 hover:text-slate-500 dark:hover:text-slate-400 underline underline-offset-4 decoration-1 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 dark:border-slate-800" />

      {/* 2. Focus Areas & Current Questions */}
      <section id="focus" className="grid grid-cols-1 lg:grid-cols-12 gap-12 scroll-mt-20">
        <div className="lg:col-span-4 space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500">
            Research Focus
          </h2>
          <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <li className="flex items-start">
              <span className="mr-2 font-mono text-slate-400 dark:text-slate-600">//</span>
              Spectral representation dynamics
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-mono text-slate-400 dark:text-slate-600">//</span>
              Interpretable medical AI systems
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-mono text-slate-400 dark:text-slate-600">//</span>
              Mechanistic auditing of neural architectures
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-mono text-slate-400 dark:text-slate-600">//</span>
              Computational pathology & segmentation
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-mono text-slate-400 dark:text-slate-600">//</span>
              State-space models (Mamba) for vision
            </li>
            <li className="flex items-start">
              <span className="mr-2 font-mono text-slate-400 dark:text-slate-600">//</span>
              Sampling theory & robust frequency analysis
            </li>
          </ul>
        </div>

        <div className="lg:col-span-8 space-y-6">
          <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500">
            Current Inquiries
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <span className="font-mono text-sm text-slate-400 dark:text-slate-600">01</span>
              <div>
                <p className="text-base font-medium text-slate-800 dark:text-slate-200">
                  Can spectral instability predict volumetric segmentation failure modes?
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Investigating if Fourier-domain tracking can flag out-of-distribution clinical boundaries before inference failures occur.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="font-mono text-sm text-slate-400 dark:text-slate-600">02</span>
              <div>
                <p className="text-base font-medium text-slate-800 dark:text-slate-200">
                  Do state-space vision models encode fundamentally different frequency trajectories?
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Auditing Mamba's selective-scan discretization parameters to see how they govern adaptive high-frequency passbands relative to static CNN filters.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="font-mono text-sm text-slate-400 dark:text-slate-600">03</span>
              <div>
                <p className="text-base font-medium text-slate-800 dark:text-slate-200">
                  How should sampling theory inform localized segmentation architecture design?
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Developing downsampling operators that avoid spatial aliasing while preserving step-edge boundary precision in volumetric grids.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 dark:border-slate-800" />

      {/* 3. Research Timeline Section */}
      <section className="space-y-6">
        <h2 className="text-xs font-mono uppercase tracking-widest text-slate-500">
          PROGRESSION OF IDEAS
        </h2>
        <div className="relative pl-8 border-l border-slate-200 dark:border-slate-800 space-y-12">
          
          {/* DSP Toolkit */}
          <div className="relative">
            <div className="absolute -left-[37px] top-[7px] w-2.5 h-2.5 rounded-full bg-slate-700 border-2 border-white dark:border-[#030712]" />
            <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-x-6 gap-y-2 items-start">
              <div className="font-mono text-xs uppercase tracking-wider text-slate-500 pt-0.5">
                DECEMBER 2025
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  DSP & Signal Processing Foundations
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  Implemented from-scratch DSP algorithms, FFT optimizations, and compressed sensing pipelines in <span className="font-mono font-bold text-slate-700 dark:text-slate-350">sparse-signal-toolkit</span>. Studied reconstruction limits, FFT bottlenecks, and frequency leakage, establishing the mathematical foundations for analyzing deep network feature maps.
                </p>
              </div>
            </div>
          </div>

          {/* CNN Aliasing */}
          <div className="relative">
            <div className="absolute -left-[37px] top-[7px] w-2.5 h-2.5 rounded-full bg-slate-700 border-2 border-white dark:border-[#030712]" />
            <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-x-6 gap-y-2 items-start">
              <div className="font-mono text-xs uppercase tracking-wider text-slate-500 pt-0.5">
                EARLY 2026
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  Quantifying Aliasing in Convolutional Networks
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  Designed <span className="font-mono font-bold text-slate-700 dark:text-slate-350">spectral-aliasing-cnns</span>, a PyTorch-based framework to analyze Nyquist violations in strided networks. Developed and defined the **Alias Violation Ratio (AVR)** and **Shift Instability Score (SIS)** to mathematically quantify how spatial decimation breaks translation equivariance in hidden layers.
                </p>
              </div>
            </div>
          </div>

          {/* MIDL Paper */}
          <div className="relative">
            <div className="absolute -left-[37px] top-[7px] w-2.5 h-2.5 rounded-full bg-slate-700 border-2 border-white dark:border-[#030712]" />
            <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-x-6 gap-y-2 items-start">
              <div className="font-mono text-xs uppercase tracking-wider text-slate-500 pt-0.5">
                MID 2026
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  The Structural Cost of Anti-Aliasing (MIDL 2026 Paper)
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  Authored the official codebase for your MIDL 2026 paper in <span className="font-mono font-bold text-slate-700 dark:text-slate-350">aliasing-tumor-boundaries</span>. Evaluated 3D BlurPool filters on the BraTS 2021 brain tumor benchmark, proving a strict spatial-spectral trade-off: anti-aliasing stabilizes shift invariance but blurs step-edge boundary precision.
                </p>
              </div>
            </div>
          </div>

          {/* Mamba Spectral */}
          <div className="relative">
            <div className="absolute -left-[37px] top-[7px] w-2.5 h-2.5 rounded-full bg-slate-700 border-2 border-white dark:border-[#030712]" />
            <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-x-6 gap-y-2 items-start">
              <div className="font-mono text-xs uppercase tracking-wider text-slate-500 pt-0.5">
                MID 2026
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  Comparative State-Space Spectral Auditing
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  Pivoted to auditing new state-space vision models in <span className="font-mono font-bold text-slate-700 dark:text-slate-350">spectral-mamba-analysis</span>. Engineered an AVR-based spectral fingerprinting pipeline to perform dynamic, scan-by-scan frequency modeling, assessing how Mamba handles frequency constraints relative to traditional CNNs and Transformers.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <hr className="border-slate-200 dark:border-slate-800" />

      {/* 4. Featured Research Section */}
      <section id="featured" className="space-y-12 scroll-mt-20">
        <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500">
          Featured Publications
        </h2>

        <div className="space-y-16">
          {/* Featured Project 1 */}
          <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300 px-2 py-0.5 rounded">
                  spectral-mamba-analysis
                </span>
                <span className="font-mono text-xs bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 px-2 py-0.5 rounded font-medium">
                  MICCAI MSB 2026 Under Review
                </span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-slate-50">
                Spectral Mamba: Unmasking Spectral Artifacts in Mamba-Based Medical Image Segmentation
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                A rigorous spectral audit of VM-UNet (Visual Mamba) against Swin-Tiny and UNet-ResNet50 on dermatological image segmentation (ISIC2018, N = 519). Introduces and operationalizes the DC-corrected Alias Violation Ratio (AVR) to disprove the Spectral Debt hypothesis, exposing a unique dual-stage spectral fingerprint.
              </p>
              <div className="pt-2 flex gap-4 text-xs font-mono">
                <Link
                  href="/projects/spectral-mamba"
                  className="text-slate-900 dark:text-slate-100 hover:underline hover:text-slate-500 dark:hover:text-slate-400 transition-all font-semibold"
                >
                  Explore Project Page &rarr;
                </Link>
              </div>
            </div>

            {/* Bespoke SVG Visual Artifact 1 */}
            <div className="lg:col-span-5 border border-slate-200 dark:border-slate-800 rounded bg-slate-50/50 dark:bg-slate-900/30 p-4 space-y-2">
              <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 dark:text-slate-500">
                <span>FIGURE 1: SELECTIVE SCAN FILTER RESPONSE</span>
                <span>SPECTRAL-MAMBA / 2026</span>
              </div>
              <div className="aspect-[5/3] flex items-center justify-center bg-white dark:bg-slate-950/70 border border-slate-100 dark:border-slate-900 rounded select-none p-2">
                <svg viewBox="0 0 300 180" className="w-full h-full text-slate-300 dark:text-slate-800">
                  {/* Grid Lines */}
                  <line x1="30" y1="20" x2="30" y2="150" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,2" />
                  <line x1="30" y1="150" x2="280" y2="150" stroke="currentColor" strokeWidth="0.5" />
                  <line x1="150" y1="20" x2="150" y2="150" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,2" />
                  <line x1="270" y1="20" x2="270" y2="150" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,2" />
                  
                  {/* Axis labels */}
                  <text x="25" y="15" className="font-mono text-[6px] fill-slate-400 dark:fill-slate-500" textAnchor="end">H(w)</text>
                  <text x="280" y="160" className="font-mono text-[6px] fill-slate-400 dark:fill-slate-500" textAnchor="end">Frequency (w)</text>
                  <text x="30" y="160" className="font-mono text-[5px] fill-slate-400 dark:fill-slate-600" textAnchor="middle">0</text>
                  <text x="150" y="160" className="font-mono text-[5px] fill-slate-400 dark:fill-slate-600" textAnchor="middle">pi / 2</text>
                  <text x="270" y="160" className="font-mono text-[5px] fill-slate-400 dark:fill-slate-600" textAnchor="middle">pi</text>

                  {/* Ideal cutoff marker */}
                  <line x1="120" y1="20" x2="120" y2="150" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4,4" />
                  <text x="123" y="28" className="font-mono text-[4.5px] fill-slate-400 dark:fill-slate-600">Nyquist limit (pi/S)</text>

                  {/* Curves */}
                  {/* CNN (low pass) */}
                  <path d="M 30,50 Q 100,52 120,120 T 270,148" fill="none" stroke="#64748b" strokeWidth="1" strokeDasharray="3,2" />
                  {/* Transformer (all pass) */}
                  <path d="M 30,60 L 270,60" fill="none" stroke="#94a3b8" strokeWidth="0.5" strokeDasharray="1,2" />
                  {/* Mamba - Selective (adaptive bandpass passband) */}
                  <path d="M 30,45 Q 90,45 115,48 T 130,125 T 180,145 T 270,150" fill="none" stroke="#10b981" strokeWidth="1.5" />
                  
                  {/* Labels on curves */}
                  <text x="60" y="40" className="font-mono text-[5px] fill-emerald-500 font-bold">Mamba (Dynamic)</text>
                  <text x="60" y="80" className="font-mono text-[5px] fill-slate-400">CNN (Static Blur)</text>
                  <text x="200" y="55" className="font-mono text-[5px] fill-slate-500">Transformer</text>
                </svg>
              </div>
              <p className="text-[10px] font-mono text-slate-500 dark:text-slate-400 leading-normal text-center">
                Mamba dynamic filter response preserves key high-frequency edge gradients {"(w < pi)"} while actively damping out-of-band aliasing noise, whereas CNN low-pass filters introduce static boundary oversmoothing.
              </p>
            </div>
          </article>

          {/* Featured Project 2 */}
          <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300 px-2 py-0.5 rounded">
                  aliasing-tumor-boundaries
                </span>
                <span className="font-mono text-xs bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 px-2 py-0.5 rounded font-medium">
                  MIDL 2026 Accepted Short Paper
                </span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-slate-950 dark:text-slate-50">
                The Structural Cost of Anti-Aliasing in 3D Volumetric Segmentation
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Translates BlurPool downsampling into a 3D SegResNet operating natively on BraTS 2021. Proves a strict spatial-spectral trade-off: anti-aliasing reduces spectral aliasing by ~50% but paradoxically collapses shift consistency (from 98% to 91% IoU) and induces severe False Positive boundary blooming.
              </p>
              <div className="pt-2 flex gap-4 text-xs font-mono">
                <Link
                  href="/projects/anti-aliasing"
                  className="text-slate-900 dark:text-slate-100 hover:underline hover:text-slate-500 dark:hover:text-slate-400 transition-all font-semibold"
                >
                  Explore Project Page &rarr;
                </Link>
              </div>
            </div>

            {/* Bespoke SVG Visual Artifact 2 */}
            <div className="lg:col-span-5 border border-slate-200 dark:border-slate-800 rounded bg-slate-50/50 dark:bg-slate-900/30 p-4 space-y-2">
              <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 dark:text-slate-500">
                <span>FIGURE 2: 3D VOLUMETRIC BOUNDARY DEGRADATION</span>
                <span>AA-SEGMENTATION / 2026</span>
              </div>
              <div className="aspect-[5/3] flex items-center justify-center bg-white dark:bg-slate-950/70 border border-slate-100 dark:border-slate-900 rounded select-none p-2">
                <svg viewBox="0 0 300 180" className="w-full h-full text-slate-300 dark:text-slate-800">
                  {/* Brain scan outline */}
                  <circle cx="150" cy="90" r="70" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3,3" />
                  
                  {/* Tumor ground truth boundary */}
                  <path d="M 120,60 C 140,55 170,65 180,80 C 190,95 185,115 170,120 C 155,125 125,120 115,100 C 105,80 100,65 120,60 Z" fill="none" stroke="currentColor" strokeWidth="0.75" />
                  <text x="145" y="90" className="font-mono text-[4.5px] fill-slate-400 dark:fill-slate-500">Tumor Core</text>

                  {/* Standard (aliased) boundary (jagged) */}
                  <path d="M 120,60 L 126,58 L 132,61 L 138,57 L 144,63 L 150,59 L 156,64 L 162,60 L 168,66 L 174,62 L 180,80 L 183,86 L 181,92 L 186,98 L 183,104 L 185,110 L 178,113 L 170,120 L 164,118 L 158,122 L 152,119 L 146,123 L 140,120 L 134,124 L 128,121 L 122,125 L 115,100 L 111,94 L 113,88 L 109,82 L 112,76 L 108,70 L 120,60 Z" fill="none" stroke="#ef4444" strokeWidth="0.75" opacity="0.6" />
                  
                  {/* BlurPool oversmoothed boundary */}
                  <path d="M 120,60 C 145,45 175,55 185,80 C 195,105 190,125 170,130 C 150,135 120,125 105,100 C 90,75 95,75 120,60 Z" fill="none" stroke="#10b981" strokeWidth="1.25" />

                  {/* Zoom pointer */}
                  <rect x="175" y="65" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1,1" />
                  <line x1="195" y1="65" x2="230" y2="40" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1,1" />
                  <line x1="195" y1="85" x2="230" y2="100" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1,1" />

                  {/* Zoom window */}
                  <rect x="230" y="40" width="60" height="60" fill="white" className="fill-white dark:fill-slate-950" stroke="currentColor" strokeWidth="0.5" />
                  <text x="260" y="47" className="font-mono text-[4.5px] fill-slate-400 dark:fill-slate-500" textAnchor="middle">BOUNDARY PROFILE</text>
                  
                  {/* Zoomed curves */}
                  {/* Ground Truth */}
                  <line x1="230" y1="70" x2="290" y2="70" stroke="currentColor" strokeWidth="0.5" />
                  {/* Standard (aliased) jagged edge */}
                  <path d="M 230,70 L 240,65 L 250,75 L 260,63 L 270,72 L 280,68 L 290,70" fill="none" stroke="#ef4444" strokeWidth="0.5" />
                  {/* BlurPool (smooth) */}
                  <path d="M 230,85 C 250,85 270,55 290,55" fill="none" stroke="#10b981" strokeWidth="1.25" />

                  {/* Legends */}
                  <circle cx="45" cy="140" r="2" fill="none" stroke="#ef4444" strokeWidth="0.75" />
                  <text x="50" y="142" className="font-mono text-[4.5px] fill-slate-400 dark:fill-slate-500">Standard (Aliased)</text>

                  <circle cx="45" cy="150" r="2" fill="none" stroke="#10b981" strokeWidth="1.25" />
                  <text x="50" y="152" className="font-mono text-[4.5px] fill-slate-400 dark:fill-slate-500">BlurPool (Oversmoothed)</text>

                  <circle cx="45" cy="160" r="2" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  <text x="50" y="162" className="font-mono text-[4.5px] fill-slate-400 dark:fill-slate-500">Ground Truth</text>
                </svg>
              </div>
              <p className="text-[10px] font-mono text-slate-500 dark:text-slate-400 leading-normal text-center">
                Volumetric boundary comparison: standard pooling introduces spatial shift instabilities (red), whereas anti-aliasing low-pass steps (green) introduce oversmoothed, low-frequency boundary structures.
              </p>
            </div>
          </article>
        </div>
      </section>

      <hr className="border-slate-200 dark:border-slate-800" />

      {/* 5. Selected Publications List */}
      <section id="publications" className="space-y-6 scroll-mt-20">
        <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500">
          Selected Publications
        </h2>

        <div className="space-y-8 font-sans">
          {/* Publication 1 */}
          <div className="space-y-2">
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="font-mono text-xs text-slate-500 dark:text-slate-400">[01]</span>
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                The Structural Cost of Anti-Aliasing in 3D Volumetric Segmentation
              </h3>
              <span className="font-mono text-[10px] uppercase bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300 px-1.5 py-0.25 rounded font-medium">
                MIDL 2026 Short Paper
              </span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 pl-6 leading-relaxed">
              <strong>Subhash Kashyap</strong>. <br />
              <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                Medical Imaging with Deep Learning (MIDL), 2026.
              </span>
            </p>
            <div className="pl-6 flex gap-4 text-xs font-mono">
              <Link href="/projects/anti-aliasing" className="text-slate-900 dark:text-slate-100 hover:underline">
                [Project Page]
              </Link>
              <a 
                href="https://openreview.net/forum?id=F7RaWxyKXD" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-900 dark:text-slate-100 hover:underline"
              >
                [OpenReview Forum]
              </a>
              <a 
                href="https://github.com/Subkash2206/aliasing-tumor-boundaries" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-900 dark:text-slate-100 hover:underline"
              >
                [GitHub Codebase]
              </a>
            </div>
          </div>

          {/* Publication 2 */}
          <div className="space-y-2">
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="font-mono text-xs text-slate-500 dark:text-slate-400">[02]</span>
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                Spectral Mamba: Unmasking Spectral Artifacts in Mamba-Based Medical Image Segmentation
              </h3>
              <span className="font-mono text-[10px] uppercase bg-slate-150 dark:bg-slate-800 text-slate-800 dark:text-slate-300 px-1.5 py-0.25 rounded font-medium">
                MICCAI MSB EMERGE Workshop 2026 — Under Review
              </span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 pl-6 leading-relaxed">
              <strong>Subhash Kashyap</strong>. <br />
              <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                MICCAI MSB Workshop, 2026.
              </span>
            </p>
            <div className="pl-6 flex gap-4 text-xs font-mono">
              <Link href="/projects/spectral-mamba" className="text-slate-900 dark:text-slate-100 hover:underline">
                [Project Page]
              </Link>
              <a 
                href="https://github.com/Subkash2206/spectral-mamba-analysis" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-900 dark:text-slate-100 hover:underline"
              >
                [GitHub Codebase]
              </a>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 dark:border-slate-800" />

      {/* 6. Selected Research Notes Section */}
      <section id="writing" className="space-y-6 scroll-mt-20">
        <div className="flex justify-between items-baseline">
          <h2 className="text-xs font-mono uppercase tracking-widest text-slate-500">
            SELECTED RESEARCH NOTES
          </h2>
        </div>

        <div className="divide-y divide-slate-200 dark:divide-slate-805 dark:divide-slate-800">
          {!posts.length && <div className="py-4 text-sm text-slate-500">No notes found.</div>}
          {posts.slice(0, 3).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <div key={slug} className="py-8 grid grid-cols-1 md:grid-cols-[160px_1fr] gap-x-6 gap-y-2 items-start">
                {/* Date Column */}
                <div className="text-slate-500 font-mono text-sm pt-0.5">
                  {formatDate(date, siteMetadata.locale)}
                </div>
                
                {/* Content Column */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                    <Link href={`/blog/${slug}`} className="hover:underline">
                      {title}
                    </Link>
                  </h3>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-wider text-slate-500">
                    {tags.map((tag) => (
                      <span key={tag}>
                        #{tag.toUpperCase()}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed pt-1">
                    {summary}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <hr className="border-slate-200 dark:border-slate-800" />

      {/* 7. About Section & Contact */}
      <section id="about" className="grid grid-cols-1 md:grid-cols-12 gap-8 scroll-mt-20">
        <div className="md:col-span-4">
          <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500">
            About & Contact
          </h2>
        </div>
        <div className="md:col-span-8 space-y-6">
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            I’m a computer science undergraduate at NIT Rourkela and a research intern at the **Indian Statistical Institute (ISI) Bangalore**, interested in building robust, mathematically verifiable, and interpretable machine learning systems for medical imaging. My recent work combines signal processing, frequency-domain analysis, and state-space vision models to resolve spatial-spectral representation conflicts in volumetric clinical segmentation tasks.
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            Feel free to reach out if you are interested in collaborating on mechanistic auditing of vision architectures or frequency-domain modeling in clinical AI domains.
          </p>
          <div className="pt-2 font-mono text-xs text-slate-500 dark:text-slate-400">
            <span>EMAIL: </span>
            <a href={`mailto:${siteMetadata.email}`} className="text-slate-900 dark:text-slate-100 hover:underline">
              {siteMetadata.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
