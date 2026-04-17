"use client";

import { createContext, useContext, useState, useEffect } from "react";

const defaultInteractions = [
  {
    type: "Text",
    icon: "/text.png",
    isImage: true,
    person: "Olivia Martinez",
    date: "March 13, 2026",
    timestamp: 1773360000000,
  },
  {
    type: "Call",
    icon: "/call.png",
    isImage: true,
    person: "Lisa Nakamura",
    date: "March 11, 2026",
    timestamp: 1773187200000,
  },
  {
    type: "Call",
    icon: "/call.png",
    isImage: true,
    person: "Sarah Chen",
    date: "March 11, 2026",
    timestamp: 1773187200000,
  },
  {
    type: "Video",
    icon: "/video.png",
    isImage: true,
    person: "Marcus Johnson",
    date: "March 6, 2026",
    timestamp: 1772755200000,
  },
  {
    type: "Video",
    icon: "/video.png",
    isImage: true,
    person: "Ryan O'Brien",
    date: "February 24, 2026",
    timestamp: 1771804800000,
  },
];

const InteractionContext = createContext();

export function InteractionProvider({ children }) {
  const [interactions, setInteractions] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("kinkeeper_interactions");
    if (stored) {
      setInteractions(JSON.parse(stored));
    } else {
      setInteractions(defaultInteractions);
      localStorage.setItem(
        "kinkeeper_interactions",
        JSON.stringify(defaultInteractions),
      );
    }
    setIsLoaded(true);
  }, []);

  const addInteraction = (interaction) => {
    const updated = [interaction, ...interactions].sort(
      (a, b) => b.timestamp - a.timestamp,
    );
    setInteractions(updated);
    localStorage.setItem("kinkeeper_interactions", JSON.stringify(updated));
  };

  return (
    <InteractionContext.Provider
      value={{ interactions, addInteraction, isLoaded }}
    >
      {children}
    </InteractionContext.Provider>
  );
}

export function useInteractions() {
  return useContext(InteractionContext);
}
