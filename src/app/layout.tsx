import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adrish — VLSI & Silicon Architecture",
  description:
    "Personal portfolio of Adrish, an Electronics Engineering student at Haldia Institute of Technology (HIT) focused on synthesizable RTL, RISC-V pipelined cores, and open-source ASIC flows.",
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
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var theme = localStorage.getItem('theme');
                if (theme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 antialiased transition-colors duration-200">
        {children}
      </body>
    </html>
  );
}
