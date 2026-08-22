/** Research branches. Broad by default, specific only where a branch has
 *  actually been thought through.
 *
 *  A branch is an area on a map, not a department. Nobody is staffed to any of
 *  them. The tier says whether work is happening in a branch, which for eight
 *  of the nine is no. Threads are chips, not sentences. */
import type { Tier } from "@/data/tiers";

export type Branch = {
  slug: string;
  name: string;
  /** When, not what. See data/tiers.ts. */
  tier: Tier;
  summary: string;
  threads: string[];
};

export const branches: Branch[] = [
  {
    slug: "computing-ai",
    name: "Computing & AI",
    tier: "BUILDING NOW",
    summary: "The strongest knowledge base at ME, and the only branch explored in depth.",
    threads: [
      "Agent native OS design",
      "Shared command routing",
      "External models, not a frontier model",
    ],
  },
  {
    slug: "energy",
    name: "Energy",
    tier: "LONG-TERM",
    summary: "Power electronics first: conversion, control, distribution. Everything else sits on it.",
    threads: [
      "Power electronics for dense compute",
      "A smart DC bus",
      "Protection coordination",
    ],
  },
  {
    slug: "space",
    name: "Space & Satellites",
    tier: "LONG-TERM",
    summary: "Earth observation, delivering services large organizations actually buy.",
    threads: [
      "Imaging, mapping, weather",
      "Infrastructure monitoring",
      "Orbital infrastructure",
    ],
  },
  {
    slug: "robotics",
    name: "Robotics",
    tier: "LONG-TERM",
    summary: "Industrial, mobile and laboratory systems, and the interfaces agents drive them through.",
    threads: [
      "Laboratory automation",
      "Mobile platforms",
      "Safe autonomy boundaries",
    ],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    tier: "LONG-TERM",
    summary: "Distributed automated production rather than one large plant.",
    threads: [
      "Standard production cells",
      "Buy commodity inputs",
      "Materials processing",
    ],
  },
  {
    slug: "materials",
    name: "Materials",
    tier: "LONG-TERM",
    summary: "Chosen by what other ME branches are blocked on.",
    threads: [
      "Semiconductors",
      "Metamaterials for optics",
      "Composites for robotics and space",
    ],
  },
  {
    slug: "medicine-biotech",
    name: "Medicine & Biotech",
    tier: "VERY LONG-TERM",
    summary: "Prosthetics, augmentation and longevity, sharing sensing work with wearables.",
    threads: ["Prosthetics and augmentation", "Longevity", "Diagnostics and synthetic biology"],
  },
  {
    slug: "transportation",
    name: "Transportation",
    tier: "VERY LONG-TERM",
    summary: "Autonomous systems, aerospace, high speed transit and logistics.",
    threads: ["Autonomy shared with robotics", "Aerospace and transit", "Logistics as a system"],
  },
  {
    slug: "frontier",
    name: "Frontier Research",
    tier: "VERY LONG-TERM",
    summary: "Speculative physics, propulsion and spacetime. High risk, and labelled as such.",
    threads: ["Advanced propulsion", "Spacetime and gravitation", "Failing honestly, not quietly"],
  },
];
