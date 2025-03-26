import { ServiceCard } from "@/components/card";

// Animations
import LLMDevAnimation from "@/animations/card-animation/LLM_dev";
import Content_creation from "@/animations/card-animation/Content_creation";
import ChatBot_dev from "@/animations/card-animation/ChatBot_dev";
import Workflow_Automations from "@/animations/card-animation/Workflow_Automations";
import AI_consult from "@/animations/card-animation/AI_consult";

const ServiceGrid = () => {
  return (
    <div className="flex flex-wrap justify-center lg:justify-between gap-6 px-4 md:px-10 max-w-[1400px] mx-auto my-20">
      <div className="flex flex-wrap justify-center gap-6 w-full">
        <ServiceCard
          title="Chatbot Development"
          description="We develop intelligent chatbots that leverage advanced NLP to elevate customer interactions and streamline your business processes."
          size="large"
          animation={<ChatBot_dev />}
        />
        <ServiceCard
          title="Content Creation"
          description="Our content creation solutions effortlessly generate high-quality, engaging content according to your brand's guidelines to captivate your audience."
          size="large"
          animation={<Content_creation />}
        />
      </div>
      <div className="flex flex-wrap justify-center gap-6 w-full">
        <ServiceCard
          title="Workflow Automations"
          description="We automate your workflows to streamline repetitive tasks, enhance efficiency, save time, and eliminate errors."
          animation={<Workflow_Automations />}
        />
        <ServiceCard
          title="LLM Development"
          description="We develop Large Language Models that transform how your company interacts with data and customers."
          animation={<LLMDevAnimation />}
        />
        <ServiceCard
          title="AI Consulting"
          description="Our experts provide strategic guidance, enabling your business to implement AI solutions that drive transformative growth."
          animation={<AI_consult />}
        />
      </div>
    </div>
  );
};

export default ServiceGrid;
