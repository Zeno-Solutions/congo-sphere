import { Children } from 'react'
import { ReactNode } from 'react'
type contenaireProps = {
    children: ReactNode,
    className: string
}

export default function Contenaire({ children, className }: contenaireProps) {
    return (
        <div className={`px-4 ${className}`}>{children}</div>
    )
}
