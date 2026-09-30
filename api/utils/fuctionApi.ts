import { api } from "./api";
import type { Event } from "@/types/types";

export const getAllEvent = () => api.events.list<Event[]>();
