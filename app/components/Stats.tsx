// components/Stats.tsx
'use client';

import { Card, Progress } from "@heroui/react";

export function Stats() {
  const skills = [
    { name: "Go", level: 10 },
    { name: "Python", level: 28 },
    { name: "JavaScript", level: 43 }
  ];

  return (
    <Card className="w-[340px] mt-4 bg-[#004242]/20 backdrop-blur-sm">
      <div className="p-4 space-y-3">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-1.5">
            <div className="flex justify-between text-sm">
              <span className="text-white">{skill.name}</span>
              <span className="text-[#00ffff]/70">{skill.level}%</span>
            </div>
            <Progress 
              value={skill.level}
              className="h-1.5"
              color="default"
            />
          </div>
        ))}
      </div>
    </Card>
  );
}
