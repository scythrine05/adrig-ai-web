
// import Title from "@/components/title";
// import ImageCommentToggle from "@/components/title/VoiceComment";

// export default function Home() {
//   return (
//     <div className="p-10">
//       <Title title="What We Do" />
//       {/* Add components here */}
//       <Title title="What Say Our Clients!" />
//       <ImageCommentToggle 
//         imageSrc="/messi.jpg" 
//         comment="best player of the tournament" 
//       />
//     </div>
//   );
// }
import Title from "@/components/title";
import ImageCommentToggle from "@/components/title/VoiceComment";

export default function Home() {
  const images = [
    { imageSrc: "/messi.jpg", comment: "Best player of the tournament" },
    { imageSrc: "/messi.jpg", comment: "Legend of the game" },
    { imageSrc: "/messi.jpg", comment: "Skill master" },
    { imageSrc: "/messi.jpg", comment: "Future star" },
  ];

  return (
    <div className="p-10 flex flex-col items-center">
      <Title title="What We Do" />
      <Title title="What Say Our Clients!" />
      
      
      <div className="flex justify-center items-center gap-34 p-4">
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

