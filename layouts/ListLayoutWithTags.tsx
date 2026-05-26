'use client'

import { usePathname } from 'next/navigation'
import { slug } from 'github-slugger'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import tagData from 'app/tag-data.json'

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

export default function ListLayoutWithTags({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const pathname = usePathname()
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])

  const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts

  return (
    <div className="space-y-8 py-8 text-sm leading-relaxed text-[#d4d4d4]">
      <div className="space-y-4 pb-2 border-b border-[#222225]">
        <h1 className="text-lg font-semibold tracking-tight text-[#d4d4d4]">
          {title}
        </h1>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Sidebar Tags */}
        <div className="w-full md:w-48 flex-shrink-0 pt-1 space-y-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#8b8b8b] border-b border-[#222225] pb-2">
            Topics
          </div>
          <ul className="flex flex-wrap md:flex-col gap-x-4 gap-y-2 text-xs">
            <li>
              {pathname === '/blog' ? (
                <span className="font-semibold text-[#d4d4d4] uppercase">
                  All Posts
                </span>
              ) : (
                <Link
                  href={`/blog`}
                  className="font-medium text-[#8b8b8b] hover:text-[#d4d4d4] uppercase transition-colors"
                >
                  All Posts
                </Link>
              )}
            </li>
            {sortedTags.map((t) => {
              const active = decodeURI(pathname.split('/tags/')[1]) === slug(t)
              return (
                <li key={t}>
                  {active ? (
                    <span className="font-semibold text-[#d4d4d4] uppercase">
                      {`${t} (${tagCounts[t]})`}
                    </span>
                  ) : (
                    <Link
                      href={`/tags/${slug(t)}`}
                      className="font-medium text-[#8b8b8b] hover:text-[#d4d4d4] uppercase transition-colors"
                      aria-label={`View posts tagged ${t}`}
                    >
                      {`${t} (${tagCounts[t]})`}
                    </Link>
                  )}
                </li>
              )
            })}
          </ul>
        </div>

        {/* Post List */}
        <div className="flex-grow divide-y divide-[#222225]">
          {!displayPosts.length && <div className="py-4 text-[#8b8b8b]">No posts found.</div>}
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
          {pagination && pagination.totalPages > 1 && (
            <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
          )}
        </div>
      </div>
    </div>
  )
}
