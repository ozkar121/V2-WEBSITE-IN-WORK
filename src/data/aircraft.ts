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

export const CATEGORY_ORDER: AircraftCategory[] = ["turbo", "light", "midsize", "heavy"];
