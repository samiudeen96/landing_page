import door from "../../public/products/door.svg";
import windows from "../../public/products/windows.svg";
import partitions from "../../public/products/partitions.svg";
import pergolas from "../../public/products/pergolas.svg";
import bullet from "../../public/products/bullet.svg";
import curtains from "../../public/products/curtains.svg";
import modern from "../../public/products/modern.svg";
import integration from "../../public/products/integration.svg";
import modularity from "../../public/products/modularity.svg";

import interiorfitout from "../../public/services/interiorfitout.svg";
import interiordesign from "../../public/services/interiordesign.svg";
import architecturedesign from "../../public/services/architecturedesign.svg";

interface Menu {
  label: string;
  href: string;
}

export const menu: Menu[] = [
  {
    label: "PRODUCTS",
    href: "",
  },
  {
    label: "PROJECTS",
    href: "",
  },
  {
    label: "SERVICES",
    href: "",
  },
  {
    label: "ABOUT",
    href: "",
  },
  {
    label: "CONTACT",
    href: "",
  },
  {
    label: "NEWS",
    href: "",
  },
];

export interface ProductProps {
  img: string;
  label: string;
}

export const products: ProductProps[] = [
  {
    img: door,
    label: "DOORS",
  },
  {
    img: windows,
    label: "WINDOWS",
  },
  {
    img: partitions,
    label: "PARTITIONS",
  },
  {
    img: pergolas,
    label: "PERGOLAS",
  },
  {
    img: bullet,
    label: " BULLET RESISTANT WINDOWS",
  },
  {
    img: curtains,
    label: " CURTAIN WALLS & FACADES",
  },
];

export const otherProducts: ProductProps[] = [
  {
    img: modern,
    label: "MODERN PROFILES",
  },
  {
    img: integration,
    label: "INTEGRATION",
  },
  {
    img: modularity,
    label: "MODULARITY",
  },
];

export const otherServices: ProductProps[] = [
  {
    img: interiorfitout,
    label: "INTERIOR FIT OUT",
  },
  {
    img: interiordesign,
    label: "INTERIOR DESIGN",
  },
  {
    img: architecturedesign,
    label: "ARCHITECTURE DESIGN",
  },
];

export interface TextProps {
  title: string;
  content: string;
}

export const about: TextProps[] = [
  {
    title: "COMPLIMENRATY INSTALLATION",
    content:
      "We offer complimentary professional installation by our in-house technicians to ensure flawless execution on every project.",
  },
  {
    title: "MADE-TO-MEASURE ARCHITECTURE",
    content:
      "Every system is precisely fabricated to its environment. No gaps, no compromises—only bespoke precision.",
  },
  {
    title: "PATENED DESIGNS",
    content:
      "Every system is precisely fabricated to its environment. No gaps, no compromises—only bespoke precision.",
  },
];

export interface FooterItem {
  title: string;
  address?: string;
  email?: string;
  contact?: string;
}

export interface FooterProps {
  heading: string;
  children: FooterItem[];
}

// Now footerData is an array of FooterProps
export const footerData: FooterProps[] = [
  {
    heading: "OFFICE",
    children: [
      {
        title: "DUBAI, UAE",
        address: "23, ST 34, AL QUSAIS 5",
        // email: "info@example.com",
        contact: "+971 123 4567",
      },
      {
        title: "RIYADH, SAUDI ARABIA",
        address: "LEVEL 6, GATE D, AL AKARIA PLAZA, RIYADH SAUDI ARABIA",
        // email: "branch@example.com",
        contact: "+971 987 6543",
      },
      {
        title: "NAIROBI, KENYA",
        address:
          "OFFICE 2504, BRITAM TOWER, HOSPITAL HILL ROAD, UPPERHILL, KENYA",
        // email: "branch@example.com",
        contact: "+971 987 6543",
      },
    ],
  },
  {
    heading: "BUSINESS",
    children: [
      {
        title: " INQUIRIES",
        email: "INFO@RAYFITOUT.COM",
      },
      {
        title: "CAREER",
        email: "CAREER@RAYFITOUT.COM",
      },
      {
        title: "SUPPLIERS",
        email: "PROCUREMENT@RAYFITOUT.COM",
      },
    ],
  },
];

export const tab: TextProps[] = [
  {
    title: "What is interior fit out? (h3)",
    content:
      " Interior fit out is the process of modifying a bare shell of a structure into a functional space. This typically involves: installing partition walls, flooring, ceiling, fittings and furniture fixtures.",
  },
  {
    title: "What do interior fit out companies in Dubai do?",
    content:
      " Interior fit out is the process of modifying a bare shell of a structure into a functional space. This typically involves: installing partition walls, flooring, ceiling, fittings and furniture fixtures.",
  },
  {
    title: "How long does an interior fit out typically take?",
    content:
      " Interior fit out is the process of modifying a bare shell of a structure into a functional space. This typically involves: installing partition walls, flooring, ceiling, fittings and furniture fixtures.",
  },
    {
    title: "What is the scope of the interior fit out?",
    content:
      " Interior fit out is the process of modifying a bare shell of a structure into a functional space. This typically involves: installing partition walls, flooring, ceiling, fittings and furniture fixtures.",
  },  {
    title: "How much does an interior fit out cost?",
    content:
      " Interior fit out is the process of modifying a bare shell of a structure into a functional space. This typically involves: installing partition walls, flooring, ceiling, fittings and furniture fixtures.",
  },  {
    title: " What countries does Rayfitout operate in?",
    content:
      " Interior fit out is the process of modifying a bare shell of a structure into a functional space. This typically involves: installing partition walls, flooring, ceiling, fittings and furniture fixtures.",
  },

];
