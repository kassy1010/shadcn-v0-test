import { Button } from "registry-starter";

export function Default() {
  return <Button>Click me</Button>;
}

export function Secondary() {
  return <Button variant="secondary">Secondary</Button>;
}

export function Outline() {
  return <Button variant="outline">Outline</Button>;
}

export function Destructive() {
  return <Button variant="destructive">Delete</Button>;
}

export function Ghost() {
  return <Button variant="ghost">Ghost</Button>;
}

export function Sizes() {
  return (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  );
}

export function Disabled() {
  return <Button disabled>Disabled</Button>;
}
