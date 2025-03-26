import Title from "@/components/title";

import ServiceGrid from "@/containers/cardGrid";

export default function Home() {
  return (
    <div className="py-10">
      <Title title="What We Do" />
      <ServiceGrid />
      <Title title="What Say Our Clients!" />
      {/* Add components here */}
    </div>
  );
}
