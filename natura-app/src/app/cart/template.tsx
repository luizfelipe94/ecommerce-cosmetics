import React from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ padding: "20px" }}>{children}</div>
  );
}
