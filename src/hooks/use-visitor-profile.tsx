import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  defaultVisitorProfile,
  inferVisitorRegion,
  INTEREST_KEY,
  type VisitorContextType,
  type VisitorProfile,
  VISIT_KEY,
} from "@/lib/visitor-profile.model";

const VisitorContext = createContext<VisitorContextType>({
  profile: defaultVisitorProfile,
  recordInterest: () => undefined,
  interests: {},
});

export const VisitorProvider = ({ children }: { children: React.ReactNode }) => {
  const [profile, setProfile] = useState<VisitorProfile>(defaultVisitorProfile);
  const [interests, setInterests] = useState<Record<string, number>>({});

  useEffect(() => {
    const storedVisits = Number(window.localStorage.getItem(VISIT_KEY) || "0");
    const nextVisits = storedVisits + 1;
    window.localStorage.setItem(VISIT_KEY, String(nextVisits));

    const storedInterest = window.localStorage.getItem(INTEREST_KEY);
    const parsedInterest: Record<string, number> = storedInterest ? JSON.parse(storedInterest) : {};
    const sortedInterests = Object.entries(parsedInterest).sort((a, b) => b[1] - a[1]);

    setInterests(parsedInterest);
    setProfile({
      visits: nextVisits,
      isReturning: nextVisits > 1,
      deviceType: window.matchMedia("(max-width: 768px)").matches ? "mobile" : "desktop",
      region: inferVisitorRegion(),
      topInterest: sortedInterests.length ? sortedInterests[0][0] : null,
    });
  }, []);

  const recordInterest = (interest: string) => {
    setInterests((prev) => {
      const next = { ...prev, [interest]: (prev[interest] || 0) + 1 };
      window.localStorage.setItem(INTEREST_KEY, JSON.stringify(next));
      const sortedInterests = Object.entries(next).sort((a, b) => b[1] - a[1]);
      setProfile((current) => ({ ...current, topInterest: sortedInterests.length ? sortedInterests[0][0] : null }));
      return next;
    });
  };

  const value = useMemo(() => ({ profile, recordInterest, interests }), [profile, interests]);

  return <VisitorContext.Provider value={value}>{children}</VisitorContext.Provider>;
};

export const useVisitorProfile = () => useContext(VisitorContext);
