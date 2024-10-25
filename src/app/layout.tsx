import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const googleFont = Space_Grotesk({
  variable: "--google-font",
  weight: ["300", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${googleFont.variable}`}>
        <Nav />
        
        {children}

        <Footer />
        
        <svg id="noise">
          <filter id="delbadeoliveiraisalegend">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.80"
              numOctaves="4"
              stitchTiles="stitch"
            />
          </filter>
          <rect
            width="100%"
            height="100%"
            filter="url(#delbadeoliveiraisalegend)"
          />
        </svg>
      </body>
    </html>
  );
}
