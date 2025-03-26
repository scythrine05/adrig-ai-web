import { ServiceCard } from "@/components/card";

const ServiceGrid = () => {
  return (
    <div className="flex flex-wrap justify-center lg:justify-between gap-6 px-4 md:px-10 max-w-[1400px] mx-auto my-20">
      <div className="flex flex-wrap justify-center gap-6 w-full">
        <ServiceCard
          title="Chatbot Development"
          description="We develop intelligent chatbots that leverage advanced NLP to elevate customer interactions and streamline your business processes."
          size="large"
        />
        <ServiceCard
          title="Content Creation"
          description="Our content creation solutions effortlessly generate high-quality, engaging content according to your brand's guidelines to captivate your audience."
          size="large"
        />
      </div>
      <div className="flex flex-wrap justify-center gap-6 w-full">
        <ServiceCard
          title="Workflow Automations"
          description="We automate your workflows to streamline repetitive tasks, enhance efficiency, save time, and eliminate errors."
        />
        <ServiceCard
          title="LLM Development"
          description="We develop Large Language Models that transform how your company interacts with data and customers."
        />
        <ServiceCard
          title="AI Consulting"
          description="Our experts provide strategic guidance, enabling your business to implement AI solutions that drive transformative growth."
        />
      </div>
    </div>
  );
};

export default ServiceGrid;
