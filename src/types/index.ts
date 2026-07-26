export interface NavLink {
  label: string;
  href: string;
}

export interface PortfolioDivision {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  overview: string;
  expertise: string[];
  research: string[];
  capabilities: string[];
  currentWork: string;
  futureRoadmap: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  icon: string;
  overview: string;
  problem: string;
  technology: string;
  features: string[];
  developmentStatus: string;
  futureVision: string;
  isComingSoon?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  icon: string;
  description: string;
  highlights: string[];
}

export interface ResearchArea {
  id: string;
  title: string;
  icon: string;
  description: string;
  focus: string[];
}
