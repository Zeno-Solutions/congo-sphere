interface User {
  id: string;
  name: string;
  username: string;
  avatarUrl?: string;
  email: string;
  password: string;
  role: "admin" | "user";
  createdAt: Date;
  updatedAt: Date;
  eventUsers: [string];
}

interface TicketType {
  id: string;
  eventId: string;
  name: string;
  price: number;
  event: string;
}



interface Ticket {
  id: string;
  userId: string;
  eventId: string;
  ticketTypeId: string;
  ticketUrl: string;
  isPaid: boolean;
  createdAt: Date;
  eventUser: EventUser;
  ticketType: TicketType;
}

type EventRole = "HOST" | "ATTENDEE";
type UserRole = "ADMIN" | "USER";

type PaymentStatus = "PENDING" | "COMPLETED" | "FAILED" | "REFUNDED";



export interface Event {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  location: string;
  startDate: string;
  endDate: string;
  isFeatured: boolean;
  category: string;
  eventType: EventType;
  createdAt: string;
  updatedAt: string;
  participants: EventParticipant[];
}

export type EventType = "FREE" | "PAID";

export interface EventParticipant {
  role: ParticipantRole;
  user: EventUser;
}

export type ParticipantRole = "HOST" | "ORGANIZER" | "SPEAKER" | "PARTICIPANT";

export interface EventUser {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
}
