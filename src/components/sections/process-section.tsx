"use client";

import { useState, useRef, useSyncExternalStore } from "react";
import { Button } from "@/components/ui/button";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import {
  Search,
  Target,
  Database,
  Users,
  GitBranch,
  Milestone,
  Clock,
  Palette,
  Layout,
  Terminal,
  Cpu,
  ShieldCheck,
  Lock,
  Rocket,
  Globe,
  Radio,
  Zap,
  TrendingUp,
  RefreshCw,
  ArrowRight,
  FileText,
  Layers,
  CheckCircle2,
  ListOrdered,
  Calendar,
  Smartphone,
  Eye,
  Boxes,
  Sparkles,
  Code2,
  Server,
  GitMerge,
  Cloud,
  Bug,
  Gauge,
  Activity,
  Shield,
  BarChart3,
  MessageSquare,
  Route,
} from "lucide-react";

import { useTranslation } from "@/contexts/language-context";
import { FoldingText } from "@/components/ui/folding-text";

function subscribeToDesktop(callback: () => void) {
  const mql = window.matchMedia("(min-width: 1024px)");
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getDesktopSnapshot() {
  return window.matchMedia("(min-width: 1024px)").matches;
}

function getDesktopServerSnapshot() {
  return true;
}

interface StepConfig {
  key: string;
  number: string;
  titleKey: string;
  tagline: string;
}

const stepsData: StepConfig[] = [
  {
    key: "discover",
    number: "01",
    titleKey: "discover",
    tagline: "Uncovering the real business challenge & user requirements",
  },
  {
    key: "plan",
    number: "02",
    titleKey: "plan",
    tagline: "Architecting the technical roadmap & prioritised backlog",
  },
  {
    key: "design",
    number: "03",
    titleKey: "design",
    tagline: "Crafting intuitive user experiences & robust design systems",
  },
  {
    key: "develop",
    number: "04",
    titleKey: "develop",
    tagline: "Engineering maintainable, scalable, and high-performance software",
  },
  {
    key: "test",
    number: "05",
    titleKey: "test",
    tagline: "Comprehensive automated verification & real-world reliability",
  },
  {
    key: "launch",
    number: "06",
    titleKey: "launch",
    tagline: "Structured production release with zero downtime & monitoring",
  },
  {
    key: "improve",
    number: "07",
    titleKey: "improve",
    tagline: "Iterative optimisations driven by live user data & business goals",
  },
];

/* -------------------------------------------------------------------------- */
/* Distinct Bespoke Visual Figures for Each Phase                             */
/* -------------------------------------------------------------------------- */

// Phase 01: Discover Figure - Radial Hub & Spoke
function DiscoverFigure() {
  return (
    <div className="hww-diagram-container" aria-hidden="true">
      <svg
        className="hww-diagram-svg"
        viewBox="0 0 420 270"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="hww-grad-discover" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0966fa" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#00d2ff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0966fa" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <path d="M 68 50 C 68 85, 210 85, 210 108" stroke="url(#hww-grad-discover)" strokeWidth="1.5" strokeDasharray="4 4" className="hww-flow-path" />
        <path d="M 210 50 L 210 108" stroke="url(#hww-grad-discover)" strokeWidth="1.5" strokeDasharray="4 4" className="hww-flow-path" />
        <path d="M 352 50 C 352 85, 210 85, 210 108" stroke="url(#hww-grad-discover)" strokeWidth="1.5" strokeDasharray="4 4" className="hww-flow-path" />
        <path d="M 210 162 C 210 185, 68 185, 68 220" stroke="url(#hww-grad-discover)" strokeWidth="1.5" strokeDasharray="4 4" className="hww-flow-path" />
        <path d="M 210 162 L 210 220" stroke="url(#hww-grad-discover)" strokeWidth="1.5" strokeDasharray="4 4" className="hww-flow-path" />
        <path d="M 210 162 C 210 185, 352 185, 352 220" stroke="url(#hww-grad-discover)" strokeWidth="1.5" strokeDasharray="4 4" className="hww-flow-path" />
      </svg>

      <div className="hww-diagram-row hww-diagram-row-top">
        <div className="hww-node-item">
          <span className="hww-node-label">User Needs</span>
          <div className="hww-node-circle"><Users className="hww-node-icon" /></div>
        </div>
        <div className="hww-node-item">
          <span className="hww-node-label">Business Goals</span>
          <div className="hww-node-circle"><Target className="hww-node-icon" /></div>
        </div>
        <div className="hww-node-item">
          <span className="hww-node-label">Market Context</span>
          <div className="hww-node-circle"><Globe className="hww-node-icon" /></div>
        </div>
      </div>

      <div className="hww-diagram-center">
        <div className="hww-hub-card">
          <div className="hww-hub-glow" />
          <div className="hww-hub-badge"><Search className="hww-hub-icon" /></div>
          <div className="hww-hub-info">
            <span className="hww-hub-label">Discovery Hub</span>
            <span className="hww-hub-sub">Scope &amp; Insights</span>
          </div>
        </div>
      </div>

      <div className="hww-diagram-row hww-diagram-row-bottom">
        <div className="hww-node-item">
          <div className="hww-node-circle hww-node-circle-output"><FileText className="hww-node-icon" /></div>
          <span className="hww-node-label">Problem Scope</span>
        </div>
        <div className="hww-node-item">
          <div className="hww-node-circle hww-node-circle-output"><Layers className="hww-node-icon" /></div>
          <span className="hww-node-label">System Blueprint</span>
        </div>
        <div className="hww-node-item">
          <div className="hww-node-circle hww-node-circle-output"><CheckCircle2 className="hww-node-icon" /></div>
          <span className="hww-node-label">Agreed Goals</span>
        </div>
      </div>
    </div>
  );
}

// Phase 02: Plan Figure - Sprint Roadmap & Milestones
function PlanFigure() {
  return (
    <div className="hww-diagram-container" aria-hidden="true">
      <svg
        className="hww-diagram-svg"
        viewBox="0 0 420 270"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="hww-grad-plan" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0966fa" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#00d2ff" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <path d="M 68 50 C 68 85, 140 108, 210 108" stroke="url(#hww-grad-plan)" strokeWidth="1.5" strokeDasharray="4 4" className="hww-flow-path" />
        <path d="M 352 50 C 352 85, 280 108, 210 108" stroke="url(#hww-grad-plan)" strokeWidth="1.5" strokeDasharray="4 4" className="hww-flow-path" />
        <path d="M 210 162 L 68 220" stroke="url(#hww-grad-plan)" strokeWidth="1.5" strokeDasharray="4 4" className="hww-flow-path" />
        <path d="M 210 162 L 210 220" stroke="url(#hww-grad-plan)" strokeWidth="1.5" strokeDasharray="4 4" className="hww-flow-path" />
        <path d="M 210 162 L 352 220" stroke="url(#hww-grad-plan)" strokeWidth="1.5" strokeDasharray="4 4" className="hww-flow-path" />
      </svg>

      <div className="hww-diagram-row hww-diagram-row-top">
        <div className="hww-node-item">
          <span className="hww-node-label">User Stories</span>
          <div className="hww-node-circle"><ListOrdered className="hww-node-icon" /></div>
        </div>
        <div className="hww-node-item">
          <span className="hww-node-label">Milestones</span>
          <div className="hww-node-circle"><Milestone className="hww-node-icon" /></div>
        </div>
        <div className="hww-node-item">
          <span className="hww-node-label">Tech Feasibility</span>
          <div className="hww-node-circle"><Cpu className="hww-node-icon" /></div>
        </div>
      </div>

      <div className="hww-diagram-center">
        <div className="hww-hub-card">
          <div className="hww-hub-glow" />
          <div className="hww-hub-badge"><Route className="hww-hub-icon" /></div>
          <div className="hww-hub-info">
            <span className="hww-hub-label">Sprint Roadmap</span>
            <span className="hww-hub-sub">Backlog &amp; Scope</span>
          </div>
        </div>
      </div>

      <div className="hww-diagram-row hww-diagram-row-bottom">
        <div className="hww-node-item">
          <div className="hww-node-circle hww-node-circle-output"><GitBranch className="hww-node-icon" /></div>
          <span className="hww-node-label">Sprint Milestones</span>
        </div>
        <div className="hww-node-item">
          <div className="hww-node-circle hww-node-circle-output"><Clock className="hww-node-icon" /></div>
          <span className="hww-node-label">Sprint Velocity</span>
        </div>
        <div className="hww-node-item">
          <div className="hww-node-circle hww-node-circle-output"><Calendar className="hww-node-icon" /></div>
          <span className="hww-node-label">Demo Cadence</span>
        </div>
      </div>
    </div>
  );
}

// Phase 03: Design Figure - UI Specs & Design System Canvas
function DesignFigure() {
  return (
    <div className="hww-diagram-container" aria-hidden="true">
      <svg
        className="hww-diagram-svg"
        viewBox="0 0 420 270"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="hww-grad-design" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00d2ff" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#0966fa" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <path d="M 68 50 V 108 H 210" stroke="url(#hww-grad-design)" strokeWidth="1.5" strokeDasharray="4 4" className="hww-flow-path" />
        <path d="M 352 50 V 108 H 210" stroke="url(#hww-grad-design)" strokeWidth="1.5" strokeDasharray="4 4" className="hww-flow-path" />
        <path d="M 210 162 H 68 V 220" stroke="url(#hww-grad-design)" strokeWidth="1.5" strokeDasharray="4 4" className="hww-flow-path" />
        <path d="M 210 162 V 220" stroke="url(#hww-grad-design)" strokeWidth="1.5" strokeDasharray="4 4" className="hww-flow-path" />
        <path d="M 210 162 H 352 V 220" stroke="url(#hww-grad-design)" strokeWidth="1.5" strokeDasharray="4 4" className="hww-flow-path" />
      </svg>

      <div className="hww-diagram-row hww-diagram-row-top justify-around px-8">
        <div className="hww-node-item">
          <span className="hww-node-label">Design Tokens</span>
          <div className="hww-node-circle"><Palette className="hww-node-icon" /></div>
        </div>
        <div className="hww-node-item">
          <span className="hww-node-label">Atomic Lib</span>
          <div className="hww-node-circle"><Boxes className="hww-node-icon" /></div>
        </div>
      </div>

      <div className="hww-diagram-center">
        <div className="hww-hub-card">
          <div className="hww-hub-glow" />
          <div className="hww-hub-badge"><Layout className="hww-hub-icon" /></div>
          <div className="hww-hub-info">
            <span className="hww-hub-label">Design Engine</span>
            <span className="hww-hub-sub">Tokens &amp; UI Specs</span>
          </div>
        </div>
      </div>

      <div className="hww-diagram-row hww-diagram-row-bottom">
        <div className="hww-node-item">
          <div className="hww-node-circle hww-node-circle-output"><Smartphone className="hww-node-icon" /></div>
          <span className="hww-node-label">Prototypes</span>
        </div>
        <div className="hww-node-item">
          <div className="hww-node-circle hww-node-circle-output"><Eye className="hww-node-icon" /></div>
          <span className="hww-node-label">WCAG AA Standard</span>
        </div>
        <div className="hww-node-item">
          <div className="hww-node-circle hww-node-circle-output"><Sparkles className="hww-node-icon" /></div>
          <span className="hww-node-label">Motion Polish</span>
        </div>
      </div>
    </div>
  );
}

// Phase 04: Develop Figure - Multi-Tier Engineering Topology
function DevelopFigure() {
  return (
    <div className="hww-diagram-container" aria-hidden="true">
      <svg
        className="hww-diagram-svg"
        viewBox="0 0 420 270"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="hww-grad-dev" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#00d2ff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0966fa" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <path d="M 105 50 C 105 85, 210 85, 210 108" stroke="url(#hww-grad-dev)" strokeWidth="1.5" strokeDasharray="4 4" className="hww-flow-path" />
        <path d="M 315 50 C 315 85, 210 85, 210 108" stroke="url(#hww-grad-dev)" strokeWidth="1.5" strokeDasharray="4 4" className="hww-flow-path" />
        <path d="M 210 162 C 210 185, 68 185, 68 220" stroke="url(#hww-grad-dev)" strokeWidth="1.5" strokeDasharray="4 4" className="hww-flow-path" />
        <path d="M 210 162 L 210 220" stroke="url(#hww-grad-dev)" strokeWidth="1.5" strokeDasharray="4 4" className="hww-flow-path" />
        <path d="M 210 162 C 210 185, 352 185, 352 220" stroke="url(#hww-grad-dev)" strokeWidth="1.5" strokeDasharray="4 4" className="hww-flow-path" />
      </svg>

      <div className="hww-diagram-row hww-diagram-row-top justify-around px-8">
        <div className="hww-node-item">
          <span className="hww-node-label">Clean Code</span>
          <div className="hww-node-circle"><Code2 className="hww-node-icon" /></div>
        </div>
        <div className="hww-node-item">
          <span className="hww-node-label">APIs &amp; Microservices</span>
          <div className="hww-node-circle"><Server className="hww-node-icon" /></div>
        </div>
      </div>

      <div className="hww-diagram-center">
        <div className="hww-hub-card">
          <div className="hww-hub-glow" />
          <div className="hww-hub-badge"><Terminal className="hww-hub-icon" /></div>
          <div className="hww-hub-info">
            <span className="hww-hub-label">Agile Engine</span>
            <span className="hww-hub-sub">Modular Sprints</span>
          </div>
        </div>
      </div>

      <div className="hww-diagram-row hww-diagram-row-bottom">
        <div className="hww-node-item">
          <div className="hww-node-circle hww-node-circle-output"><GitMerge className="hww-node-icon" /></div>
          <span className="hww-node-label">CI/CD Pipeline</span>
        </div>
        <div className="hww-node-item">
          <div className="hww-node-circle hww-node-circle-output"><Cloud className="hww-node-icon" /></div>
          <span className="hww-node-label">Working Builds</span>
        </div>
        <div className="hww-node-item">
          <div className="hww-node-circle hww-node-circle-output"><Database className="hww-node-icon" /></div>
          <span className="hww-node-label">Modular Cloud</span>
        </div>
      </div>
    </div>
  );
}

// Phase 05: Test Figure - Quality Gate & Verification Funnel
function TestFigure() {
  return (
    <div className="hww-diagram-container" aria-hidden="true">
      <svg
        className="hww-diagram-svg"
        viewBox="0 0 420 270"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="hww-grad-test" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0966fa" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#00d2ff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <path d="M 68 50 L 210 108" stroke="url(#hww-grad-test)" strokeWidth="1.5" strokeDasharray="4 4" className="hww-flow-path" />
        <path d="M 210 50 L 210 108" stroke="url(#hww-grad-test)" strokeWidth="1.5" strokeDasharray="4 4" className="hww-flow-path" />
        <path d="M 352 50 L 210 108" stroke="url(#hww-grad-test)" strokeWidth="1.5" strokeDasharray="4 4" className="hww-flow-path" />
        <path d="M 210 162 L 140 220" stroke="url(#hww-grad-test)" strokeWidth="1.5" strokeDasharray="4 4" className="hww-flow-path" />
        <path d="M 210 162 L 280 220" stroke="url(#hww-grad-test)" strokeWidth="1.5" strokeDasharray="4 4" className="hww-flow-path" />
      </svg>

      <div className="hww-diagram-row hww-diagram-row-top">
        <div className="hww-node-item">
          <span className="hww-node-label">Edge Cases</span>
          <div className="hww-node-circle"><Bug className="hww-node-icon" /></div>
        </div>
        <div className="hww-node-item">
          <span className="hww-node-label">Security Audit</span>
          <div className="hww-node-circle"><Lock className="hww-node-icon" /></div>
        </div>
        <div className="hww-node-item">
          <span className="hww-node-label">Speed Gauges</span>
          <div className="hww-node-circle"><Gauge className="hww-node-icon" /></div>
        </div>
      </div>

      <div className="hww-diagram-center">
        <div className="hww-hub-card">
          <div className="hww-hub-glow" />
          <div className="hww-hub-badge">
            <ShieldCheck className="hww-hub-icon" />
          </div>
          <div className="hww-hub-info">
            <span className="hww-hub-label">Quality Gate</span>
            <span className="hww-hub-sub">Zero Regressions</span>
          </div>
        </div>
      </div>

      <div className="hww-diagram-row hww-diagram-row-bottom justify-around px-12">
        <div className="hww-node-item">
          <div className="hww-node-circle hww-node-circle-output"><Shield className="hww-node-icon" /></div>
          <span className="hww-node-label">Security Pass</span>
        </div>
        <div className="hww-node-item">
          <div className="hww-node-circle hww-node-circle-output"><Activity className="hww-node-icon" /></div>
          <span className="hww-node-label">99.9% Verified</span>
        </div>
      </div>
    </div>
  );
}

// Phase 06: Launch Figure - Production Infrastructure & Blue-Green Rollout
function LaunchFigure() {
  return (
    <div className="hww-diagram-container" aria-hidden="true">
      <svg
        className="hww-diagram-svg"
        viewBox="0 0 420 270"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="hww-grad-launch" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0966fa" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#00d2ff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <path d="M 68 50 C 68 85, 210 85, 210 108" stroke="url(#hww-grad-launch)" strokeWidth="1.5" strokeDasharray="4 4" className="hww-flow-path" />
        <path d="M 210 50 L 210 108" stroke="url(#hww-grad-launch)" strokeWidth="1.5" strokeDasharray="4 4" className="hww-flow-path" />
        <path d="M 352 50 C 352 85, 210 85, 210 108" stroke="url(#hww-grad-launch)" strokeWidth="1.5" strokeDasharray="4 4" className="hww-flow-path" />
        <path d="M 210 162 C 210 185, 68 185, 68 220" stroke="url(#hww-grad-launch)" strokeWidth="1.5" strokeDasharray="4 4" className="hww-flow-path" />
        <path d="M 210 162 L 210 220" stroke="url(#hww-grad-launch)" strokeWidth="1.5" strokeDasharray="4 4" className="hww-flow-path" />
        <path d="M 210 162 C 210 185, 352 185, 352 220" stroke="url(#hww-grad-launch)" strokeWidth="1.5" strokeDasharray="4 4" className="hww-flow-path" />
      </svg>

      <div className="hww-diagram-row hww-diagram-row-top">
        <div className="hww-node-item">
          <span className="hww-node-label">Prod Setup</span>
          <div className="hww-node-circle"><Server className="hww-node-icon" /></div>
        </div>
        <div className="hww-node-item">
          <span className="hww-node-label">DNS &amp; SSL</span>
          <div className="hww-node-circle"><Globe className="hww-node-icon" /></div>
        </div>
        <div className="hww-node-item">
          <span className="hww-node-label">Telemetry</span>
          <div className="hww-node-circle"><Radio className="hww-node-icon" /></div>
        </div>
      </div>

      <div className="hww-diagram-center">
        <div className="hww-hub-card">
          <div className="hww-hub-glow" />
          <div className="hww-hub-badge"><Rocket className="hww-hub-icon" /></div>
          <div className="hww-hub-info">
            <span className="hww-hub-label">Release Pipeline</span>
            <span className="hww-hub-sub">Production Rollout</span>
          </div>
        </div>
      </div>

      <div className="hww-diagram-row hww-diagram-row-bottom">
        <div className="hww-node-item">
          <div className="hww-node-circle hww-node-circle-output"><Zap className="hww-node-icon" /></div>
          <span className="hww-node-label">Live Platform</span>
        </div>
        <div className="hww-node-item">
          <div className="hww-node-circle hww-node-circle-output"><TrendingUp className="hww-node-icon" /></div>
          <span className="hww-node-label">User Traffic</span>
        </div>
        <div className="hww-node-item">
          <div className="hww-node-circle hww-node-circle-output"><CheckCircle2 className="hww-node-icon" /></div>
          <span className="hww-node-label">Smooth Rollout</span>
        </div>
      </div>
    </div>
  );
}

// Phase 07: Improve Figure - Continuous Closed-Loop Flywheel
function ImproveFigure() {
  return (
    <div className="hww-diagram-container" aria-hidden="true">
      <svg
        className="hww-diagram-svg"
        viewBox="0 0 420 270"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="hww-grad-improve" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00d2ff" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#0966fa" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <ellipse cx="210" cy="135" rx="145" ry="86" stroke="url(#hww-grad-improve)" strokeWidth="1.5" strokeDasharray="4 4" className="hww-flow-path" />
        <path d="M 210 50 V 108" stroke="url(#hww-grad-improve)" strokeWidth="1.5" strokeDasharray="4 4" className="hww-flow-path" />
        <path d="M 210 162 V 220" stroke="url(#hww-grad-improve)" strokeWidth="1.5" strokeDasharray="4 4" className="hww-flow-path" />
      </svg>

      <div className="hww-diagram-row hww-diagram-row-top justify-center">
        <div className="hww-node-item">
          <span className="hww-node-label">Live Telemetry</span>
          <div className="hww-node-circle"><BarChart3 className="hww-node-icon" /></div>
        </div>
      </div>

      <div className="hww-diagram-center justify-between px-6">
        <div className="hww-node-item">
          <div className="hww-node-circle"><TrendingUp className="hww-node-icon" /></div>
          <span className="hww-node-label">Conversions</span>
        </div>

        <div className="hww-hub-card mx-2">
          <div className="hww-hub-glow" />
          <div className="hww-hub-badge"><RefreshCw className="hww-hub-icon" /></div>
          <div className="hww-hub-info">
            <span className="hww-hub-label">Growth Engine</span>
            <span className="hww-hub-sub">Data-Driven Tuning</span>
          </div>
        </div>

        <div className="hww-node-item">
          <div className="hww-node-circle"><MessageSquare className="hww-node-icon" /></div>
          <span className="hww-node-label">User Feedback</span>
        </div>
      </div>

      <div className="hww-diagram-row hww-diagram-row-bottom justify-center">
        <div className="hww-node-item">
          <div className="hww-node-circle hww-node-circle-output"><Boxes className="hww-node-icon" /></div>
          <span className="hww-node-label">Feature Backlog</span>
        </div>
      </div>
    </div>
  );
}

function PhaseVisual({ stepKey }: { stepKey: string }) {
  switch (stepKey) {
    case "discover":
      return <DiscoverFigure />;
    case "plan":
      return <PlanFigure />;
    case "design":
      return <DesignFigure />;
    case "develop":
      return <DevelopFigure />;
    case "test":
      return <TestFigure />;
    case "launch":
      return <LaunchFigure />;
    case "improve":
      return <ImproveFigure />;
    default:
      return <DiscoverFigure />;
  }
}

/* -------------------------------------------------------------------------- */
/* Background Mesh & Main Process Section Component                          */
/* -------------------------------------------------------------------------- */

function ProcessFacetedMesh() {
  return (
    <div className="hww-bg-mesh" aria-hidden="true">
      <svg
        className="hww-bg-mesh-svg"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <g stroke="rgba(9, 102, 250, 0.05)" strokeWidth="1">
          {/* Row 1 Triangles */}
          <polygon points="0,0 240,0 150,160" fill="#050811" />
          <polygon points="0,0 150,160 0,180" fill="#070b16" />
          <polygon points="240,0 480,0 380,140" fill="#080e1d" />
          <polygon points="240,0 380,140 150,160" fill="#0a1224" />
          <polygon points="480,0 720,0 610,170" fill="#060a15" />
          <polygon points="480,0 610,170 380,140" fill="#0c162c" />
          <polygon points="720,0 960,0 840,150" fill="#070c1a" />
          <polygon points="720,0 840,150 610,170" fill="#091326" />
          <polygon points="960,0 1200,0 1070,180" fill="#050914" />
          <polygon points="960,0 1070,180 840,150" fill="#0b1428" />
          <polygon points="1200,0 1440,0 1290,160" fill="#070b18" />
          <polygon points="1200,0 1290,160 1070,180" fill="#091022" />
          <polygon points="1440,0 1440,190 1290,160" fill="#040710" />

          {/* Row 2 Triangles */}
          <polygon points="0,180 150,160 220,360" fill="#080e1e" />
          <polygon points="0,180 220,360 0,380" fill="#050813" />
          <polygon points="150,160 380,140 450,340" fill="#0b1328" />
          <polygon points="150,160 450,340 220,360" fill="#070d1c" />
          <polygon points="380,140 610,170 720,390" fill="#0d1830" />
          <polygon points="380,140 720,390 450,340" fill="#070c1b" />
          <polygon points="610,170 840,150 970,350" fill="#0e1933" />
          <polygon points="610,170 970,350 720,390" fill="#091125" />
          <polygon points="840,150 1070,180 1210,380" fill="#0c152b" />
          <polygon points="840,150 1210,380 970,350" fill="#080e1f" />
          <polygon points="1070,180 1290,160 1440,360" fill="#0a1226" />
          <polygon points="1070,180 1440,360 1210,380" fill="#060a18" />
          <polygon points="1290,160 1440,190 1440,360" fill="#040711" />

          {/* Row 3 Triangles */}
          <polygon points="0,380 220,360 160,560" fill="#060916" />
          <polygon points="0,380 160,560 0,580" fill="#04060f" />
          <polygon points="220,360 450,340 390,580" fill="#091125" />
          <polygon points="220,360 390,580 160,560" fill="#070b1b" />
          <polygon points="450,340 720,390 620,550" fill="#0c172f" />
          <polygon points="450,340 620,550 390,580" fill="#080e20" />
          <polygon points="720,390 970,350 850,600" fill="#0b152d" />
          <polygon points="720,390 850,600 620,550" fill="#070d1e" />
          <polygon points="970,350 1210,380 1080,560" fill="#0a1329" />
          <polygon points="970,350 1080,560 850,600" fill="#060b1c" />
          <polygon points="1210,380 1440,360 1300,580" fill="#080e20" />
          <polygon points="1210,380 1300,580 1080,560" fill="#050916" />
          <polygon points="1440,360 1440,560 1300,580" fill="#040610" />

          {/* Row 4 Triangles */}
          <polygon points="0,580 160,560 240,900" fill="#050711" />
          <polygon points="0,580 240,900 0,900" fill="#03050c" />
          <polygon points="160,560 390,580 480,900" fill="#070b1a" />
          <polygon points="160,560 480,900 240,900" fill="#050813" />
          <polygon points="390,580 620,550 720,900" fill="#090f22" />
          <polygon points="390,580 720,900 480,900" fill="#060917" />
          <polygon points="620,550 850,600 960,900" fill="#080d1e" />
          <polygon points="620,550 960,900 720,900" fill="#050814" />
          <polygon points="850,600 1080,560 1200,900" fill="#070b19" />
          <polygon points="850,600 1200,900 960,900" fill="#040712" />
          <polygon points="1080,560 1300,580 1440,900" fill="#060917" />
          <polygon points="1080,560 1440,900 1200,900" fill="#040610" />
          <polygon points="1300,580 1440,560 1440,900" fill="#03050d" />
        </g>
      </svg>
      {/* Subtle radial atmospheric glow */}
      <div className="hww-mesh-glow" />
    </div>
  );
}

export function ProcessSection() {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();
  const isDesktop = useSyncExternalStore(
    subscribeToDesktop,
    getDesktopSnapshot,
    getDesktopServerSnapshot,
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  // Scroll tracking across the section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!isDesktop || reduceMotion) return;
    const count = stepsData.length;
    const index = Math.min(count - 1, Math.max(0, Math.floor(latest * count)));
    if (index !== activeStep) {
      setActiveStep(index);
    }
  });

  const handleSelectStep = (index: number) => {
    setActiveStep(index);
    if (!isDesktop || !containerRef.current) return;

    // Smoothly scroll container to step offset
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const startY = rect.top + scrollTop;
    const totalScrollableHeight =
      containerRef.current.offsetHeight - window.innerHeight;
    const targetY = startY + (index / (stepsData.length - 1)) * totalScrollableHeight;

    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });
  };

  const currentStep = stepsData[activeStep] ?? stepsData[0];
  const translatedTitle = t(`process.steps.${currentStep.titleKey}.title`) || currentStep.key;
  const translatedDesc =
    t(`process.steps.${currentStep.titleKey}.description`) ||
    "We work closely with your team in short, collaborative sprints to deliver reliable digital products.";

  const highlightWords =
    (t("process.highlightWords") as unknown as string[]) || ["we", "work"];

  return (
    <section
      ref={containerRef}
      className="how-we-work-section"
      id="how-we-work"
      aria-labelledby="how-we-work-heading"
    >
      <div className="how-we-work-sticky-viewport">
        {/* Geometric Faceted Tech Mesh Background */}
        <ProcessFacetedMesh />

        <div className="container how-we-work-container">
          {/* Section Header */}
          <div className="how-we-work-header">
            <FoldingText
              as="h2"
              id="how-we-work-heading"
              text={t("process.title") || "How we work"}
              highlightWords={highlightWords}
              className="how-we-work-title"
            />
            <p className="how-we-work-sub">
              {t("process.description") ||
                "Discover how we turn complex business challenges into reliable software, high-performance web and mobile platforms, and measurable digital growth."}
            </p>
          </div>

          {/* Main 2-Column Layout */}
          <div className="how-we-work-layout">
            {/* Left Column: Row / Table Step List */}
            <nav
              className="how-we-work-tabs"
              aria-label="Process steps navigation"
            >
              {stepsData.map((step, index) => {
                const isActive = activeStep === index;
                const stepLabel =
                  t(`process.steps.${step.titleKey}.title`) || step.key;

                return (
                  <button
                    key={step.key}
                    type="button"
                    onClick={() => handleSelectStep(index)}
                    className={`hww-tab-row ${isActive ? "hww-tab-active" : ""}`}
                    aria-selected={isActive}
                    role="tab"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="hww-active-bg"
                        className="hww-tab-active-pill"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 32,
                        }}
                      />
                    )}

                    <div className="hww-tab-left">
                      <span className="hww-tab-num">{step.number}</span>
                      <span className="hww-tab-title">{stepLabel}</span>
                    </div>

                    <div className="hww-tab-right" aria-hidden="true">
                      <ArrowRight
                        className={`hww-tab-arrow ${
                          isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </nav>

            {/* Right Column: Active Step Content + Bespoke Figure Showcase */}
            <div className="how-we-work-content-card">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep.key}
                  className="how-we-work-card-inner"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Left sub-column: Text and CTAs */}
                  <div className="hww-content-copy">
                    <div className="hww-step-badge">
                      <span>Phase {currentStep.number}</span>
                      <span className="hww-badge-dot" />
                      <span className="hww-badge-title">{translatedTitle}</span>
                    </div>

                    <h3 className="hww-headline">
                      {currentStep.tagline}
                    </h3>

                    <p className="hww-description">{translatedDesc}</p>

                    {/* Project Proper Button Component */}
                    <div className="hww-actions">
                      <Button
                        href="/contact"
                        variant="glowing"
                        size="default"
                      >
                        <span>Discuss this stage</span>
                        <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover/button:translate-x-1" />
                      </Button>
                    </div>
                  </div>

                  {/* Right sub-column: Distinct Bespoke Figure */}
                  <div className="hww-content-diagram">
                    <PhaseVisual stepKey={currentStep.key} />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
