'use client'

import React from 'react'

interface LoaderProps {
    size?: 'sm' | 'md' | 'lg'
    variant?: 'spinner' | 'pulse' | 'dots'
    className?: string
}

export default function Loader({ size = 'md', variant = 'spinner', className = '' }: LoaderProps) {
    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-8 h-8',
        lg: 'w-12 h-12'
    }

    if (variant === 'pulse') {
        return (
            <div className={`flex items-center justify-center ${className}`}>
                <div className={`${sizeClasses[size]} bg-primary rounded-full animate-pulse`}></div>
            </div>
        )
    }

    if (variant === 'dots') {
        return (
            <div className={`flex items-center justify-center space-x-2 ${className}`}>
                <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-tertiary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
        )
    }

    // Default spinner variant
    return (
        <div className={`flex items-center justify-center ${className}`}>
            <div className={`${sizeClasses[size]} border-4 border-primary/20 border-t-primary rounded-full animate-spin`}></div>
        </div>
    )
}

// Skeleton loader for content
export function SkeletonLoader({ className = '' }: { className?: string }) {
    return (
        <div className={`animate-pulse ${className}`}>
            <div className="bg-surface-container-low rounded-lg h-4 w-full mb-2"></div>
            <div className="bg-surface-container-low rounded-lg h-4 w-3/4"></div>
        </div>
    )
}

// Page loader overlay
export function PageLoader() {
    return (
        <div className="fixed inset-0 bg-surface/80 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="glass-panel p-8 rounded-xl flex flex-col items-center gap-4">
                <Loader size="lg" />
                <p className="text-on-surface-variant font-medium">Loading Sphere...</p>
            </div>
        </div>
    )
}