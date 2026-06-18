import * as React from "react";

export default function Link({
  href,
  children,
  className,
  ...props
}: {
  href: string;
  children?: React.ReactNode;
  className?: string;
  [key: string]: unknown;
}) {
  return (
    <a href={href} className={className} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
      {children}
    </a>
  );
}
