import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-12 flex flex-col items-center border-t border-[#222225] py-6 text-xs font-sans text-[#8b8b8b] space-y-2">
        <div className="flex space-x-4">
          <a href={`mailto:${siteMetadata.email}`} className="hover:text-[#d4d4d4] underline underline-offset-4 decoration-1 decoration-[#222225] hover:decoration-[#8b8b8b] transition-all">
            email
          </a>
          <a href={siteMetadata.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#d4d4d4] underline underline-offset-4 decoration-1 decoration-[#222225] hover:decoration-[#8b8b8b] transition-all">
            github
          </a>
          <a href={siteMetadata.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#d4d4d4] underline underline-offset-4 decoration-1 decoration-[#222225] hover:decoration-[#8b8b8b] transition-all">
            linkedin
          </a>
        </div>
        <div className="flex space-x-2">
          <span>&copy; {new Date().getFullYear()}</span>
          <span>&bull;</span>
          <span>Subhash Kashyap</span>
        </div>
      </div>
    </footer>
  )
}
