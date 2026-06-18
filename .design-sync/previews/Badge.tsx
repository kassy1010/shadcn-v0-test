import { Badge } from "registry-starter";

export function Default() {
  return <Badge>New</Badge>;
}

export function Secondary() {
  return <Badge variant="secondary">Beta</Badge>;
}

export function Destructive() {
  return <Badge variant="destructive">Error</Badge>;
}

export function Outline() {
  return <Badge variant="outline">Draft</Badge>;
}

export function StatusRow() {
  return (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <Badge>Active</Badge>
      <Badge variant="secondary">Pending</Badge>
      <Badge variant="outline">Archived</Badge>
      <Badge variant="destructive">Deleted</Badge>
    </div>
  );
}
