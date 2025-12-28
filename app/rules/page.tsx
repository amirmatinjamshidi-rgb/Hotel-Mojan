import React from "react";
import dynamic from "next/dynamic";

const RulesPart = dynamic(
  () => import("@/Features/components/rules/rulesPart")
);

function page() {
  return (
    <div className="gap-10">
      <RulesPart />
    </div>
  );
}

export default page;
