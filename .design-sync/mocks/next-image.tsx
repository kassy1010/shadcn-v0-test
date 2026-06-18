import * as React from "react";

export default function Image({
  src,
  alt,
  width,
  height,
  className,
  fill,
  style,
  ...props
}: {
  src: string | { src: string };
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fill?: boolean;
  style?: React.CSSProperties;
  [key: string]: unknown;
}) {
  const resolvedSrc = typeof src === "string" ? src : src?.src ?? "";
  const fillStyle: React.CSSProperties = fill
    ? { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }
    : {};
  return (
    <img
      src={resolvedSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={{ ...fillStyle, ...style }}
    />
  );
}
