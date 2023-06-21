import React from "react";

const FourCard = () => {
  return <>
<section className="four-card" style={{ overflowX: 'hidden' }}>
<div className="four-card-text container">
    <h1 className="txt-color">আন্তরিক সেবা দানে প্রতিশ্রুতিবদ্ধ <br />  <span>শফিকুল ফিজিওথেরাপি এন্ড রিহ্যাবিলিটেশন সেন্টারে (SPRC) </span></h1>
    <p> অভিজ্ঞ এবং ডিগ্রিধারী বিশেষজ্ঞ ফিজিওথেরাপিস্টদের মাধ্যমে রোগীদের সঠিক সেবা নিশ্চিত করতেই আমাদের এই অনলাইন প্লাটফর্ম ।</p>
  </div>
  
<div className="container-four">
<div className="box box-orange box-push">
      <div 
      data-aos="fade-right"
      data-aos-delay="0"
      data-aos-duration="800">
      <h2>ম্যানুয়াল এন্ড ম্যানিপুলেশন থেরাপি   </h2>
      <p>সপ্তাহে ৭ দিনই আমাদের ফিজিওথেরাপি সেন্টার থেকে সেবা নেওয়ার সুযোগ রয়েছে। </p>
      <a href="/therapy" className="mt-5 btn btn-warning">বিস্তারিত জানুন</a>
      <img src="sprc-images/four-card/icon-karma.svg" alt=""/>
      </div>
    </div>
   
    <div className="box box-cyan" 
       data-aos="fade-down"
       data-aos-delay="0"
       data-aos-duration="800"
       >
      <h2>সর্বাধুনিক যন্ত্রপাতির ব্যবহার </h2>
      <p>সর্বাধুনিক যন্ত্রপাতি হওয়ায় আমাদের চিকিৎসা ব্যবস্থা অনেক বেশি কার্যকর ।</p>
      <a href="/machineries" className="mt-5 btn btn-info">বিস্তারিত জানুন</a>
      <img src="sprc-images/four-card/icon-supervisor.svg" alt=""/>
    </div>
    <div className="box box-red box-push">
     <div 
       data-aos="fade-left"
       data-aos-delay="0"
       data-aos-duration="800">
      <h2>বিশেষজ্ঞ ফিজিওথেরাপিস্ট টিম</h2>
      <p>সুদক্ষ থেরাপিস্ট দ্বারা আমাদের ফিজিওথেরাপি সেন্টার পরিচালিত হয়।</p>
      <img src="sprc-images/four-card/icon-team-builder.svg" alt=""/>
      <a href="/stuff"  className="mt-5 btn btn-danger">বিস্তারিত জানুন</a>
      </div>
    </div>
    
    <div className="box box-blue" 
    data-aos="fade-up"
    data-aos-delay="0"
    data-aos-duration="800">
      <h2>হোম সার্ভিস ফিজিওথেরাপি </h2>
      <p>ডিজেবল পেশেন্টের অক্ষমতা বিবেচনায় রেখে আমাদের রয়েছে হোম সার্ভিস ফিজিওথেরাপিস্ট টিম । </p>
      <a href="/contact" className="mt-5 btn btn-primary">বিস্তারিত জানুন</a>
      <img src="sprc-images/four-card/icon-calculator.svg" alt=""/>
    </div>
  </div>

</section>
  </>;
};
export default FourCard;
