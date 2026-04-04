'use client'
import React, { useState } from 'react'
import { ChevronRight, ChevronLeft } from 'lucide-react';
interface CarouselCard {
    id: number
    category: string
    categoryColor: string
    date: string
    title: string
    description: string
    imageAlt: string
    imageSrc: string
    buttonText: string
}

const carouselCards: CarouselCard[] = [
    {
        id: 1,
        category: 'Music Festival',
        categoryColor: 'bg-primary/20 border-primary/30 text-primary',
        date: '24 Oct 2024',
        title: 'Neon Horizon 2024',
        description: 'Experience the largest immersive electronic music gathering in the heart of Kinshasa with world-class light installations.',
        imageAlt: 'Dazzling neon light show at a futuristic music festival with crowd silhouettes against deep purple and pink laser beams',
        imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgcA9zRj_i9w9hJcRRbmjkw-zIfLvYAQ8K3Y2fHoNSbACA-AQ8NqsLaPQuHs6EKdiNIc_PxLFt8zjaEQSlgn02ghAud2JDqlEDHm9MG20zs1ue0xa05pXKsT_GIgHMovZg4J-Y14gIGKIvBXes7o1weP6GW4Wz4Af_wku5TnLE0VDHGvk0n5S8aE6kNy2_NMTVfThK_MSwnqa2rVBa8aBzkIorNJ5faHMRcoTuNr7WJvQEc6h9NW3IKyp1-8WCjnBv8DObt3RrUReB',
        buttonText: 'Book Tickets',
    },
    {
        id: 2,
        category: 'Fine Arts',
        categoryColor: 'bg-secondary/20 border-secondary/30 text-secondary',
        date: '',
        title: 'Velvet Underground Jazz',
        description: 'A soulful night of acoustic jazz and classic cocktails in an exclusive underground venue.',
        imageAlt: 'Intimate jazz club setting with warm spotlighting, brass instruments, and sophisticated attendees in a dark velvet lounge atmosphere',
        imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDh-cWBHqZidGDkvCd2JI0qFWxqBOu1RmL7xryzrStUj5GoUsPs53uuqak80rg71iNY3zdap-re1FQHx1Jt7VlDvch-Aiu1Ymgvbxiz5P4VtneG53mAQS6fPUprXJQT9bSLvviQiZg5z9n_vyH8I-X3mGjd5OVtkP6fh5esBbMSrnab60MtSQ-UeTgCWzd3Q3u_6pB-fNe13P7f0irraHx26A3Uf5Ppyojyb5795XdLXHTUd3uJkzgTTnwqLrDNd5FNs9-s75BvuKd',
        buttonText: '',
    },
    {
        id: 3,
        category: 'Technology',
        categoryColor: 'bg-tertiary/20 border-tertiary/30 text-tertiary',
        date: '',
        title: 'Sphere Connect Summit',
        description: 'Networking and keynotes from global leaders in web3 and digital transformation.',
        imageAlt: 'Vibrant tech conference stage with high-definition screens displaying abstract digital patterns and professional speakers in dynamic lighting',
        imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdfFVPajMywG28YWR_UATW681Vb_wCZqu1QZf66TzCMbGTQ9hmtImI-t7Z_K4GSGZsi93a94Sug7W0EqaHo-F_Qa6VvBAh2x-DydibrVKCrpuT0tGGzyDQ3yKsvnuYZ9Dzz6DxfVU3FflmediLnogfz2DgOOWQEmTNpTYFOywA6f-YNyimX-e2bMHBDtLE-T2meGEU-AZIPzTwBJmV_IVjSthm--xKbMPQ4_eaxq44f-cOZVapQQrw3i-VYryImzz1w_goK6Bz_Wxi',
        buttonText: '',
    },
]

export default function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? carouselCards.length - 1 : prev - 1))
    }

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === carouselCards.length - 1 ? 0 : prev + 1))
    }

    return (
        <section className="mb-16 mx-20">
            <div className="flex  items-center justify-between  mb-8">
                <div className='my-2 '>
                    <h2 className="text-4xl font-extrabold font-headline tracking-tight text-white mb-2">
                        Featured Experiences
                    </h2>
                    <p className="text-on-surface-variant text-white">
                        Hand-picked events you shouldn&apos;t miss this month.
                    </p>
                </div>
                <div className="hidden sm:flex gap-2">
                    <button
                        onClick={handlePrev}
                        className="p-3 rounded-full cursor-pointer bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-colors"
                        aria-label="Previous carousel item"
                    >
                        <span className="material-symbols-outlined"><ChevronLeft size={30} color='white' className=' rounded-full border-2 border-amber-200 shadow-2xl ' /></span>
                    </button>
                    <button
                        onClick={handleNext}
                        className="p-3 rounded-full bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-colors"
                        aria-label="Next carousel item"
                    >
                        <span className="material-symbols-outlined"><ChevronRight size={30} color='white' className=' cursor-pointer rounded-full border-2 border-amber-200 shadow-2xl' /></span>
                    </button>
                </div>
            </div>

            <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {carouselCards.map((card) => (
                    <div
                        key={card.id}
                        className="min-w-[320px] md:min-w-[400px] md:w-[600px] h-[350px] rounded-2xl relative overflow-hidden group snap-start flex-shrink-0 transition-transform duration-300"
                    >
                        <img
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            alt={card.imageAlt}
                            src={card.imageSrc}
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-8 w-full">
                            <div className="flex items-center gap-2 mb-3">
                                <span
                                    className={`px-3 py-1 ${card.categoryColor} backdrop-blur-md border rounded-full text-[10px] font-bold uppercase tracking-widest`}
                                >
                                    {card.category}
                                </span>
                                {card.date && (
                                    <span className="text-white/60 text-xs font-body">• {card.date}</span>
                                )}
                            </div>
                            <h3 className="text-3xl font-bold font-headline text-white mb-2 group-hover:text-primary transition-colors">
                                {card.title}
                            </h3>
                            <p className="text-slate-300 text-sm max-w-md line-clamp-2 mb-6">
                                {card.description}
                            </p>
                            {card.buttonText && (
                                <button className="flex items-center gap-2 text-white font-bold font-label text-sm group/btn hover:text-primary transition-colors">
                                    {card.buttonText}
                                    <span className="material-symbols-outlined text-sm transition-transform group-hover/btn:translate-x-1">
                                        arrow_forward
                                    </span>
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
