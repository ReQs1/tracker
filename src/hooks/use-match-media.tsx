import { useState, useEffect } from "react";

export function useMatchMedia(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    setMatches(media.matches);

    const handleChange = (e: MediaQueryListEvent) => setMatches(e.matches);

    media.addEventListener("change", handleChange);

    return () => {
      media.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
}
