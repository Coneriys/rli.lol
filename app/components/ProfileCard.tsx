// components/ProfileCard.tsx
'use client';

import { Card, CardBody, Avatar, Button } from "@heroui/react";
import { SiTelegram, SiGithub, SiRoblox } from "react-icons/si";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";

export default function ProfileCard() {
  return (
    <Card 
      className="min-w-[340px] max-w-[340px] bg-[#004242]/20 backdrop-blur-sm border-[#004242]"
      isBlurred
    >
      <CardBody className="flex flex-col items-center gap-4 p-6">
        <Avatar
          isBordered
          src="https://cdn.coneriys.com/cat.png"
          className="w-24 h-24"
          color="primary"
        />
        
        <div className="flex flex-col items-center gap-1">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold text-white">rli</h2>
            <TbRosetteDiscountCheckFilled className="text-blue-400"/>
          </div>
          
          <p className="text-small text-default-500">
            Learning Go, Python, JavaScript
          </p>
        </div>

        <div className="flex gap-3">
          {[
            { icon: SiTelegram, href: "https://t.me/@gpslocator" },
            { icon: SiGithub, href: "https://github.com/rligram" }, 
            { icon: SiRoblox, href: "https://www.roblox.com/users/18635058/profile" }
          ].map((item, index) => (
            <Button
              key={index}
              isIconOnly
              variant="light" 
              className="text-[#004242] hover:text-white hover:bg-[#004242]"
              onPress={() => window.open(item.href, "_blank")}
            >
              <item.icon size={20} />
            </Button>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}
