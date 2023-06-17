import React from "react";
import Cta2 from "@/components/Cta2";

const page = () => {
  return <div>
    <div className="four-card">
      <div className="four-card-text container">
        <h1>অত্যাধুনিক ফিজিওথেরাপি  <span>যন্ত্রপাতি</span></h1>
        <p >এডভান্স ম্যনুয়াল ও ম্যনুপুলেশন থেরাপির সাথে অত্যাধুনিক যন্ত্রপাতির ব্যবহার ফিজিওথেরাপি চিকিৎসাকে আরও সর্বোৎকৃষ্টমানের  কার্যকর করে তুলে ।  </p>
      </div>
    </div>
    <div className="container">
      <div className="row mb-4">
        <div className="col-md-6 text-end p-3">

          <h4 className="text-info ">Ultra Sound Machine Therapy Machine</h4>
          <p>  details of the machine</p>
        </div>
        <div className="col-md-6 "><img className="rounded shadow p-1 img-fluid" src="sprc-images/machineries/ultra-sound.jpg" alt="" /></div>
      </div>

      <div className="row mb-4">
        <div className="col-md-6 "><img className="rounded shadow p-1 img-fluid" src="sprc-images/machineries/ultra-sound.jpg" alt="" /></div>
        <div className="col-md-6 text-start p-5">

          <h4 className="text-info">Ultra Sound Machine Therapy Machine</h4>
          <p>details of the machine</p>
        </div>
      </div>

      <div className="row mb-4">
    <div className="col-md-6 text-end p-5">
      
      <h4 className="text-info">Ultra Sound Machine Therapy Machine</h4>
  <p>details of the machine</p>
    </div>
    <div className="col-md-6 "><img className="rounded shadow p-1 img-fluid" src="sprc-images/machineries/ultra-sound.jpg" alt="" /></div>
  </div>

  <div className="row mb-4">
        <div className="col-md-6 "><img className="rounded shadow p-1 img-fluid" src="sprc-images/machineries/ultra-sound.jpg" alt="" /></div>
        <div className="col-md-6 text-start p-5">

          <h4 className="text-info">Ultra Sound Machine Therapy Machine</h4>
          <p>details of the machine</p>
        </div>
      </div>
    </div>
    <Cta2/>
  </div>;
};

export default page;
