import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Avocado.ai",
    short_name: "Avocado.ai",
    description: "AI-native Security Operations & Validation Platform",
    start_url: "/zh-Hant",
    display: "standalone",
    background_color: "#f6f7f2",
    theme_color: "#101714",
  };
}
