// import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import { discount, FrameDem } from "../assets";
import GetStarted from "./GetStarted";
import { WhiteBlock,GreenBlock} from "../newassets"

const Billing = () => (
  <section id="home" className={`flex  md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart } font-bold flex-col xl:px-0 sm:px-16 px-6`}>
        {/* <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div> */}

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The<br className="sm:block hidden" />{" "}
            <span className="text-gradient">產品</span>{" "}
          </h1>
          {/* <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div> */}
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          我們已經完成了
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          我們團隊支援超過10個團隊建立其鏈上產品，其中包含NFT, Erc20 token, Defi protocal, IEO...
        </p>
      </div>

      <div className={`stack flex-1 flex ${styles.flexCenter} md:my-0 mx-5 `}>
        {/* <img src={FrameDem} alt="billing" className="w-[100%] h-[100%] relative z-[5]" /> */}
        <img src={WhiteBlock} alt="billing" className="w-[50%] h-[65%] -mx-22 z-[10]" />
        <img src={GreenBlock} alt="billing" className="w-[100%] h-[100%] -mx-20 z-[15]" />
        <img src={WhiteBlock} alt="billing" className="w-[50%] h-[65%] -mx-22  z-[10]" />

        {/* gradient start */}
        {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" /> */}
        {/* gradient end */}
      </div>

      {/* <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div> */}
    </section>
);

export default Billing;
