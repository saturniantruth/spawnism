import React from "react";
import { provenance } from "@/content/provenance";
import { cn } from "@/lib/utils";

export default function ProvenanceBadge({ status, className }) {
  const meta = provenance[status] || provenance.community;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-[0.14em]",
        meta.className,
        className
      )}
      title={meta.description}
    >
      <span className={cn("h-1.5 w-1.5 shrink-0 rounded-full", meta.dotClass)} />
      {meta.label}
    </span>
  );
}