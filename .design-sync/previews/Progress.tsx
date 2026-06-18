import { Progress } from "registry-starter";

export function Default() {
  return <Progress value={60} />;
}

export function Empty() {
  return <Progress value={0} />;
}

export function Full() {
  return <Progress value={100} />;
}

export function Steps() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "240px" }}>
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px", fontSize: "12px" }}>
          <span>Uploading…</span>
          <span>33%</span>
        </div>
        <Progress value={33} />
      </div>
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px", fontSize: "12px" }}>
          <span>Processing…</span>
          <span>67%</span>
        </div>
        <Progress value={67} />
      </div>
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px", fontSize: "12px" }}>
          <span>Complete</span>
          <span>100%</span>
        </div>
        <Progress value={100} />
      </div>
    </div>
  );
}
