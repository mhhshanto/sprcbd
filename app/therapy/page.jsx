import React from "react";
import Cta2 from "@/components/Cta2";

const page = () => {
  return <div>
    <div className="four-card">
      <div className="four-card-text container">
        <h1>আমাদের অত্যাধুনিক <span>থেরাপিসমূহ</span> সম্পর্কে জানুন </h1>
        <p> আধুনিক থেরাপিসমূহ রোগীর সুন্থতায় কম সময়েই কার্যকরী ভূমিকা রাখে । </p>
      </div>
    </div>
    <div className="container">
      <h3 className="text-center text-primary p-3">Continuous Passive Motion (CPM)</h3>
      <div className="row">
        <div className="col-md-6"><img src="sprc-images/therapies/cpm.jpg" className="card-img-top rounded shadow" alt="Card 2"/></div>
        <div className="col-md-6">
        <p className="text-center color-switch">Continuous Passive Motion (CPM) therapy uses machines to move a joint passively i.e. without the patient exerting any effort. A motorised device moves the joint repetitively to a set of number of degrees and movement speed, determined by the physiotherapist. CPM machines are most commonly applied to the knee, but there are versions for other joints such as the hip, shoulder and elbow.

Uses of CPM
CPM is most commonly used after joint surgery to promote the recovery of normal joint range of motion (ROM) and thus, to prevent joint stiffness complications. It is frequently recommended after knee joint replacement or knee cartilage repair surgery. Uses of the CPM are also reported in pediatric orthopaedic surgeries or injuries for maintaining hip and knee range of motion.[1] CPM was introduced in the early post-operative period and was combined with physiotherapy for maximum results. The device was well tolerated, without interfering with open wounds, nursing care or external fixation devices.</p>
      </div>
      </div>
      
    </div>
    
    <Cta2/>
  </div>;
};


export default page;
