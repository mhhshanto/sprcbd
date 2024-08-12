import React from 'react';
import Link from 'next/link';
// import cheerio from 'cheerio';
import './blog.css'
import useGetCategory from '../hooks/useGetCategory';


export default async function Blog({blogs, blogsCount, selectedCategory, selectedPage}) {
   const categories = await useGetCategory()
   const perPage = Math.ceil(blogsCount / 6)
   const arrOFPages = [...Array(perPage).keys()]
   
   const convertDate = (date) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
   }


  return (
  
    <div className="container">

     <div style={{display: 'flex', flexWrap:'wrap' , justifyContent: 'space-between'}}>
     <div class="dropdown mt-3">
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Select Category
  </button>
  <ul class="dropdown-menu">

  <li><Link class="dropdown-item" href={`/blogs?category=all&page=0`}>All</Link></li>
    {
      categories?.map((item,index)=> {
         return (
          <li key={index}><Link class="dropdown-item" href={`/blogs?category=${item?.category}&page=0`}>{item?.category}</Link></li>
         )
      })
    }
  </ul>
</div>

<div class="dropdown mt-3">
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Select Page
  </button>
  <ul class="dropdown-menu">
    {
      arrOFPages?.map((item,index)=> {
         return (
          <li key={index}><Link class="dropdown-item" href={`/blogs?category=${selectedCategory}&page=${index}`}>{index+1}/6</Link></li>
         )
      })
    }
  </ul>
</div>


     </div>
    

      <div className="row-custom">
        {blogs.map((item) => {


           return (
           <Link href={`/blogs/${item?.queryTitle}`} className="main_card d-block mb-3 mt-3" key={item?._id}>
            <div className="blog-card w-100 h-100">
              <img style={{position:'absolute', backgroundColor: '#493b90e0', width:'100%', height: '100%',}} className='blog-img' src={item?.img_url} alt="" />
              <div style={{position:'absolute', backgroundColor: '#493b90e0', width:'100%', height: '100%'}}></div>
              <div className="blog-text">
                <div className='d-flex gap-3'>
                  <p style={{color:'#fff', backgroundColor:'purple',fontSize:'12px', fontWeight:'600', padding:'1px 5px', textTransform:'uppercase' }}>{item?.category}</p>
                  <p style={{color:'#fff', fontWeight:'600',fontSize:'12px',textTransform:'uppercase' }}>{convertDate(item?.postedDate)}</p>
                </div>
                <h4 style={{color:'#fff', fontWeight:'bold',}} className="">{item?.title}</h4>
                {/* <p className="card-text">{textContent.substr(0,100)}...</p> */}
              </div>
            </div>
          </Link>
           )
        }
        )}
      </div>
    </div>
  );
}


  {/* <div className="col-sm-6 mb-3 mt-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title text-success">ম্যানুয়াল থেরাপি বোঝার গুরুত্ব: হাতের কাজের পদ্ধতি দিয়ে স্বাস্থ্যকর হোন।</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Read more</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6 mb-3 mt-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title text-success">ক্রীড়াবিদ্যার আঘাত প্রতিরোধ: ফিজিওথেরাপি আপনাকে খেলাযোগ্য রেখে রাখতে পারে।</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Read more</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6 mb-3 mt-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title text-success">ক্রোনিক ব্যথা পরিচালনা: দীর্ঘমেয়াদী ব্যথার জন্য ফিজিওথেরাপির শক্তি জানুন।</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Read more</a>
      </div>
    </div>
  </div> */}














// const Blog = () => {
//   return <div>
// <div className="four-card ">
// <div className="four-card-text container">
//     <h1>নিয়মিত আমাদের <span>ব্লগ</span>&nbsp;পড়ার মাধ্যমে নিজের শারীরিক সুস্থতা নিয়ে আরো বেশী সচেতন হোন।</h1>
//     <p> ফিজিওথেরাপি বাংলা ব্লগ: স্বাস্থ্যমন্দ জীবনের প্রথম ধাপ</p>
//   </div>
// </div>

// <div className="container">
// <div className="row">
//   <div className="col-sm-6 mb-3 mt-3">
//     <div className="card">
//       <div className="card-body">
//         <h5 className="card-title text-success">ফিজিওথেরাপির উপকার জানুন: আপনার পুনরুদ্ধার পথে সহায়তা করুন।</h5>
//         <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
//         <a href="#" className="btn btn-primary">Read more</a>
//       </div>
//     </div>
//   </div>

  
//   <div className="col-sm-6 mb-3 mt-3">
//     <div className="card">
//       <div className="card-body">
//         <h5 className="card-title text-success">ম্যানুয়াল থেরাপি বোঝার গুরুত্ব: হাতের কাজের পদ্ধতি দিয়ে স্বাস্থ্যকর হোন।</h5>
//         <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
//         <a href="#" className="btn btn-primary">Read more</a>
//       </div>
//     </div>
//   </div>
//   <div className="col-sm-6 mb-3 mt-3">
//     <div className="card">
//       <div className="card-body">
//         <h5 className="card-title text-success">ক্রীড়াবিদ্যার আঘাত প্রতিরোধ: ফিজিওথেরাপি আপনাকে খেলাযোগ্য রেখে রাখতে পারে।</h5>
//         <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
//         <a href="#" className="btn btn-primary">Read more</a>
//       </div>
//     </div>
//   </div>
//   <div className="col-sm-6 mb-3 mt-3">
//     <div className="card">
//       <div className="card-body">
//         <h5 className="card-title text-success">ক্রোনিক ব্যথা পরিচালনা: দীর্ঘমেয়াদী ব্যথার জন্য ফিজিওথেরাপির শক্তি জানুন।</h5>
//         <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
//         <a href="#" className="btn btn-primary">Read more</a>
//       </div>
//     </div>
//   </div>


// </div>
// </div>
// <Cta2 />
//   </div>;
// };

// export default Blog;


  // const promise = databases.createDocument(
    //     '6492052992e6a1900b7f',
    //     '64920548a6794540bb44',
    //     ID.unique(),
    //     {title: 'Hello World',content: 'How are you?'}
    // );