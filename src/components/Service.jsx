import { ServiceRepo } from "../constants";
import styles from "../style";
import SupportCard from "./SupportCard";

const Service = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className=" flex justify-between items-center md:flex-row flex-col sm:mb-6 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
       Our Sevice <br className="sm:block hidden" />
      </h2>

      {/* <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div> */}
    </div>
    {/* <div className="flex flex-wrap sm:justify-start justify-center  feedback-container relative z-[1]">
      <p className={`${styles.paragraph} text-left max-w-[550px]`}>Create Smart and support Web2 componey join in Web3</p>
    </div> */}

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {ServiceRepo.map((card) => <SupportCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Service;
