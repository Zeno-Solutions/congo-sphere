'use client'

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import PageLoader from './Loader'

interface PageTransitionProps {
    children: React.ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
    const pathname = usePathname()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        const timer = setTimeout(() => setIsLoading(false), 300)
        return () => clearTimeout(timer)
    }, [pathname])

    if (isLoading) {
        return <PageLoader />
    }

    return (
        <div className="animate-in fade-in-0 duration-300">
            {children}
        </div>
    )
}