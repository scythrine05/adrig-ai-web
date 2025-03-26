export const ServiceCard = ({ title, description, size = "small" }) => {
    return (
      <div
        className={`rounded-xl shadow-md p-6 flex flex-col items-center justify-between 
              w-full sm:max-w-[95%] md:max-w-[700px] lg:max-w-[750px] xl:max-w-[800px]
              ${size === "large" ? "lg:w-[48%] xl:w-[49%]" : "lg:w-[32%] xl:w-[32%]"} 
              min-h-80 flex-grow border border-transparent
              [background-image:linear-gradient(white,white),linear-gradient(150deg,rgba(17,85,214,0.8),rgba(255,255,255,0.6))] 
              [background-origin:border-box] [background-clip:padding-box,border-box]`}
      >
        <div className="w-full h-40 bg-gray-400 rounded-lg mb-4" />
        <div className="w-full flex flex-col flex-grow">
          <h2 className="text-xl font-semibold">{title}</h2>
          <div className="mt-4 mb-10 flex-grow">
            <p className="text-sm">{description}</p>
          </div>
        </div>
      </div>
    );
  };
  