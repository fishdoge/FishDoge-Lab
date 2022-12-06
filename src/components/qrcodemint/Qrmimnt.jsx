//import styles from "/src/style";
import styles from "/src/index.css";
import { LOGO2 } from "/src/newassets";
const QrcodemintNFT = () => (
    <div className="back-ground-st w-full h-[1800px]">
        <div className="bg-primary w-full overflow-hidden bg-[#2f2f2f]">

            <div className="w-full bg-[#2f2f2f] h-[260px] mt-[50px] object-contain">
                <img
                    src={LOGO2}
                    alt="hoobank"
                    className="w-full h-[112.14px] "
                />
            </div>
            
            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              
            </div>
            </div>
        </div>
    </div>
);

export default QrcodemintNFT;
