import { SkillCategory } from "@/types/portfolio";

export const skillCategoriesData: SkillCategory[] = [
  {
    title: "Hardware Description & HDLs",
    description: "Synthesizable RTL, verification assertions, and digital design",
    skills: [
      { name: "SystemVerilog (IEEE 1800)", tag: "RTL & Assertions" },
      { name: "Verilog (2001/2005)", tag: "Synthesizable Datapaths" },
      { name: "VHDL", tag: "Digital Logic" },
      { name: "Chisel / Scala", tag: "Generative Hardware" },
    ],
  },
  {
    title: "EDA & Synthesis Toolchains",
    description: "Commercial and open-source semiconductor tool suites",
    skills: [
      { name: "AMD Xilinx Vivado", tag: "FPGA Synthesis & PnR" },
      { name: "OpenROAD & OpenLane", tag: "RTL-to-GDSII ASIC Flow" },
      { name: "ModelSim & QuestaSim", tag: "RTL Simulation" },
      { name: "Yosys Open Synthesis", tag: "Logic Synthesis" },
      { name: "Magic VLSI & KLayout", tag: "Physical Layout & DRC/LVS" },
      { name: "GTKWave", tag: "VCD Waveform Analysis" },
      { name: "ngspice / LTspice", tag: "Analog SPICE Simulation" },
    ],
  },
  {
    title: "Architectures & Protocols",
    description: "Processor design standards and on-chip interconnect fabrics",
    skills: [
      { name: "RISC-V ISA (RV32I/E/M)", tag: "Microarchitecture" },
      { name: "AXI4 & AXI-Lite", tag: "High-Bandwidth Bus" },
      { name: "APB & AHB Protocols", tag: "Peripheral Interconnect" },
      { name: "UART, SPI, I2C", tag: "Serial Interfaces" },
      { name: "Clock Domain Crossing (CDC)", tag: "Metastability Prevention" },
      { name: "Static Timing Analysis (STA)", tag: "Timing Closure" },
    ],
  },
  {
    title: "Verification & Software",
    description: "Scripting, testbenches, and bare-metal firmware",
    skills: [
      { name: "Python (Cocotb & PySerial)", tag: "Testbench Automation" },
      { name: "TCL (Tool Command Language)", tag: "EDA Scripting" },
      { name: "C / Embedded C", tag: "Bare-Metal Firmware" },
      { name: "C++ (SystemC)", tag: "Architectural Modeling" },
      { name: "Git & Linux CLI", tag: "Version Control & Automation" },
    ],
  },
];
