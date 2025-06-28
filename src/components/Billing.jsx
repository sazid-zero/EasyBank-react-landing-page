import { motion } from "framer-motion";
import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ amount: 0.3 }}
      className={layout.sectionImgReverse}
      whileHover={{ scale: 1.15 }}
    >
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      viewport={{ amount: 0.3 }}
      className={layout.sectionInfo}
    >
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Take control of your business transactions with ease. Our service ensures smooth, reliable, and efficient payment handling, keeping your operations running seamlessly.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ amount: 0.3 }}
        className="flex flex-row flex-wrap sm:mt-10 mt-6"
      >
        {/* Apple Store Button with Hover Animation */}
        <motion.img
          whileHover={{ scale: 1.15 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          src={apple}
          alt="app_store"
          className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
        />

        {/* Google Play Button with Hover Animation */}
        <motion.img
          whileHover={{ scale: 1.15 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          src={google}
          alt="google_play"
          className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Billing;
