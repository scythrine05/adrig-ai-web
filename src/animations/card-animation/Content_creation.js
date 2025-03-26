import React from "react";
import Image from "next/image";
import TextBoxAnimation from "./TextBox";

export default function Content_creation() {
  return (
    <div>
      <Image
        src="/animation-assets/content-creation.png"
        alt="Content-Creation"
        width={600}
        height={400}
        layout="responsive"
      />
      <div className="mt-6">
        <TextBoxAnimation
          firstText={"Generate an Image of..."}
          secondText={"Generate an Image of smiling quokka on the beach."}
        />
      </div>
    </div>
  );
}
