import projectsData from '@/data/projectsData'
import Link from '@/components/Link'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <div className="space-y-8 py-8 text-sm leading-relaxed text-[#d4d4d4]">
      <div className="space-y-4 pb-2 border-b border-[#222225]">
        <h1 className="text-lg font-semibold tracking-tight text-[#d4d4d4]">
          Projects
        </h1>
        <p className="text-[#8b8b8b]">
          Selected clinical imaging research codebases and architectural audits.
        </p>
      </div>

      <div className="space-y-8">
        {projectsData.map((project) => (
          <div key={project.title} className="space-y-2">
            <h2 className="text-sm font-semibold text-[#d4d4d4] leading-snug">
              {project.title}
            </h2>
            <p className="text-xs text-[#8b8b8b] max-w-2xl leading-relaxed">
              {project.description}
            </p>
            {project.href && (
              <div className="pt-1">
                <Link
                  href={project.href}
                  className="text-xs underline underline-offset-4 decoration-1 decoration-[#222225] hover:decoration-[#8b8b8b] hover:text-[#d4d4d4] transition-all"
                >
                  Read project details &rarr;
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
