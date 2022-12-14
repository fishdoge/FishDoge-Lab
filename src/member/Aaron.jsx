const AaronNameCard = () => {
    return (
        <section id="home" className={`flex  md:flex-row flex-col ${styles.paddingY}`}>
          <div className={`flex-1 ${styles.flexStart} font-bold flex-col xl:px-0 sm:px-16 px-6`}>


            <div className="flex flex-row justify-between items-center w-full">
              <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                The<br className="sm:block hidden" />{" "}  Fishdoge Lab <br className="sm:block hidden" />{" "}
                <span className="text-gradient">Blockchain</span>{" "}
              </h1>

            </div>

            <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
            Solutions.
            </h1>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              Crypto Currency platform,Web3 social Media, Gamefi , What every you want to build on blockchain,we will support you! Mail to fishdogestudio66@gmail.com
            </p>
          </div>

          <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
            <img src={FrameDem} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

            {/* gradient start */}
            <div className="absolute z-[0] w-[40%] h-[5%] top-0 pink__gradient" />
            <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
            <div className="absolute z-[0] w-[50%] h-[25%] right-20 bottom-20 blue__gradient" />
            {/* gradient end */}
          </div>


        </section>
      );
};

  export default AaronNameCard;
