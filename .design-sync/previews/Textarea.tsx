import { Textarea, Label } from "registry-starter";

export function Default() {
  return <Textarea placeholder="Type your message here..." />;
}

export function WithLabel() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <Label htmlFor="message">Message</Label>
      <Textarea id="message" placeholder="Write your message..." rows={4} />
    </div>
  );
}

export function WithValue() {
  return (
    <Textarea
      defaultValue="This is a pre-filled message with some longer content to demonstrate how the textarea wraps text across multiple lines."
      rows={4}
    />
  );
}

export function Disabled() {
  return <Textarea disabled placeholder="Disabled" value="Cannot be edited" />;
}
