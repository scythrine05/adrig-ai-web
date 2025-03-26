
import Title from "@/components/title";
import ImageCommentToggle from "@/components/title/VoiceComment";

import ServiceGrid from "@/containers/cardGrid";

export default function Home() {
  const images = [
    { imageSrc: "/messi.jpg", comment: "Best player of the tournament" },
    { imageSrc: "/messi.jpg", comment: "Legend of the game" },
    { imageSrc: "/messi.jpg", comment: "Skill master" },
    { imageSrc: "/messi.jpg", comment: "Future star" },
  ];

  return (
    <div className="py-10">
      <Title title="What We Do" />
      <ServiceGrid />
      <Title title="What Say Our Clients!" />
      <div className="flex justify-center items-center gap-34 p-4 mt-2">
        {images.map((item, index) => (
          <ImageCommentToggle 
            key={index} 
            imageSrc={item.imageSrc} 
            comment={item.comment} 
          />
        ))}
      </div>
    </div>
  );
}

