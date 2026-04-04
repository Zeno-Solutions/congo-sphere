import React from 'react'

interface EventCard {
    id: number
    date: string
    title: string
    location: string
    description: string
    price: string
    imageAlt: string
    imageSrc: string
}

const recommendedEvents: EventCard[] = [
    {
        id: 1,
        date: 'OCT 28, 19:00',
        title: 'Gala in the Garden: Autumn Soiree',
        location: 'The Grand Conservatory, Kinshasa',
        description: 'Join us for an evening of botanical wonders, live orchestral performances, and chef-curated tastings.',
        price: '$45.00',
        imageAlt: 'Elegant garden party with string lights, white floral arrangements, and guests in cocktail attire during late twilight',
        imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1SnHWXjkF-ys44m-qQi0wGGfSc7Aah5telX0ZuyXAwBJUeLiRE6cqg5xwwnteC2_VBs9q7cbxFG8CffPftZXWRQzzoxkHFTq8qX53YMP5T2ESOtkhRaHIQ50_g-Fa-IUkpu5mJI06rRSYY_MlKIEZ2SaCztvhHga_2b1N5Snzg_nHb4Pykup4kqtnNO5PKwDCFz6YVBFUrqz57wPNvIwElak7kCbH_r_gqAjSJIwcWb41nv_0SwwFD8Z-K-ArrRfceyqCd-oKIlPr',
    },
    {
        id: 2,
        date: 'NOV 02, 10:00',
        title: 'Workshop: Future of UI/UX',
        location: 'Sphere Digital Hub',
        description: 'A deep dive into spatial computing, AI-driven design, and the next generation of user interfaces.',
        price: 'Free',
        imageAlt: 'Minimalist technology workshop setup with sleek laptops, neon accent lighting, and diverse developers collaborating',
        imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBxIO7edauSTElwBrE2okhdwxL2Mx0H53t1D7k1ZdiKW8IJvWcQ996tlyz7aMSNOkp1YJLDwh42JuhEivezc3nuUnYYHxT9XD0BHs9p6pQbVQuR3COcpT3cL2Z2jWm-G3sVX7LpDWnNRqj5ySzF_aqpmvUcJC5s2VNkXZn6DTyzlgH5SLrDlEHkJ_CujpJqYyD-v0dPqAjSQjs4VnHgP7tIZr63_-0fItSu939WpUQb8DZFaGQPrKsVd12t4NtmwQ3hkjpG3Ry2yFk',
    },
    {
        id: 3,
        date: 'NOV 05, 20:00',
        title: 'Culinary Fusion: Dark Night Dinner',
        location: 'Obsidian Kitchen',
        description: 'An experimental multi-sensory dining experience where every dish is a work of edible art.',
        price: '$120.00',
        imageAlt: 'Exquisite plating of gourmet fusion cuisine in a dimly lit, modern restaurant with copper accents and warm backlighting',
        imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8T7oBveJbK-IfBIPs9VXPRrbegn6EcYz5NdvnHvCXRVa9X091RRdBrpFlGUNPS1r3T8Y7lazOFAnk1dP1rc29a9xI7bfBmr1oGAljX79u-8evfxyRYr3wrybsrhDP6TaSNMJeLDwVlQxRNZUm4rFbgnzIl3-aMUffu05EoQi1HANdZ_cov_13nfZxuMkAoNmzd0Ggnu75fSDe_mKDfaGPCL-7M89sEWhF8t6muJy_9Q6L3xB-Hb6IFTivSUREmc-IylApga6Fimup',
    },
    {
        id: 4,
        date: 'NOV 12, 07:00',
        title: 'Wild Peaks: Adventure Weekend',
        location: 'Highland Basecamp',
        description: 'Experience the thrill of the wilderness with guided mountain biking, hiking, and fireside workshops.',
        price: '$85.00',
        imageAlt: 'Action shot of extreme mountain biking on a rugged forest trail with sunlight filtering through tall redwood trees',
        imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgOkBmSiQLx8633UxkFY-Vo0jkIr0-mOn7850lCVZKpw-hjkZRdfdKiUrdQRczwp2WY8A6rGs4hIxcGulNP2mj02KmALvakz14qzPv4M3SlT0pj9a8G5d_IuFVkUsmAPRT4C-V2WGizBRwBLrzJa8Ow-lx2mE_0rKcG86DiE8rVtgpnIIX4HziVcjgozn-ntejiwqbPqmq27mLZYdg7PRf8ZYWTNvfc2AKyaA1Tyh0yGMuRedm7kr_mQcIt6mOrbmoKDOSe7G-x5fB',
    },
    {
        id: 5,
        date: 'NOV 15, 18:30',
        title: 'Sphere E-Sports Championship',
        location: 'Arena One',
        description: 'Watch the nation\'s top players compete for the ultimate title in an electrifying stadium environment.',
        price: '$25.00',
        imageAlt: 'Wide shot of a professional indoor sports arena with vibrant lighting, energetic fans, and sleek modern architecture',
        imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQP_evpb0UEzE_53zZ8e13iG89CZa4DoFRRAySCaNTHb_02thNVlKG4fRqMop8WUSQjyzpjA9rAW9YLd6Va-dXEl4wKhU1XK8sE7pYgldnJIQP3Q4AFyQV_AKrCkNy5pnkEtnOjGSAQ3md0HP0zA0erAI7lqG70De7Mnxt0OjAC3FJJFLdohj5TmtSymlKTb-p4879CHpKYTAQofQqCiNKH2Zn7BW92-Xrexe3PMzyaAOYEe9DRc5kwEyVrLSjsCs1z5Bl3DQIc',
    },
    {
        id: 6,
        date: 'NOV 20, 16:00',
        title: 'Unity Parade: Cultural Festival',
        location: 'Downtown Plaza',
        description: 'A vibrant display of traditional music, dance, and food celebrating our diverse community roots.',
        price: 'Free',
        imageAlt: 'Crowded colorful street parade with elaborate costumes, floating lanterns, and blurred motion during a festive evening celebration',
        imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQ13B_3ukzanYn3xNA-0HOtw0WuljDKsxP8XPlt3EqAZ_cMFmxS5jvnDNRVn5P1EW_ULiwT23o4xQoJohzH9X2ThWMxFJ9szhXes5QkOHPqTJqH1md2AjI6CKu9xexB06Q1wAOzAV_Mud4967iDAqU2x9gVm_3ajOJttmfJqsBmVrcIyiDdFyI2-B1k8ZT2Vc806qyp-jlap-OwO3tIuP8rufPPlMK_xQ8APgX6s_PkroRneKC0spW3yrHNPjIxTYGptZXcOtOV5-q',
    },
]

export default function Recommended() {
    return (
        <section class="mb-16">
            <div class="flex items-end justify-between mb-8">
                <div>
                    <h2 class="text-4xl font-extrabold font-headline tracking-tight text-white mb-2">Featured
                        Experiences</h2>
                    <p class="text-on-surface-variant font-body">Hand-picked events you shouldn't miss this month.</p>
                </div>
                <div class="hidden sm:flex gap-2">
                    <button
                        class="p-3 rounded-full bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-colors">
                        <span class="material-symbols-outlined">chevron_left</span>
                    </button>
                    <button
                        class="p-3 rounded-full bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-colors">
                        <span class="material-symbols-outlined">chevron_right</span>
                    </button>
                </div>
            </div>
            <div class="flex gap-6 overflow-x-auto no-scrollbar pb-4 snap-x snap-mandatory">
                <!-- Card 1 -->
                <div
                    class="min-w-[320px] md:min-w-[600px] h-[400px] rounded-xl relative overflow-hidden group snap-start flex-shrink-0">
                    <img class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        data-alt="Dazzling neon light show at a futuristic music festival with crowd silhouettes against deep purple and pink laser beams"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgcA9zRj_i9w9hJcRRbmjkw-zIfLvYAQ8K3Y2fHoNSbACA-AQ8NqsLaPQuHs6EKdiNIc_PxLFt8zjaEQSlgn02ghAud2JDqlEDHm9MG20zs1ue0xa05pXKsT_GIgHMovZg4J-Y14gIGKIvBXes7o1weP6GW4Wz4Af_wku5TnLE0VDHGvk0n5S8aE6kNy2_NMTVfThK_MSwnqa2rVBa8aBzkIorNJ5faHMRcoTuNr7WJvQEc6h9NW3IKyp1-8WCjnBv8DObt3RrUReB" />
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                    <div class="absolute bottom-0 left-0 p-8 w-full">
                        <div class="flex items-center gap-2 mb-3">
                            <span
                                class="px-3 py-1 bg-primary/20 backdrop-blur-md border border-primary/30 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary">Music
                                Festival</span>
                            <span class="text-white/60 text-xs font-body">• 24 Oct 2024</span>
                        </div>
                        <h3
                            class="text-3xl font-bold font-headline text-white mb-2 group-hover:text-primary transition-colors">
                            Neon Horizon 2024</h3>
                        <p class="text-slate-300 text-sm max-w-md line-clamp-2 mb-6">Experience the largest immersive
                            electronic music gathering in the heart of Kinshasa with world-class light installations.
                        </p>
                        <button class="flex items-center gap-2 text-white font-bold font-label text-sm group/btn">
                            Book Tickets
                            <span
                                class="material-symbols-outlined text-sm transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                        </button>
                    </div>
                </div>
                <!-- Card 2 -->
                <div
                    class="min-w-[320px] md:min-w-[450px] h-[400px] rounded-xl relative overflow-hidden group snap-start flex-shrink-0">
                    <img class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        data-alt="Intimate jazz club setting with warm spotlighting, brass instruments, and sophisticated attendees in a dark velvet lounge atmosphere"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDh-cWBHqZidGDkvCd2JI0qFWxqBOu1RmL7xryzrStUj5GoUsPs53uuqak80rg71iNY3zdap-re1FQHx1Jt7VlDvch-Aiu1Ymgvbxiz5P4VtneG53mAQS6fPUprXJQT9bSLvviQiZg5z9n_vyH8I-X3mGjd5OVtkP6fh5esBbMSrnab60MtSQ-UeTgCWzd3Q3u_6pB-fNe13P7f0irraHx26A3Uf5Ppyojyb5795XdLXHTUd3uJkzgTTnwqLrDNd5FNs9-s75BvuKd" />
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                    <div class="absolute bottom-0 left-0 p-8">
                        <span
                            class="px-3 py-1 bg-secondary/20 backdrop-blur-md border border-secondary/30 rounded-full text-[10px] font-bold uppercase tracking-widest text-secondary mb-3 inline-block">Fine
                            Arts</span>
                        <h3 class="text-2xl font-bold font-headline text-white mb-2">Velvet Underground Jazz</h3>
                        <p class="text-slate-300 text-sm line-clamp-2">A soulful night of acoustic jazz and classic
                            cocktails in an exclusive underground venue.</p>
                    </div>
                </div>
                { < !--Card 3 -->}
                <div
                    class="min-w-[320px] md:min-w-[450px] h-[400px] rounded-xl relative overflow-hidden group snap-start flex-shrink-0">
                    <img class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        data-alt="Vibrant tech conference stage with high-definition screens displaying abstract digital patterns and professional speakers in dynamic lighting"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdfFVPajMywG28YWR_UATW681Vb_wCZqu1QZf66TzCMbGTQ9hmtImI-t7Z_K4GSGZsi93a94Sug7W0EqaHo-F_Qa6VvBAh2x-DydibrVKCrpuT0tGGzyDQ3yKsvnuYZ9Dzz6DxfVU3FflmediLnogfz2DgOOWQEmTNpTYFOywA6f-YNyimX-e2bMHBDtLE-T2meGEU-AZIPzTwBJmV_IVjSthm--xKbMPQ4_eaxq44f-cOZVapQQrw3i-VYryImzz1w_goK6Bz_Wxi" />
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                    <div class="absolute bottom-0 left-0 p-8">
                        <span
                            class="px-3 py-1 bg-tertiary/20 backdrop-blur-md border border-tertiary/30 rounded-full text-[10px] font-bold uppercase tracking-widest text-tertiary mb-3 inline-block">Technology</span>
                        <h3 class="text-2xl font-bold font-headline text-white mb-2">Sphere Connect Summit</h3>
                        <p class="text-slate-300 text-sm line-clamp-2">Networking and keynotes from global leaders in
                            web3 and digital transformation.</p>
                    </div>
                </div>
            </div>
        </section>)
}
