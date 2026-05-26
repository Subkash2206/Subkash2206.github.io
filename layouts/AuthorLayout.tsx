import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import Image from '@/components/Image'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, bluesky, linkedin, github } = content

  return (
    <>
      <div className="space-y-8 py-8 text-sm leading-relaxed text-[#d4d4d4]">
        <div className="space-y-4 pb-2 border-b border-[#222225]">
          <h1 className="text-lg font-semibold tracking-tight text-[#d4d4d4]">
            About
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex flex-col items-center md:items-start space-y-3 w-full md:w-48 flex-shrink-0">
            {avatar && (
              <Image
                src={avatar}
                alt="avatar"
                width={120}
                height={120}
                className="h-24 w-24 rounded-full flex-shrink-0 object-cover aspect-square border border-[#222225]"
              />
            )}
            <div className="text-center md:text-left space-y-1">
              <h3 className="text-sm font-semibold text-[#d4d4d4]">{name}</h3>
              <div className="text-xs text-[#8b8b8b]">{occupation}</div>
              <div className="text-xs text-[#8b8b8b]">{company}</div>
            </div>
            <div className="flex flex-wrap gap-x-3 text-xs text-[#8b8b8b] pt-1">
              <a href={`mailto:${email}`} className="underline underline-offset-4 decoration-1 decoration-[#222225] hover:decoration-[#8b8b8b] hover:text-[#d4d4d4] transition-all">
                email
              </a>
              <a href={github} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-1 decoration-[#222225] hover:decoration-[#8b8b8b] hover:text-[#d4d4d4] transition-all">
                github
              </a>
              <a href={linkedin} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-1 decoration-[#222225] hover:decoration-[#8b8b8b] hover:text-[#d4d4d4] transition-all">
                linkedin
              </a>
              {bluesky && (
                <a href={bluesky} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-1 decoration-[#222225] hover:decoration-[#8b8b8b] hover:text-[#d4d4d4] transition-all">
                  bluesky
                </a>
              )}
            </div>
          </div>
          <div className="prose dark:prose-invert max-w-none text-[#d4d4d4] leading-relaxed flex-grow">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
