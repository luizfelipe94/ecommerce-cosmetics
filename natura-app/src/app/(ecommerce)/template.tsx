import Breadcrumb from "@/components/breadcrumb";
import React from "react";

export type TemplateProps = {
  children: React.ReactNode;
  breadcrumb: { label: string; href?: string }[];
};

export default function Template({ children, breadcrumb }: TemplateProps) {
  return (
    <div style={{ padding: "20px" }}>
      <Breadcrumb items={breadcrumb || []}/>
      {children}
    </div>
  );
}
