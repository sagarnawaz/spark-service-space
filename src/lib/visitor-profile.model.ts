export type VisitorProfile = {
  visits: number;
  isReturning: boolean;
  deviceType: "mobile" | "desktop";
  region: "Americas" | "EMEA" | "APAC" | "Global";
  topInterest: string | null;
};

export type VisitorContextType = {
  profile: VisitorProfile;
  recordInterest: (interest: string) => void;
  interests: Record<string, number>;
};

export const VISIT_KEY = "spark-visits";
export const INTEREST_KEY = "spark-interest-map";

export const defaultVisitorProfile: VisitorProfile = {
  visits: 1,
  isReturning: false,
  deviceType: "desktop",
  region: "Global",
  topInterest: null,
};

export const inferVisitorRegion = (): VisitorProfile["region"] => {
  const zone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
  if (zone.includes("America")) return "Americas";
  if (zone.includes("Europe") || zone.includes("Africa") || zone.includes("Asia/Dubai")) return "EMEA";
  if (zone.includes("Asia") || zone.includes("Australia") || zone.includes("Pacific")) return "APAC";
  return "Global";
};
