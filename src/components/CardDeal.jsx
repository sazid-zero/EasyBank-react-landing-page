import { motion } from "framer-motion";
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    {/* Text Section */}
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ amount: 0.3 }}
      className={layout.sectionInfo}
    >
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in a few easy steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Discover the perfect credit card tailored to your lifestyle and spending habits. 
        Compare benefits, rewards, and rates effortlessly to find the deal that saves you more and works for you.
      </p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ amount: 0.3 }}
      >
        <Button styles={`mt-10`} />
      </motion.div>
    </motion.div>

    {/* Image Section */}
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ amount: 0.3 }}
      className={layout.sectionImg}
      whileHover={{ scale: 1.15 }}
    >
      <img src={card} alt="card-deal" className="w-[100%] h-[100%]" />
    </motion.div>
  </section>
);

export default CardDeal;
