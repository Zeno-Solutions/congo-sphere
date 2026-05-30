import Link from 'next/link'
import { ArrowLeft, Calendar, MapPin, Ticket, QrCode } from 'lucide-react'
import { getEventById } from '@/lib/data'
import Contenaire from '@/components/Contenaire'

interface TicketPageProps {
    params: {
        id: string
    }
}

export default function TicketPage({ params }: TicketPageProps) {
    const event = getEventById(params.id)

    if (!event) {
        return (
            <Contenaire className='py-10'>
                <div className='min-h-screen flex items-center justify-center'>
                    <div className='rounded-3xl bg-surface-container-low border border-white/10 p-10 text-center'>
                        <p className='text-lg font-bold text-on-surface mb-3'>Ticket introuvable</p>
                        <p className='text-on-surface-variant mb-6'>Nous n’avons pas trouvé d’événement associé à ce billet.</p>
                        <Link href='/events' className='inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-on-primary-fixed'>Retour aux événements</Link>
                    </div>
                </div>
            </Contenaire>
        )
    }

    return (
        <Contenaire className='py-10'>
            <div className='min-h-screen bg-surface text-on-surface font-body overflow-x-hidden'>
                <div className='fixed inset-0 bg-mesh z-0 pointer-events-none'></div>
                <div className='fixed -top-[20%] -left-[10%] w-[60%] h-[60%] bg-primary/10 blur-[120px] rounded-full pointer-events-none'></div>
                <div className='fixed -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-secondary/10 blur-[120px] rounded-full pointer-events-none'></div>

                <section className='max-w-5xl mx-auto px-6 py-10'>
                    <div className='mb-8'>
                        <Link href={`/events/${event.id}`} className='inline-flex items-center gap-2 text-primary font-semibold hover:underline'>
                            <ArrowLeft size={16} /> Retour à l’événement
                        </Link>
                    </div>

                    <div className='grid gap-8 lg:grid-cols-[1.2fr_0.8fr]'>
                        <div className='rounded-[2rem] bg-surface-container-low border border-white/10 p-8 shadow-2xl shadow-black/5'>
                            <div className='flex flex-col gap-4'>
                                <div className='inline-flex items-center gap-3 rounded-full bg-secondary/10 px-4 py-2 text-sm uppercase tracking-[0.3em] text-secondary'>
                                    <Ticket size={18} /> Billet événement
                                </div>
                                <h1 className='text-4xl font-extrabold font-headline'>{event.title}</h1>
                                <p className='text-on-surface-variant leading-relaxed'>{event.description}</p>
                                <div className='grid gap-4 sm:grid-cols-2 mt-6'>
                                    <div className='rounded-3xl bg-surface-container-high p-5'>
                                        <p className='text-sm uppercase tracking-[0.3em] text-on-surface-variant mb-3'>Date</p>
                                        <div className='flex items-center gap-2 text-base font-semibold'>
                                            <Calendar size={18} className='text-primary' />
                                            {new Date(event.date).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })}
                                        </div>
                                    </div>
                                    <div className='rounded-3xl bg-surface-container-high p-5'>
                                        <p className='text-sm uppercase tracking-[0.3em] text-on-surface-variant mb-3'>Lieu</p>
                                        <div className='flex items-center gap-2 text-base font-semibold'>
                                            <MapPin size={18} className='text-secondary' />
                                            {event.location}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='rounded-[2rem] bg-surface-container-low border border-white/10 p-8 flex flex-col gap-6'>
                            <div className='rounded-3xl bg-slate-950/80 p-6 text-center'>
                                <QrCode size={72} className='mx-auto text-primary' />
                                <p className='mt-6 text-sm uppercase tracking-[0.3em] text-on-surface-variant'>Billet</p>
                                <p className='text-2xl font-bold mt-2 text-on-surface'>#{params.id}</p>
                            </div>

                            <div className='space-y-4'>
                                <div className='rounded-3xl bg-surface-container-high p-5'>
                                    <p className='text-sm uppercase tracking-[0.3em] text-on-surface-variant'>Accès</p>
                                    <p className='font-semibold'>Entrée VIP</p>
                                </div>
                                <div className='rounded-3xl bg-surface-container-high p-5'>
                                    <p className='text-sm uppercase tracking-[0.3em] text-on-surface-variant'>Partager</p>
                                    <p className='text-on-surface-variant'>Envoyez ce billet à vos invités avec le lien de confirmation.</p>
                                </div>
                            </div>

                            <div className='rounded-3xl bg-surface-container-high p-5 text-center'>
                                <span className='inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary'>
                                    <Ticket size={16} /> Accès prioritaire activé
                                </span>
                                <p className='mt-4 text-sm text-on-surface-variant'>Présentez ce billet à l’entrée pour accéder à l’événement.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Contenaire>
    )
}
