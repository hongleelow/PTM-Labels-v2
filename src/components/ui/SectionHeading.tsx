interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
  dark = false,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl mb-12 lg:mb-16 ${alignment}`}>
      {label && (
        <span
          className={`inline-block text-body-sm font-semibold uppercase tracking-widest mb-3 ${
            dark ? "text-ptm-accent" : "text-ptm-blue"
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`text-display-md font-bold mb-4 ${
          dark ? "text-white" : "text-ptm-navy"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-body-lg ${
            dark ? "text-ptm-gray" : "text-ptm-slate-light"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
