export type AircraftCategory = "turbo" | "light" | "midsize" | "heavy";

export interface Aircraft {
  id: string;
  name: string;
  category: AircraftCategory;
  passengers: string;
  range_km: string;
  speed_kmh: string;
  range_nm: string;
}

export const CATEGORY_LABELS: Record<AircraftCategory, string> = {
  turbo: "Turbohélice",
  light: "Jet Ligero",
  midsize: "Mediano",
  heavy: "Jet Pesado",
};

export const AIRCRAFT: Aircraft[] = [
  { id: "d1", name: "Piper M500", category: "turbo", passengers: "4–5", range_km: "1,520 km", speed_kmh: "460 km/h", range_nm: "Hasta 1,000 nm" },
  { id: "d2", name: "Pilatus PC-12", category: "turbo", passengers: "6–9", range_km: "1,650 km", speed_kmh: "500 km/h", range_nm: "Hasta 900 nm" },
  { id: "d3", name: "Learjet 35", category: "light", passengers: "6–8", range_km: "3,523 km", speed_kmh: "852 km/h", range_nm: "Hasta 1,400 nm" },
  { id: "d4", name: "Learjet 31", category: "light", passengers: "6–7", range_km: "2,470 km", speed_kmh: "835 km/h", range_nm: "Hasta 1,200 nm" },
  { id: "d5", name: "Hawker 800", category: "midsize", passengers: "8–9", range_km: "4,400 km", speed_kmh: "843 km/h", range_nm: "Hasta 2,400 nm" },
  { id: "d6", name: "Learjet 45", category: "midsize", passengers: "7–9", range_km: "3,704 km", speed_kmh: "859 km/h", range_nm: "Hasta 2,000 nm" },
  { id: "d7", name: "Learjet 75", category: "midsize", passengers: "7–9", range_km: "3,779 km", speed_kmh: "867 km/h", range_nm: "Hasta 2,200 nm" },
  { id: "d8", name: "Legacy 600", category: "heavy", passengers: "13–16", range_km: "6,019 km", speed_kmh: "870 km/h", range_nm: "Intercontinental" },
  { id: "d9", name: "Gulfstream G450", category: "heavy", passengers: "12–14", range_km: "7,800 km", speed_kmh: "904 km/h", range_nm: "Transatlántico" },
  { id: "d10", name: "Challenger 601", category: "heavy", passengers: "10–12", range_km: "6,300 km", speed_kmh: "851 km/h", range_nm: "Intercontinental" },
];
