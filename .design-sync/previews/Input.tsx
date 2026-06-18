import { Input, Label } from "registry-starter";

export function Default() {
  return <Input placeholder="Enter text..." />;
}

export function WithLabel() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <Label htmlFor="email">Email address</Label>
      <Input id="email" type="email" placeholder="you@example.com" />
    </div>
  );
}

export function Password() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <Label htmlFor="password">Password</Label>
      <Input id="password" type="password" placeholder="••••••••" />
    </div>
  );
}

export function Disabled() {
  return <Input disabled placeholder="Disabled input" value="Cannot edit" />;
}

export function WithValue() {
  return <Input defaultValue="john.doe@example.com" />;
}
