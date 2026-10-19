
"use client";

import { useEffect, useState } from "react";
//import { occasionCalendar, type Occasion } from "..OccassionCalendar/config/occasionCalendar";
import "./Ribbon.css";
import { Occasion, occasionCalendar } from "@/config/OccassionCalendar";

function getIndiaDate() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).formatToParts(new Date());

  const get = (type: string) =>
    parts.find((part) => part.type === type)?.value ?? "";

  return {
    day: Number(get("day")),
    month: Number(get("month")),
    year: Number(get("year")),
  };
}

export default function Ribbon() {
  const [occasion, setOccasion] = useState<Occasion | null>(null);
  const [dismissKey, setDismissKey] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateRibbon = () => {
      const { day, month, year } = getIndiaDate();

      const active = occasionCalendar
        .filter((item) => item.day === day && item.month === month)
        .sort((a, b) => b.priority - a.priority)[0];

      if (!active) {
        setVisible(false);
        setOccasion(null);
        return;
      }

      const key = `keyon-ribbon-${active.id}-${year}`;

      setOccasion(active);
      setDismissKey(key);

      try {
        setVisible(localStorage.getItem(key) !== "dismissed");
      } catch {
        setVisible(true);
      }
    };

    updateRibbon();

    // Recheck at midnight in case the page stays open.
    const timer = window.setInterval(updateRibbon, 60_000);

    return () => window.clearInterval(timer);
  }, []);

  const dismiss = () => {
    try {
      if (dismissKey) {
        localStorage.setItem(dismissKey, "dismissed");
      }
    } catch {
      // Dismiss for the current render if storage is unavailable.
    }

    setVisible(false);
  };

  if (!visible || !occasion) return null;

  return (
    <aside
      className={`occasion-ribbon occasion-ribbon--${occasion.theme}`}
      aria-label={occasion.message}
    >
      <span className="occasion-ribbon__text">
        {occasion.message}
      </span>

      <button
        className="occasion-ribbon__close"
        type="button"
        onClick={dismiss}
        aria-label={`Dismiss ${occasion.message} ribbon`}
      >
        ×
      </button>
    </aside>
  );
}
