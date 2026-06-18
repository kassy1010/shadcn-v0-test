import { Avatar, AvatarFallback, AvatarImage } from "registry-starter";

export function WithFallback() {
  return (
    <Avatar>
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  );
}

export function WithImage() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
      <AvatarFallback>SC</AvatarFallback>
    </Avatar>
  );
}

export function Group() {
  const initials = ["AB", "CD", "EF", "GH"];
  return (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      {initials.map((i) => (
        <Avatar key={i}>
          <AvatarFallback>{i}</AvatarFallback>
        </Avatar>
      ))}
    </div>
  );
}
