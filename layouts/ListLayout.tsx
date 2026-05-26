'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'

interface PaginationProps {
  totalPages: number
  currentPage: number
}
interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
  initialDisplayPosts?: CoreContent<Blog>[]
  pagination?: PaginationProps
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname()
  const segments = pathname.split('/')
  const lastSegment = segments[segments.length - 1]
  const basePath = pathname
    .replace(/^\//, '') // Remove leading slash
    .replace(/\/page\/\d+\/?$/, '') // Remove any trailing /page
    .replace(/\/$/, '') // Remove trailing slash
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="pt-6 pb-8">
      <nav className="flex justify-between text-xs text-[#8b8b8b]">
        {!prevPage && (
          <span className="opacity-50">
            &larr; Previous
          </span>
        )}
        {prevPage && (
          <Link
            href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
            rel="prev"
            className="hover:text-[#d4d4d4] transition-colors"
          >
            &larr; Previous
          </Link>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <span className="opacity-50">
            Next &rarr;
          </span>
        )}
        {nextPage && (
          <Link 
            href={`/${basePath}/page/${currentPage + 1}`} 
            rel="next"
            className="hover:text-[#d4d4d4] transition-colors"
          >
            Next &rarr;
          </Link>
        )}
      </nav>
    </div>
  )
}

export default function ListLayout({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((post) => {
    const searchContent = post.title + post.summary + post.tags?.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  return (
    <div className="space-y-8 py-8 text-sm leading-relaxed text-[#d4d4d4]">
      <div className="space-y-4 pb-2 border-b border-[#222225]">
        <h1 className="text-lg font-semibold tracking-tight text-[#d4d4d4]">
          {title}
        </h1>
        <div className="relative max-w-xs pt-1">
          <label>
            <span className="sr-only">Search notes</span>
            <input
              aria-label="Search notes"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search notes..."
              className="block w-full border border-[#222225] bg-[#0f0f10] text-[#d4d4d4] px-3 py-1.5 text-xs focus:outline-none focus:border-[#8b8b8b] transition-colors placeholder-[#8b8b8b]/60"
            />
          </label>
        </div>
      </div>
      <div className="divide-y divide-[#222225]">
        {!filteredBlogPosts.length && <div className="py-4 text-[#8b8b8b]">No notes found.</div>}
        {displayPosts.map((post) => {
          const { path, date, title, summary } = post
          return (
            <div key={path} className="py-4 space-y-1 first:pt-0 last:pb-0">
              <div className="text-xs font-mono text-[#8b8b8b]">
                {formatDate(date, siteMetadata.locale)}
              </div>
              <h3 className="text-sm font-semibold text-[#d4d4d4]">
                <Link href={`/${path}`} className="underline underline-offset-4 decoration-1 decoration-[#222225] hover:decoration-[#8b8b8b] hover:text-[#d4d4d4] transition-all">
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
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </div>
  )
}
