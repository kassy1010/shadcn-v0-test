import { Checkbox, Label } from "registry-starter";

export function Default() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  );
}

export function Checked() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <Checkbox id="checked" defaultChecked />
      <Label htmlFor="checked">Remember me</Label>
    </div>
  );
}

export function Disabled() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <Checkbox id="disabled" disabled />
      <Label htmlFor="disabled" style={{ opacity: 0.5 }}>Unavailable option</Label>
    </div>
  );
}

export function Group() {
  const items = ["Notifications", "Marketing emails", "Product updates"];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      {items.map((item) => (
        <div key={item} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Checkbox id={item} />
          <Label htmlFor={item}>{item}</Label>
        </div>
      ))}
    </div>
  );
}
