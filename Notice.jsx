import React from "react";
import { Info } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Notice({ title, children, className }) {
  return (
    <div className={cn("flex gap-3 border-l-2 border-primary/40 bg-secondary/70 px-4 py-3.5 sm:px-5", className)}>
      <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary/70" aria-hidden="true" />
      <div className="text-[0.9rem] leading-relaxed text-foreground/80">
        {title ? <p className="mb-1 font-semibold text-foreground">{title}</p> : null}
        <div>{children}</div>
      </div>
    </div>
  );
}