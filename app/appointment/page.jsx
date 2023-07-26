import React from "react";


const page = () => {
  
  return <div>

<section className="four-card">
<div className="four-card-text container">
    <h1 className="txt-color"><span>শফিকুল ইসলাম ফিজিওথেরাপি সেন্টারে </span> <br />আপনার এপয়েন্টমেন্ট নিশ্চিত করতে নিচের ফর্মটি সঠিক ভাবে পূরণ করুন  </h1>
    <p> অভিজ্ঞ এবং ডিগ্রিধারী বিশেষজ্ঞ ফিজিওথেরাপিস্টদের মাধ্যমে রোগীদের সঠিক সেবা নিশ্চিত করতেই আমাদের এই অনলাইন প্লাটফর্ম ।</p>
  </div>


  <div className="container">
     <h1 className="text-center">এপয়েন্টমেন্ট ফর্ম</h1>
    
    <div className="row ">
      <div className="col-lg-7 mx-auto">
        <div className="card mt-2 mx-auto p-4 bg-light">
            <div className="card-body bg-light">
       
            <div class = "container">
        <form action="https://formspree.io/f/mvojgnyz"
  method="POST" id="contact-form" role="form">

            

            <div className="controls">

                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="name">নাম  *</label>
                            <input id="name" type="text" name="name" className="form-control" placeholder="এখানে আপনার পূর্ণ নাম লিখুন  *" required="required" data-error="Firstname is required."/>
                            
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="phone">মোবাইল নাম্বার *</label>
                            <input id="phone" type="text" name="phone" className="form-control" placeholder="এখানে আপনার ফোন নাম্বার দিন  *" required="required" data-error="Lastname is required."/>
                                                            </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="email">ইমেইল  *</label>
                            <input id="email" type="email" name="email" className="form-control" placeholder="ইমেইল এড্রেস টি দিন  *" required="required" data-error="Valid email is required."/>
                            
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="date">এপয়েন্টমেন্টের তারিখ সিলেক্ট করুন  *</label>
                            <input id="date" type="date" name="date" className="form-control" placeholder="ইমেইল এড্রেস টি দিন  *" required="required" data-error="Valid email is required."/>
                            
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label htmlFor="message">Message *</label>
                            <textarea id="message" name="message" className="form-control" placeholder="এখানে আপনার সমস্যাটি এখানে লিখুন । " rows="4" required="required" data-error="Please, leave us a message."></textarea
                                >
                            </div>

                        </div>


                    <div className="col-md-12 text-center mt-3">
                        
                        <input type="submit" className="btn_custom btn_custom-primary" value="কনফার্ম  করুন " />
                    
                </div>
          
                </div>


        </div>
         </form >
        </div>
            </div>


    </div>
     

    </div>
 

</div>
</div>


  </section>
  <div className="container text-center">
    <h3 className="text-danger">নির্দেশনা </h3>
  <ol className="list-group list-group-flush">
  <li className="list-group-item">অনুগ্রহ করে আপনার নামটি সঠিকভাবে দিন। </li>
  <li className="list-group-item">আপনার সঠিক ফোন নাম্বার দিন। </li>
  <li className="list-group-item">সঠিক ইমেইল এড্রেস দিন। </li>
  <li className="list-group-item">আপনার সমস্যাটি বিস্তারিত লিখুন। </li>
  <li className="list-group-item">অ্যাপয়েন্টমেন্ট কনফার্ম করার পূর্বে সবকিছু ভালোভাবে চেক করে নিন। </li>
</ol>
  </div>
  </div>;
  };

export default page;