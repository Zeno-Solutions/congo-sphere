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
interface Event {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  location: string;
  startDate: Date;
  endDate: Date;
  isFeatured: boolean;
  category: string;
  eventType: EventType;
  ticketTypes: TicketType[];
  participants: EventUser[];
  createdAt: Date;
  updatedAt: Date;
}

interface EventUser {
  userId: string;
  eventId: string;
  role: EventRole;
  joinedAt: Date;
  user: User;
  event: Event;
  tickets: Ticket[];
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

type EventType = "FREE" | "PAID";
type EventRole = "HOST" | "ATTENDEE";
type UserRole = "ADMIN" | "USER";

type PaymentStatus = "PENDING" | "COMPLETED" | "FAILED" | "REFUNDED";
