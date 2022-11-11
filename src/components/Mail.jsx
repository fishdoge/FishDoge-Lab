import styles from "./cn/style";
import { discount, FrameDem } from "./cn/assets";
import GetStarted from "./cn/GetStarted";
const Mails = () => {
  return (
    <section id="home" className={`flex bg-black h-[100%] w-[100%]  md:flex-row flex-col overflow-hidden`}>
      <div className={`${styles.paddingX} `}>

        <div className={`flex-1 ${styles.flexStart} font-bold flex-col xl:px-0 sm:px-16 px-6`}>
        <img src={FrameDem} alt="billing" className="w-[50%] h-[50%] md:hidden  relative z-[5]" />
          <div className="flex flex-row justify-between items-center w-full">


            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
              The<br className="sm:block hidden " />{" "}  Fishdoge<br className="sm:block hidden" />{" "}
              <span className="text-gradient">Lab </span>{" "}
            </h1>
            {/* <div className="ss:flex hidden md:mr-4 mr-0">
              <GetStarted />
            </div> */}
          </div>
          <div class="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                  <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
                  <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
              </div>
              <div>
                  <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last name</label>
                  <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required/>
              </div>
              <div>
                  <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Company</label>
                  <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required/>
              </div>
              <div>
                  <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone number</label>
                  <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
              </div>

          </div>

          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Crypto Currency platform,Web3 social Media, Gamefi , What every you want to build on blockchain,we will support you! Mail to fishdogestudio66@gmail.com
          </p>
        </div>

        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={FrameDem} alt="billing" className="w-[100%] h-[100%]  md:visible relative z-[5]" />

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
