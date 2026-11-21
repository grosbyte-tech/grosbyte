import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Grosbyte Technologies",
    short_name: "Grosbyte",
    description:
      "Practical software, websites, web and mobile applications, automation, and digital marketing for your business.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8fafc",
    theme_color: "#0966fa",
    icons: [
      {
        src: "/images/brand/logo-removebg.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/images/brand/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
