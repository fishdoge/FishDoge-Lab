import React from "react";

const contantUs =()=>{
  window.open("https://www.facebook.com/FishDogeLab");
}


const Button = ({ styles }) => (
  <button type="button" onClick={contantUs} className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Get Started
  </button>
);

const Button2 = ({ styles }) => (
  <button type="button" className={`py-2 px-4 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Send Info
  </button>
);


export {Button,Button2};
