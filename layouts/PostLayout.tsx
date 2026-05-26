import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import siteMetadata from '@/data/siteMetadata'

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

interface LayoutProps {
  content: CoreContent<Blog>
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
}

export default function PostLayout({ content, next, prev, children }: LayoutProps) {
  const { filePath, path, slug, date, title, tags } = content
  const basePath = path.split('/')[0]

  return (
    <SectionContainer>
      <article className="py-8 text-sm leading-relaxed text-[#d4d4d4] space-y-8">
        <header className="space-y-3 pb-4 border-b border-[#222225]">
          <div className="text-xs font-mono text-[#8b8b8b]">
            <time dateTime={date}>
              {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
            </time>
          </div>
          <PageTitle>{title}</PageTitle>
        </header>

        <div className="prose dark:prose-invert max-w-none text-[#d4d4d4] leading-relaxed">
          {children}
        </div>

        {(next || prev) && (
          <footer className="pt-6 border-t border-[#222225] text-xs text-[#8b8b8b] space-y-4">
            <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
              {prev && prev.path && (
                <div>
                  <div className="font-semibold text-xs tracking-wider uppercase text-[#8b8b8b]/60 mb-1">Previous Note</div>
                  <Link
                    href={`/${prev.path}`}
                    className="underline underline-offset-4 decoration-1 decoration-[#222225] hover:decoration-[#8b8b8b] hover:text-[#d4d4d4] transition-all"
                  >
                    {prev.title}
                  </Link>
                </div>
              )}
              {next && next.path && (
                <div className="sm:text-right">
                  <div className="font-semibold text-xs tracking-wider uppercase text-[#8b8b8b]/60 mb-1">Next Note</div>
                  <Link
                    href={`/${next.path}`}
                    className="underline underline-offset-4 decoration-1 decoration-[#222225] hover:decoration-[#8b8b8b] hover:text-[#d4d4d4] transition-all"
                  >
                    {next.title}
                  </Link>
                </div>
              )}
            </div>
            <div className="pt-4 border-t border-[#222225]/40">
              <Link
                href={`/${basePath}`}
                className="underline underline-offset-4 decoration-1 decoration-[#222225] hover:decoration-[#8b8b8b] hover:text-[#d4d4d4] transition-all"
              >
                &larr; Back to notes
              </Link>
            </div>
          </footer>
        )}
      </article>
    </SectionContainer>
  )
}
