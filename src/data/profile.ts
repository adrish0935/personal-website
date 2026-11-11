import { Profile } from "@/types/portfolio";

export const profileData: Profile = {
  name: "Adrish",
  title: "Electronics Engineer — VLSI & SoC Architecture",
  tagline: "Focused on synthesizable RTL design, RISC-V pipelined microarchitecture, and open-source ASIC flows. Built with SystemVerilog, OpenROAD, SkyWater 130nm, and AMD Vivado.",
  institution: "Haldia Institute of Technology (HIT)",
  department: "Electronics & Communication Engineering",
  batch: "Class of 2026 - 2030 (Freshman)",
  location: "Haldia, West Bengal, India",
  email: "adrish.ece@hit.ac.in",
  github: "https://github.com/adrish0935",
  githubUsername: "adrish0935",
  linkedin: "https://linkedin.com",
  resumeUrl: "#resume",
  about: [
    "I am an electronics engineering student at Haldia Institute of Technology (HIT) focused on digital IC design, computer microarchitecture, and open-source semiconductor toolchains. My work bridges foundational semiconductor physics with synthesizable RTL and physical layout.",
    "My recent projects include a 5-stage pipelined RV32I RISC-V core with hardware hazard forwarding, an open-source RTL-to-GDSII ASIC accelerator flow targeted for SkyWater 130nm, and an asynchronous dual-clock FIFO buffer designed for safe clock domain crossing (CDC).",
    "I prioritize hardware reliability and predictability: writing clean, synthesizable code free of inferred latches, maintaining strict CDC hygiene to prevent metastability, and verifying setup/hold timing closure across multi-corner operating conditions."
  ],
  focusAreas: [
    {
      id: "rtl",
      code: "01 // Digital RTL",
      title: "Synthesizable RTL & Datapaths",
      description: "Pipelined arithmetic units, hazard detection logic, and forwarding networks in SystemVerilog."
    },
    {
      id: "riscv",
      code: "02 // Microarchitecture",
      title: "RISC-V Processor Cores",
      description: "In-order 5-stage classic RISC execution, branch prediction, and compliance verification suites."
    },
    {
      id: "asic",
      code: "03 // ASIC & Physical Design",
      title: "Open-Source Silicon Flows",
      description: "Synthesis, floorplanning, placement, routing, and DRC/LVS sign-off using OpenROAD and Magic."
    }
  ],
  principles: [
    {
      label: "Predictable Hardware Synthesis",
      detail: "Writing RTL that maps cleanly to standard cells without accidental latch inference or combinatorial loops."
    },
    {
      label: "Metastability & CDC Safety",
      detail: "Enforcing Gray-code pointer conversions and multi-stage synchronizers across asynchronous clock domains."
    },
    {
      label: "Rigorous Timing Closure",
      detail: "Prioritizing setup and hold slack margins under worst-case Process-Voltage-Temperature (PVT) operating corners."
    },
    {
      label: "Open Silicon Democratization",
      detail: "Leveraging open-source EDA stacks (Yosys, OpenLane, Magic) to make custom ASIC design verifiable and reproducible."
    }
  ]
};
