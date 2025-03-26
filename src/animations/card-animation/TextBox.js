import { motion } from "framer-motion";
import Image from "next/image";

const TextBoxAnimation = ({firstText, secondText}) => {
  return (
    <motion.div
      initial={{ borderColor: "#ddd" }}
      whileHover={{
        borderColor: "rgba(17, 85, 214, 0.5)",
      }}
      transition={{ duration: 0.1 }}
      className="relative w-full p-4 border-2 rounded-lg bg-white text-center overflow-hidden h-12 flex items-center justify-between px-4"
    >
      <motion.div
        initial="initial"
        whileHover="hover"
        whileTap="hover"
        exit="initial"
        className="relative w-full h-full flex items-center justify-between cursor-pointer select-none"
      >
        <div className="relative w-full">
          <motion.p
            variants={{
              initial: { y: 0, opacity: 1 },
              hover: { y: -20, opacity: 0 },
            }}
            transition={{ duration: 0.1 }}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-xs md:text-sm"
          >
            {firstText}
          </motion.p>

          <motion.p
            variants={{
              initial: { y: 20, opacity: 0 },
              hover: { y: 0, opacity: 1 },
            }}
            transition={{ duration: 0.1 }}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-xs md:text-sm"
          >
            {secondText}
          </motion.p>
        </div>

        <Image
          src="/animation-assets/arrow.png"
          alt="Arrow"
          width={30}
          height={30}
        />
      </motion.div>
    </motion.div>
  );
};

export default TextBoxAnimation;
