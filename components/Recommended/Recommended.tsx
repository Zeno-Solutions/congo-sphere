import React from 'react'
import { Button } from '../ui/button'
import { Badge } from "@/components/ui/badge"
const envents = [
    {
        id: 1,
        category: 'Music Festival',
        categoryColor: 'bg-primary/20 border-primary/30 text-primary',
        date: '24 Oct 2024',
        title: 'Neon Horizon 2024',
        description: 'Experience the largest immersive electronic music gathering in the heart of Kinshasa with world-class light installations.',
        imageAlt: 'Dazzling neon light show at a futuristic music festival with crowd silhouettes against deep purple and pink laser beams',
        imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgcA9zRj_i9w9hJcRRbmjkw-zIfLvYAQ8K3Y2fHoNSbACA-AQ8NqsLaPQuHs6EKdiNIc_PxLFt8zjaEQSlgn02ghAud2JDqlEDHm9MG20zs1ue0xa05pXKsT_GIgHMovZg4J-Y14gIGKIvBXes7o1weP6GW4Wz4Af_wku5TnLE0VDHGvk0n5S8aE6kNy2_NMTVfThK_MSwnqa2rVBa8aBzkIorNJ5faHMRcoTuNr7WJvQEc6h9NW3IKyp1-8WCjnBv8DObt3RrUReB',
        buttonText: 'Book Tickets'
    },
    {
        id: 2,
        category: 'Tech Conference',
        categoryColor: 'bg-secondary/20 border-secondary/30 text-secondary',
        date: '15 Nov 2024',
        title: 'Innovate 2024',
        description: 'Join industry leaders for insights on the latest technological advancements and their impact on the future.',
        imageAlt: 'Modern tech conference with attendees networking and listening to keynote speakers in a sleek venue',
        imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1SnHWXjkF-ys44m-qQi0wGGfSc7Aah5telX0ZuyXAwBJUeLiRE6cqg5xwwnteC2_VBs9q7cbxFG8CffPftZXWRQzzoxkHFTq8qX53YMP5T2ESOtkhRaHIQ50_g-Fa-IUkpu5mJI06rRSYY_MlKIEZ2SaCztvhHga_2b1N5Snzg_nHb4Pykup4kqtnNO5PKwDCFz6YVBFUrqz57wPNvIwElak7kCbH_r_gqAjSJIwcWb41nv_0SwwFD8Z-K-ArrRfceyqCd-oKIlPr',
        buttonText: 'Register Now',
        price: '299'
    }, {
        id: 3,
        category: 'Lifestyle Fair',
        categoryColor: 'bg-tertiary/20 border-tertiary/30 text-tertiary',
        date: '5 Dec 2024',
        title: 'Urban Vibes 2024',
        description: 'Discover the latest trends in fashion, food, and wellness at this vibrant lifestyle fair.',
        imageAlt: 'Lifestyle fair with vendors showcasing fashion, food, and wellness products in a lively atmosphere',
        imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1SnHWXjkF-ys44m-qQi0wGGfSc7Aah5telX0ZuyXAwBJUeLiRE6cqg5xwwnteC2_VBs9q7cbxFG8CffPftZXWRQzzoxkHFTq8qX53YMP5T2ESOtkhRaHIQ50_g-Fa-IUkpu5mJI06rRSYY_MlKIEZ2SaCztvhHga_2b1N5Snzg_nHb4Pykup4kqtnNO5PKwDCFz6YVBFUrqz57wPNvIwElak7kCbH_r_gqAjSJIwcWb41nv_0SwwFD8Z-K-ArrRfceyqCd-oKIlPr',
        buttonText: 'Learn More',
        price: '199'
    }, {
        id: 4,
        category: 'Art Exhibition',
        categoryColor: 'bg-secondary/20 border-secondary/30 text-secondary',
        date: '20 Jan 2025',
        title: 'Canvas of Dreams',
        description: 'Explore a stunning collection of contemporary art from emerging and established artists around the world.',
        imageAlt: 'Contemporary art exhibition with vibrant paintings and sculptures displayed in a modern gallery setting',
        imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDh-cWBHqZidGDkvCd2JI0qFWxqBOu1RmL7xryzrStUj5GoUsPs53uuqak80rg71iNY3zdap-re1FQHx1Jt7VlDvch-Aiu1Ymgvbxiz5P4VtneG53mAQS6fPUprXJQT9bSLvviQiZg5z9n_vyH8I-X3mGjd5OVtkP6fh5esBbMSrnab60MtSQ-UeTgCWzd3Q3u_6pB-fNe13P7f0irraHx26A3Uf5Ppyojyb5795XdLXHTUd3uJkzgTTnwqLrDNd5FNs9-s75BvuKd',
        buttonText: 'Explore Art',
        price: '249'
    }
]
export default function Recommended() {
    return (
        <section className='px-10'>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <h2 className="text-3xl font-bold font-headline text-white">Recommended For You</h2>
                <div className="flex gap-3 overflow-x-auto no-scrollbar">
                    <button
                        className=" text-on-primary-fixed px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap bg-blue-500">All
                        Events</button>
                    <button
                        className="bg-[#000000af] text-on-surface-variant px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap hover:bg-surface-container-highest transition-colors">Music</button>
                    <button
                        className="bg-[#000000af]  text-on-surface-variant px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap hover:bg-surface-container-highest transition-colors">Technology</button>
                    <button
                        className="bg-[#000000af]  text-on-surface-variant px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap hover:bg-surface-container-highest transition-colors">Lifestyle</button>
                </div>
            </div>
            {/* <!-- Bento Grid inspired layout --> */}



            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {envents.map((event) => (
                    <div
                        key={event.id}
                        className="rounded-3xl shadow-[-2px_12px_18px_-5px_#111d39] bg-surface-container-low  overflow-hidden flex flex-col group border border-white/5 hover:border-primary/30 transition-all"
                    >
                        <div className="relative h-48 overflow-hidden">
                            <img
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                alt={event.imageAlt}
                                src={event.imageSrc}
                            />
                        </div>
                        <div className="text-white p-6 flex flex-col">
                            <div className="flex items-center text-[#cc97ff] gap-2 text-xs font-bold uppercase tracking-wider mb-3">
                                <span className="material-symbols-outlined text-[14px] ">calendar_today</span>
                                {event.date}
                            </div>
                            <h4 className="text-xl font-bold font-headline text-white mb-2 leading-tight">{event.title}</h4>
                            <div className="flex items-center gap-2 text-on-surface-variant text-sm mb-4">
                                <span className="material-symbols-outlined text-[16px]">event</span>
                                {event.category}
                            </div>
                            <p className="text-on-surface-variant text-sm font-body line-clamp-2 mb-6">
                                {event.description}
                            </p>
                            <div className="mt-auto flex justify-between px-3 items-center pt-4 border-t border-white/5 ">
                                <span className="text-xl font-bold text-white">{event.price ? `$${event.price}` : <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300 w-20 h-8 flex items-center justify-center text-sm font-bold">
                                    Free
                                </Badge>}</span>

                                <button className="cursor-pointer text-[#cc97ff] font-bold text-sm hover:underline">
                                    {'View Details'}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
