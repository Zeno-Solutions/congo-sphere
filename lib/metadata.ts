import { Metadata } from 'next'
import { getEventById } from '@/lib/data'

export function generateEventMetadata(id: string): Metadata {
    const event = getEventById(id)

    if (!event) {
        return {
            title: 'Event Not Found | Congo Sphere',
            description: 'The event you are looking for could not be found.',
        }
    }

    return {
        title: `${event.title} | Congo Sphere`,
        description: event.description,
        keywords: [...event.tags, event.category, 'event', 'experience', 'Congo Sphere'],
        openGraph: {
            title: event.title,
            description: event.description,
            images: [event.image],
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: event.title,
            description: event.description,
            images: [event.image],
        },
    }
}

export function generateEventsListMetadata(): Metadata {
    return {
        title: 'Events | Congo Sphere',
        description: 'Discover immersive experiences that push the boundaries of reality and creativity in the Congo Sphere.',
        keywords: ['events', 'experiences', 'immersive', 'Congo Sphere', 'digital arts', 'networking'],
        openGraph: {
            title: 'Events | Congo Sphere',
            description: 'Discover immersive experiences that push the boundaries of reality and creativity.',
            type: 'website',
        },
        twitter: {
            card: 'summary',
            title: 'Events | Congo Sphere',
            description: 'Discover immersive experiences that push the boundaries of reality and creativity.',
        },
    }
}