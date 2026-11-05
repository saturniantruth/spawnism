import React from "react";
import { NavLink } from "react-router-dom";
import { navGroups } from "@/content/nav";
import { cn } from "@/lib/utils";

export default function SidebarNav({ onNavigate }) {
  return (
    <nav aria-label="Archive sections" className="space-y-7">
      {navGroups.map((group) => (
        <div key={group.title}>
          <p className="text-[0.63rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {group.title}
          </p>
          <ul className="mt-2.5 space-y-0.5">
            {group.items.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={onNavigate}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    cn(
                      "block border-l-2 py-1.5 pl-3 text-[0.9rem] leading-snug transition-colors",
                      isActive
                        ? "border-primary bg-secondary/70 font-medium text-primary"
                        : "border-transparent text-foreground/70 hover:border-border hover:bg-secondary/40 hover:text-foreground"
                    )
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}