import { motion } from "framer-motion";
import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
      className={`${styles.flexCenter} flex-wrap w-full`}
    >
      {clients.map((client, index) => (
        <motion.div
          key={client.id}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          whileHover={{
            scale: 1.15,
            transition: { type: "spring", stiffness: 300, damping: 15 },
          }}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5 cursor-pointer`}
        >
          <img
            src={client.logo}
            alt="client_logo"
            className="sm:w-[192px] w-[100px] object-contain"
          />
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default Clients;
