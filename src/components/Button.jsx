import { motion } from "framer-motion";

const Button = ({ styles }) => (
  <motion.button
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-white rounded-[10px] outline-none
      bg-gradient-to-r from-green-500 via-cyan-500 to-cyan-700 bg-[length:200%_200%] ${styles}`}
    animate={{
      backgroundPositionX: ["0%", "100%", "0%"],
      scale: 1,  // normal scale
    }}
    transition={{
      backgroundPositionX: {
        duration: 3,
        repeat: Infinity,
        ease: "linear",
      },
      scale: { duration: 0.5 },  // no delay when resetting scale
    }}
    whileHover={{
      scale: 1.1,
      transition: { duration: 0.5 }, // instant zoom on hover
    }}
  >
    Get Started
  </motion.button>
);

export default Button;
