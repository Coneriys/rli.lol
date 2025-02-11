// components/QuickLinks.tsx
'use client';

import { Card } from "@heroui/react";
import { FaGolang, FaPython, FaJavascript, FaReact } from "react-icons/fa";

export function QuickLinks() {
  const links = [
    { icon: FaGolang, label: "Go", href: "go.dev" },
    { icon: FaPython, label: "Python", href: "python.org" },
    { icon: FaJavascript, label: "JS", href: "developer.mozilla.org" },
    { icon: FaReact, label: "React", href: "react.dev" }
  ];

  return (
    <Card className="w-[340px] mt-4 bg-[#004242]/20 backdrop-blur-sm">
      <div className="p-4 flex justify-between">
        {links.map((link, i) => (
          <div 
            key={i}
            className="flex flex-col items-center gap-1 cursor-pointer text-[#004242] hover:text-[#ffffff] transition-colors"
            onClick={() => window.open(`https://${link.href}`, "_blank")}
          >
            <link.icon size={24} />
            <span className="text-xs">{link.label}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
