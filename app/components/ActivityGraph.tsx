// components/ActivityGraph.tsx
'use client';

import { Card } from "@heroui/react";
import { useEffect, useState } from "react";

export function ActivityGraph() {
  const [cells, setCells] = useState<boolean[][]>([]);
  
  useEffect(() => {
    // Генерируем паттерн только на клиенте
    const newCells = Array(28).fill(null).map(() => 
      Array(4).fill(null).map(() => Math.random() > 0.5)
    );
    setCells(newCells);
  }, []);

  return (
    <Card className="w-[340px] h-[120px] mt-4 bg-[#004242]/20 backdrop-blur-sm p-4">
      <div className="grid grid-cols-7 gap-1 h-full">
        {cells.map((column, i) => (
          <div key={i} className="grid grid-rows-4 gap-1">
            {column.map((isActive, j) => (
              <div
                key={j}
                className={`rounded-sm ${
                  isActive ? 'bg-[#00ffff]/20' : 'bg-[#004242]/40'
                }`}
              />
            ))}
          </div>
        ))}
      </div>
    </Card>
  );
}
