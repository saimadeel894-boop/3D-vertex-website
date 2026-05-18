import "./globals.css";

export const metadata = {
  title: "Vertex Markets | Trade Smarter",
  description:
    "Vertex Markets delivers professional trading conditions, institutional-grade technology, deep liquidity, and advanced trading platforms for serious traders.",
  openGraph: {
    title: "Vertex Markets | Trade Smarter",
    description:
      "Professional trading conditions, ultra-fast execution, deep liquidity, and advanced multi-platform trading.",
    type: "website"
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/assets/hero-bull-panel.jpg" fetchPriority="high" />
        <link rel="preload" as="font" href="/assets/fonts/Inter-400.ttf" type="font/ttf" crossOrigin="" />
        <link rel="preload" as="font" href="/assets/fonts/Inter-700.ttf" type="font/ttf" crossOrigin="" />
      </head>
      <body>{children}</body>
    </html>
  );
}
