import TextBoxAnimation from "./TextBox";

import Image from "next/image";

const LLMDevAnimation = () => {
  return (
    <div className="relative w-full p-4 border border-gray-300 rounded-md bg-white">
      <div className="w-full h-auto rounded-lg overflow-hidden">
        <Image
          src="/animation-assets/LLM-dev-1.png"
          alt="LLM Development Animation"
          width={600}
          height={400}
          layout="responsive"
        />
        <div className="mt-6">
          <TextBoxAnimation firstText={'Write the prompt...'} secondText={'And are Quokka’s big?'} />
        </div>
      </div>
    </div>
  );
};

export default LLMDevAnimation;
