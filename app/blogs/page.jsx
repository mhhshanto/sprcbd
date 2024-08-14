import React from "react";
import Blog from "/components/Blog";
import Cta2 from "/components/Cta2";

const page = async ({ searchParams }) => {
  const selectedCategory = searchParams?.category || 'all';
   const selectedPage = searchParams?.page || 0;

  const result = await fetch(`https://sprcbd-backend.vercel.app/blogs-data?category=${selectedCategory}&page=${selectedPage}`, {
    next: {
      revalidate: 10,
    }
  });

  const {allBlogs: blogs,blogsCount} = await result.json()
  
  


  return <div>
    <div className="four-card ">
      <div className="four-card-text container">
        <h1 className="txt-color">নিয়মিত আমাদের <span>ব্লগ</span>&nbsp;পড়ার মাধ্যমে নিজের শারীরিক সুস্থতা নিয়ে আরো বেশী সচেতন হোন।</h1>
        <h4 className="text-info"> ফিজিওথেরাপি বাংলা ব্লগ : সুস্থ জীবনের প্রথম ধাপ</h4>
      </div>
    </div>
    <Blog blogs={blogs} blogsCount={blogsCount} selectedCategory={selectedCategory} selectedPage={selectedPage} />
    <Cta2 />
  </div>;
};

export default page;
