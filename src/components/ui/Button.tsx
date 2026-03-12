import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-ptm-accent text-ptm-navy font-semibold hover:bg-ptm-accent-light shadow-button",
  secondary:
    "bg-ptm-blue text-white font-semibold hover:bg-ptm-blue-light shadow-button",
  ghost:
    "bg-transparent text-ptm-blue font-medium hover:bg-ptm-blue/5",
  outline:
    "bg-transparent text-ptm-navy font-medium border-2 border-ptm-gray-light hover:border-ptm-blue hover:text-ptm-blue",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-body-sm rounded-button",
  md: "px-6 py-3 text-body-md rounded-button",
  lg: "px-8 py-4 text-body-lg rounded-button",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center transition-all duration-200 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
