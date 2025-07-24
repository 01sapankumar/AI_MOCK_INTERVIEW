import { interviewCovers, mappings } from "@/constants";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Merge Tailwind and clsx styles
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Base URL for devicon tech logos
const techIconBaseURL = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

// Normalize input tech name (e.g., "React.js" => "react")
const normalizeTechName = (tech: string) => {
  const key = tech.toLowerCase().replace(/\.js$/, "").replace(/\s+/g, "");
  const mapped = mappings[key as keyof typeof mappings];

  if (!mapped) {
    console.warn(`⚠️ Warning: '${tech}' was not found in mappings. Skipping logo fetch.`);
  }

  return mapped || null;
};

// Check if logo exists with HEAD request
const checkIconExists = async (url: string) => {
  try {
    const response = await fetch(url, { method: "HEAD" });
    return response.ok;
  } catch {
    return false;
  }
};

// Generate valid logo URLs for given tech stack
export const getTechLogos = async (techArray: string[]) => {
  const logoURLs = techArray.map((tech) => {
    const normalized = normalizeTechName(tech);

    return {
      tech,
      url: normalized
        ? `${techIconBaseURL}/${normalized}/${normalized}-original.svg`
        : "/tech.svg", // fallback if not mapped
    };
  });

  // Verify each URL exists, else fallback to default
  const results = await Promise.all(
    logoURLs.map(async ({ tech, url }) => ({
      tech,
      url: url !== "/tech.svg" && (await checkIconExists(url)) ? url : "/tech.svg",
    }))
  );

  return results;
};

// Pick a random interview cover image
export const getRandomInterviewCover = () => {
  const randomIndex = Math.floor(Math.random() * interviewCovers.length);
  return `/covers${interviewCovers[randomIndex]}`;
};
