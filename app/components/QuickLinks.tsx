// components/QuickLinks.tsx
'use client';

import { Card } from "@heroui/react";
import { SiGo, SiPython, SiJavascript, SiReact, SiDocker } from "react-icons/si";

export function QuickLinks() {
  const links = [
    { icon: SiGo, label: "Go" },
    { icon: SiPython, label: "Python" },
    { icon: SiJavascript, label: "JS" },
    { icon: SiReact, label: "React" }
  ];

  return (
    <Card className="w-[340px] mt-4 bg-[#004242]/20 backdrop-blur-sm">
      <div className="p-4 flex justify-between">
        {links.map((link, i) => (
          <div 
            key={i}
            className="flex flex-col items-center gap-1 cursor-pointer text-[#004242] hover:text-[#ffffff] transition-colors"
          >
            <link.icon size={24} />
            <span className="text-xs">{link.label}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
