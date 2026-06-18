import { Toggle } from "registry-starter";

export function Default() {
  return <Toggle>Bold</Toggle>;
}

export function Pressed() {
  return <Toggle defaultPressed>Italic</Toggle>;
}

export function Outline() {
  return <Toggle variant="outline">Underline</Toggle>;
}

export function Sizes() {
  return (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <Toggle size="sm">Sm</Toggle>
      <Toggle size="default">Default</Toggle>
      <Toggle size="lg">Lg</Toggle>
    </div>
  );
}

export function Disabled() {
  return <Toggle disabled>Disabled</Toggle>;
}

export function FormatGroup() {
  return (
    <div style={{ display: "flex", gap: "4px" }}>
      <Toggle variant="outline" aria-label="Bold">B</Toggle>
      <Toggle variant="outline" aria-label="Italic">I</Toggle>
      <Toggle variant="outline" aria-label="Underline">U</Toggle>
    </div>
  );
}
