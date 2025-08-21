import { interviewCovers, mappings } from "@/constants";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const techIconBaseURL = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

// normalize names (e.g., "Next.js" → "nextjs")
const normalizeTechName = (tech: string) => {
  const key = tech.toLowerCase().replace(/\.js$/, "").replace(/\s+/g, "");
  return mappings[key as keyof typeof mappings] ?? key;
};

// return logos with guaranteed fallback
export const getTechLogos = async (techArray?: string[]) => {
  if (!techArray || techArray.length === 0) return [];

  return techArray.map((tech) => {
    const normalized = normalizeTechName(tech);

    // Local first
    const localPath = `/logos/${normalized}.png`;

    // CDN second
    const cdnPath = `${techIconBaseURL}/${normalized}/${normalized}-original.svg`;

    // Default fallback
    const fallbackPath = "/logos/default.png"; // add a default.png in /public/logos

    return {
      tech,
      logo: localPath || cdnPath || fallbackPath,
    };
  });
};

export const getRandomInterviewCover = () => {
  const randomIndex = Math.floor(Math.random() * interviewCovers.length);
  return `/covers${interviewCovers[randomIndex]}`;
};
