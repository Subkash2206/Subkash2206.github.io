import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function PageTitle({ children }: Props) {
  return (
    <h1 className="text-lg font-semibold tracking-tight text-[#d4d4d4]">
      {children}
    </h1>
  )
}
