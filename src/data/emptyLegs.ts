import type { AircraftCategory } from "./aircraft";

export interface EmptyLeg {
  id: string;
  from_city: string;
  from_iata: string;
  to_city: string;
  to_iata: string;
  date: string; // ISO yyyy-mm-dd
  aircraft: string;
  category: AircraftCategory;
  seats: string;
  price: number;
  badge?: string;
  featured?: boolean;
}

export const EMPTY_LEGS: EmptyLeg[] = [
  { id: "1", from_city: "Toluca", from_iata: "MMTO", to_city: "Cancún", to_iata: "MMUN", date: "2026-04-14", aircraft: "Learjet 35", category: "light", seats: "1–7", price: 4200, badge: "Hot", featured: true },
  { id: "2", from_city: "Monterrey", from_iata: "MMMY", to_city: "Miami", to_iata: "KMIA", date: "2026-04-16", aircraft: "Hawker 800", category: "midsize", seats: "1–8", price: 8500, badge: "2 disponibles" },
  { id: "3", from_city: "Los Cabos", from_iata: "MMSD", to_city: "CDMX", to_iata: "MMMX", date: "2026-04-18", aircraft: "Learjet 31", category: "light", seats: "1–6", price: 3100, badge: "Nuevo" },
  { id: "4", from_city: "CDMX", from_iata: "MMMX", to_city: "Houston", to_iata: "KHOU", date: "2026-04-20", aircraft: "Legacy 600", category: "heavy", seats: "1–13", price: 14000, badge: "Hot" },
  { id: "5", from_city: "Cancún", from_iata: "MMUN", to_city: "Guadalajara", to_iata: "MMGL", date: "2026-04-22", aircraft: "Learjet 45", category: "midsize", seats: "1–9", price: 5800, badge: "Disponible" },
  { id: "6", from_city: "Monterrey", from_iata: "MMMY", to_city: "New York", to_iata: "KTEB", date: "2026-04-25", aircraft: "Challenger 601", category: "heavy", seats: "1–10", price: 18500, badge: "Disponible" },
];
