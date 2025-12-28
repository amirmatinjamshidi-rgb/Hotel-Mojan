import dynamic from "next/dynamic";

const AboutComplete = dynamic(
  () => import("@/Features/components/About/AboutComplete")
);

export default function Page() {
  return <AboutComplete />;
}
