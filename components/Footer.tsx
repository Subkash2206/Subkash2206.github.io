import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center border-t border-gray-150 dark:border-gray-900 py-8">
        <div className="mb-4 flex space-x-6">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={5} />
          <SocialIcon kind="github" href={siteMetadata.github} size={5} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={5} />
        </div>
        <div className="flex space-x-2 text-xs font-mono text-gray-400 dark:text-gray-500">
          <span>{siteMetadata.author}</span>
          <span>&bull;</span>
          <span>&copy; {new Date().getFullYear()}</span>
          <span>&bull;</span>
          <Link href="/" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
            Portfolio
          </Link>
        </div>
      </div>
    </footer>
  )
}
