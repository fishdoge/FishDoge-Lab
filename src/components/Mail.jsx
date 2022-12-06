import styles from "./cn/style";
import { discount, FrameDem } from "./cn/assets";
import GetStarted from "./cn/GetStarted";
import {Button,Button2} from "./Button";
const Mails = () => {
  return (
    <section id="home" className={`flex bg-black h-[100%] w-[100%]  md:flex-row flex-col overflow-hidden`}>
      <div className={`${styles.paddingX} ${styles.paddingY} `}>

        <div className={`flex-1 ${styles.flexStart} font-bold flex-col xl:px-0 sm:px-16 px-6`}>
        <img src={FrameDem} alt="billing" className="w-[50%] h-[50%] md:hidden relative z-[5]" />
          <div className="flex flex-row justify-between items-center w-full">


            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
              The  Fishdoge<br className="sm:block hidden " />{" "}  Lab<br className="sm:block hidden" />{" "}
              <span className="text-gradient">contact us</span>{" "}
            </h1>
            {/* <div className="ss:flex hidden md:mr-4 mr-0">
              <GetStarted />
            </div> */}
          </div>
          <div className= {`${styles.paragraph} grid gap-6 mb-6 text-white md:grid-cols-1`}>
              <div>
                  <label for="first_name" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Your name</label>
                  <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
              </div>

              <div>
                  <label for="company" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Company</label>
                  <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
              </div>
              <div>
                  <label for="phone" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Email</label>
                  <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
              </div>

              <Button2>Send</Button2>

          </div>

          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Crypto Currency platform,Web3 social Media, Gamefi , What every you want to build on blockchain,we will support you! Mail to fishdogestudio66@gmail.com
          </p>
          {/* <p className='text-white md:visible invisible'>
          8888
          </p> */}
          <img src={FrameDem} alt="billing" className="w-[50%] h-[50%]  md:visible invisible relative z-[5]" />
        </div>

        {/* <img src={FrameDem} alt="billing" className="w-[50%] h-[50%]  md:visible invisible relative z-[5]" /> */}
        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>



          {/* gradient start */}
          <div className="absolute z-[0] w-[40%] h-[5%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
          <div className="absolute z-[0] w-[50%] h-[25%] right-20 bottom-20 blue__gradient" />
          {/* gradient end */}
        </div>

      </div>
    </section>
  );
};

export default Mails;
