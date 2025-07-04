"use client";
import { Listbox, ListboxItem } from "@heroui/listbox";
import { MyIcon } from "@/components/home/icons";
import { SiGithub } from "react-icons/si";
import { Link } from "@heroui/link"; // <-- Asegúrate de importar Link

import { siteConfig } from "@/config/site";

export default function MyListBox() {
  return (
    <div className="flex flex-col gap-4">
      <Listbox aria-label="Listbox Variants" color="default" variant="faded">
        {siteConfig.links.map((item) => (
          <ListboxItem key={item.label}>
            <Link
              isExternal={item.isExternal}
              href={item.href}
              color="foreground"
              className="w-full flex items-center gap-3 "
            >
              {/* 4. Ponemos el icono y el label DENTRO del Link */}
              <MyIcon name={item.icon} className="text-default-500" />
              <span>{item.label}</span>
            </Link>
          </ListboxItem>
        ))}
        <ListboxItem key="GitHub">
          <Link
            isExternal
            href="https://github.com/hamilton-dev/aprendiendo_react_nextjs"
            color="foreground"
            className="w-full flex items-center gap-3 "
          >
            <SiGithub className="text-default-500" />
            <span>GitHub</span>
          </Link>
        </ListboxItem>
      </Listbox>
    </div>
  );
}
