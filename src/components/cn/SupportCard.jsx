import { quotes } from "./assets";

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[290px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">

    <img src={img} alt={name} className="w-[96px] h-[94px] rounded-full" />
    <div className="flex flex-row">

      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
      </div>
    </div>

    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
      {content}
    </p>

  </div>
);


export default FeedbackCard;
