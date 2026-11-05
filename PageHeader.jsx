import React from "react";

export default function PageHeader({ kicker, title, description, children }) {
  return (
    <header className="border-b border-border pb-8">
      {kicker ? (
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">{kicker}</p>
      ) : null}
      <h1 className="mt-3 font-heading text-[2rem] leading-[1.15] text-foreground sm:text-[2.6rem]">{title}</h1>
      {description ? (
        <p className="mt-4 max-w-2xl font-heading text-[1.0625rem] leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
      {children ? <div className="mt-6">{children}</div> : null}
    </header>
  );
}