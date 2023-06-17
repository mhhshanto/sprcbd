import React from 'react'

export default function Cta1() {
  return (
    <section className="cta" data-aos="fade-up" data-aos-delay="0">
    <div className="container">
      <div className="cta-content d-xl-flex align-items-center justify-content-around  text-xl-left">
        <div className="content" data-aos="fade-right" data-aos-delay="200">
        <h2>আপনি কি এখনই এপয়েন্টমেন্ট নিতে চাচ্ছেন ?</h2>
            <h6>আমাদের রয়েছে পুরুষদের জন্য পুরুষ ফিজিওথেরাপিস্ট এবং স্বয়ং সম্পন্ন পুরুষ বিভাগ । 
            </h6>
            <h6> মহিলাদের জন্য রয়েছে মহিলা ফিজিওথেরাপিস্ট ও স্বয়ং সম্পন্ন আলাদা  মহিলা বিভাগ ।</h6>
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
  )
}
