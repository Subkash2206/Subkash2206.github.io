import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'

export default function Home({ posts }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-x-16 gap-y-12 py-8 text-sm leading-relaxed text-[#d4d4d4]">
      {/* Left Column: Name, circular pic, and social links */}
      <div className="space-y-6 md:sticky md:top-20 h-fit">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold tracking-tight text-[#f9fafb] md:text-3xl leading-none">
            Subhash Kashyap
          </h1>
          <div className="w-40 h-40 md:w-48 md:h-48 relative overflow-hidden rounded-full border border-[#222225] transition-all duration-300">
            <img 
              src="/static/images/subhash.jpg" 
              alt="Subhash Kashyap" 
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-2 text-xs font-mono text-[#8b8b8b]">
          <a 
            href="https://scholar.google.com/citations?user=jyfl1nYAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 decoration-1 decoration-[#222225] hover:decoration-[#8b8b8b] hover:text-[#d4d4d4] transition-all"
          >
            google scholar
          </a>
          <a 
            href="mailto:subhashkashyap2206@gmail.com"
            className="underline underline-offset-4 decoration-1 decoration-[#222225] hover:decoration-[#8b8b8b] hover:text-[#d4d4d4] transition-all"
          >
            email address
          </a>
          <a 
            href="https://github.com/Subkash2206"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 decoration-1 decoration-[#222225] hover:decoration-[#8b8b8b] hover:text-[#d4d4d4] transition-all"
          >
            github profile
          </a>
          <a 
            href="https://www.linkedin.com/in/subhash-kashyap-71b65930b/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 decoration-1 decoration-[#222225] hover:decoration-[#8b8b8b] hover:text-[#d4d4d4] transition-all"
          >
            linkedin
          </a>
          <a 
            href="https://drive.google.com/file/d/1UsCGwTBf8VV7aQwedVIc7pzQR2SWDNQr/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 decoration-1 decoration-[#222225] hover:decoration-[#8b8b8b] hover:text-[#d4d4d4] transition-all"
          >
            cv / resume
          </a>
        </div>
      </div>

      {/* Right Column: Bio details and other homepage content */}
      <div className="space-y-16">
        {/* 1. Affiliation and Research Statement */}
        <section className="space-y-4 pt-1">
          <p className="text-sm text-[#8b8b8b]">
            Computer Science undergraduate at NIT Rourkela.
          </p>
          <p className="max-w-2xl text-[15px] sm:text-base text-[#e5e5e5] leading-relaxed">
            Interested in computational imaging, medical vision systems, and mechanistic analysis of deep learning models.
          </p>
        </section>

        {/* 2. Publications */}
        <section className="space-y-6">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-[#8b8b8b] border-b border-[#222225] pb-2">
            Publications
          </h2>
          <div className="space-y-10">
            {/* Publication 1 */}
            <div className="space-y-2">
              <h3 className="text-base font-semibold tracking-tight text-[#f9fafb] leading-snug">
                The Structural Cost of Anti-Aliasing in 3D Volumetric Segmentation
              </h3>
              <div className="text-xs text-[#737373] font-sans">
                Subhash Kashyap &bull; <span className="italic">MIDL 2026 (Short Paper)</span>
              </div>
              <div className="text-xs text-[#8b8b8b] flex flex-wrap items-center gap-x-2">
                <Link href="/projects/anti-aliasing" className="underline underline-offset-4 decoration-1 decoration-[#222225] hover:decoration-[#8b8b8b] hover:text-[#f9fafb] transition-all">
                  project
                </Link>
                <span className="text-[#222225]">/</span>
                <a 
                  href="https://openreview.net/forum?id=F7RaWxyKXD" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="underline underline-offset-4 decoration-1 decoration-[#222225] hover:decoration-[#8b8b8b] hover:text-[#f9fafb] transition-all"
                >
                  openreview
                </a>
                <span className="text-[#222225]">/</span>
                <a 
                  href="https://github.com/Subkash2206/aliasing-tumor-boundaries" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="underline underline-offset-4 decoration-1 decoration-[#222225] hover:decoration-[#8b8b8b] hover:text-[#f9fafb] transition-all"
                >
                  code
                </a>
              </div>
              <p className="text-xs text-[#a3a3a3] max-w-2xl leading-relaxed">
                Quantifies spatial-spectral trade-offs of BlurPool filters in 3D SegResNet architectures operating on BraTS 2021 volumes.
              </p>
            </div>

            {/* Publication 2 */}
            <div className="space-y-2">
              <h3 className="text-base font-semibold tracking-tight text-[#f9fafb] leading-snug">
                Spectral Mamba: Unmasking Spectral Artifacts in Mamba-Based Medical Image Segmentation
              </h3>
              <div className="text-xs text-[#737373] font-sans">
                Subhash Kashyap &bull; <span className="italic">MICCAI MSB EMERGE Workshop 2026 (Under Review)</span>
              </div>
              <div className="text-xs text-[#8b8b8b] flex flex-wrap items-center gap-x-2">
                <Link href="/projects/spectral-mamba" className="underline underline-offset-4 decoration-1 decoration-[#222225] hover:decoration-[#8b8b8b] hover:text-[#f9fafb] transition-all">
                  project
                </Link>
                <span className="text-[#222225]">/</span>
                <a 
                  href="https://github.com/Subkash2206/spectral-mamba-analysis" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="underline underline-offset-4 decoration-1 decoration-[#222225] hover:decoration-[#8b8b8b] hover:text-[#f9fafb] transition-all"
                >
                  code
                </a>
              </div>
              <p className="text-xs text-[#a3a3a3] max-w-2xl leading-relaxed">
                Conducts a rigorous spectral audit of VM-UNet, exposing dynamic scan-based spectral fingerprints in vision Mamba models.
              </p>
            </div>
          </div>
        </section>

        {/* 3. News */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-[#8b8b8b] border-b border-[#222225] pb-2">
            News
          </h2>
          <ul className="space-y-3 text-xs text-[#8b8b8b]">
            <li className="flex gap-x-4 items-start">
              <span className="font-mono w-24 flex-shrink-0 text-right text-[#737373]">Mid 2026</span>
              <span>
                My solo-authored short-track paper <span className="italic text-[#d4d4d4]">"The Structural Cost of Anti-Aliasing in 3D Volumetric Segmentation"</span> was accepted at the Medical Imaging with Deep Learning (<span className="font-semibold text-[#d4d4d4]">MIDL 2026</span>) conference in Taipei, Taiwan.
              </span>
            </li>
            <li className="flex gap-x-4 items-start">
              <span className="font-mono w-24 flex-shrink-0 text-right text-[#737373]">Mid 2026</span>
              <span>
                Audited new state-space vision models in <span className="font-mono text-[#d4d4d4]">spectral-mamba-analysis</span>, engineering an AVR-based spectral fingerprinting pipeline.
              </span>
            </li>
            <li className="flex gap-x-4 items-start">
              <span className="font-mono w-24 flex-shrink-0 text-right text-[#737373]">Dec 2025</span>
              <span>
                Joined the <span className="font-semibold text-[#d4d4d4]">Systems Science and Informatics Unit (SSIU) at Indian Statistical Institute (ISI), Bangalore</span> as a Research Intern under Dr. Saroj K. Meher.
              </span>
            </li>
            <li className="flex gap-x-4 items-start">
              <span className="font-mono w-24 flex-shrink-0 text-right text-[#737373]">Dec 2025</span>
              <span>
                Selected as a Research Intern for the <span className="font-semibold text-[#d4d4d4]">IIT Bhubaneswar Winter Internship Program</span>, as 1 of 19 candidates accepted from 2,500+ Computer Science applicants (~0.8% selection rate).
              </span>
            </li>
          </ul>
        </section>

        {/* 4. Research Interests */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-[#8b8b8b] border-b border-[#222225] pb-2">
            Research Interests
          </h2>
          <ul className="text-xs text-[#8b8b8b] space-y-1.5 list-none pl-0">
            <li>&mdash; Computational imaging</li>
            <li>&mdash; Medical image segmentation</li>
            <li>&mdash; Spectral representations</li>
            <li>&mdash; Mechanistic interpretability</li>
            <li>&mdash; Vision foundation models</li>
          </ul>
        </section>

        {/* 5. Writing */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-[#8b8b8b] border-b border-[#222225] pb-2">
            Writing
          </h2>
          <div className="divide-y divide-[#222225]">
            {!posts.length && <div className="py-4 text-[#8b8b8b]">No notes found.</div>}
            {posts.slice(0, 3).map((post) => {
              const { slug, date, title, summary } = post
              return (
                <div key={slug} className="py-4 space-y-1 first:pt-0 last:pb-0">
                  <div className="text-xs font-mono text-[#737373]">
                    {formatDate(date, siteMetadata.locale)}
                  </div>
                  <h3 className="text-sm font-medium text-[#eeeeee]">
                    <Link href={`/blog/${slug}`} className="underline underline-offset-4 decoration-1 decoration-[#222225] hover:decoration-[#8b8b8b] hover:text-[#d4d4d4] transition-all">
                      {title}
                    </Link>
                  </h3>
                  <p className="text-xs text-[#8b8b8b] max-w-2xl leading-relaxed">
                    {summary}
                  </p>
                </div>
              )
            })}
          </div>
        </section>

        {/* 6. Miscellaneous */}
        <section className="space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-[#8b8b8b] border-b border-[#222225] pb-2">
            Miscellaneous
          </h2>
          <div className="text-xs text-[#8b8b8b] leading-relaxed max-w-2xl">
            <p>
              I am a US Citizen (SF Bay Area native, currently based in Bangalore, India), open to research internships, academic collaborations, and doctoral opportunities in medical AI, deep vision auditing, and computational medicine.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
