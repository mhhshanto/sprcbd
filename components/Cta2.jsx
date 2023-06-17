import React from "react";

export default function Cta2() {
  return (
    <section className="cta cta2" data-aos="fade-up" data-aos-delay="0">
      <div className="container">
        <div className="cta-content d-xl-flex align-items-center justify-content-around text-center text-xl-left">
          <div className="content" data-aos="fade-right" data-aos-delay="200">
            <h2>আপনি কি এখনই এপয়েন্টমেন্ট নিতে চাচ্ছেন ?</h2>
            <p>আমাদের রয়েছে পুরুষদের জন্য পুরুষ ফিজিওথেরাপিস্ট এবং মহিলাদের জন্য মহিলা ফিজিওথেরাপিস্ট
            </p>
          </div>
          <div
            className="subscribe-btn"
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-offset="0"
          >
            <a href="/appointment" className="btn_custom btn_custom-primary">
            এপয়েন্টমেন্ট নিতে ক্লিক করুন
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
