import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Section({
  id,
  children,
  className,
  tone = "white",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "white" | "soft" | "brand";
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-20 py-16 sm:py-24",
        tone === "soft" && "bg-brand-50",
        tone === "brand" && "bg-brand-100",
        className,
      )}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal
      className={cn(
        "mb-12 max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold tracking-wide text-brand-700 uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-3xl sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-base text-muted-foreground">{description}</p>
      )}
      <span
        className={cn(
          "mt-6 block h-0.5 w-16 bg-[var(--gold)]",
          align === "center" && "mx-auto",
        )}
      />
    </Reveal>
  );
}
