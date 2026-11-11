import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adrish — VLSI & Silicon Architecture",
  description:
    "Personal portfolio of Adrish, an Electronics Engineering freshman at Haldia Institute of Technology (HIT) focused on synthesizable RTL, RISC-V pipelined cores, and open-source ASIC flows.",
  keywords: [
    "VLSI",
    "Chip Design",
    "SoC Architecture",
    "RISC-V",
    "SystemVerilog",
    "Verilog",
    "OpenROAD",
    "SkyWater 130nm",
    "Haldia Institute of Technology",
    "Adrish",
  ],
  authors: [{ name: "Adrish", url: "https://github.com/adrish0935" }],
  openGraph: {
    title: "Adrish — VLSI & Silicon Architecture",
    description: "Designing silicon from first principles, custom RISC-V cores, and open-source ASIC flows.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-neutral-950 text-neutral-100 antialiased selection:bg-neutral-800 selection:text-neutral-100">
        {children}
      </body>
    </html>
  );
}
