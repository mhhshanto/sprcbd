"use client"
import cheerio from 'cheerio';
import Link from 'next/link';
import React from 'react'
import Cta2 from "/components/Cta2";
import './blog.css'

function SingleBlog({ blog, blogs, categories }) {

    const convertDate = (date) => {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return new Date(date).toLocaleDateString('en-US', options);
       }


    return (
        <>
            <div class="main-container">
                <div class="row">

                    <div className='col-xl-2 col-lg-4 mt-5'>
                        <div style={{ backgroundColor: '#f3f3f3', minHeight: '300px', }}>
                            <h5 style={{ textTransform: 'uppercase', fontWeight: '700', padding: '10px' }}>Categories</h5>
                            {
                                categories.map((item, index) => {
                                    return (
                                        <Link className='link-underline link-underline-opacity-0 link-underline-opacity-75-hover' style={{color:'black'}}  key={index} href={`/blogs?category=${item?.category}&page=0`}>
                                            <p  style={{ padding: '2px 10px', borderBottom: '1px solid #d4d4d482', textTransform: 'uppercase', display: 'flex', justifyContent: 'space-between' }}>{item?.category} <span>({item?.count})</span></p>
                                        </Link>
                                    )
                                })
                            }

                        </div>
                    </div>

                    <div class="col-xl-7 col-lg-8 mt-4">

                        <div className='mt-3 d-flex gap-2'>
                            <p style={{ color: '#fff', backgroundColor: 'purple', fontSize: '15px', fontWeight: '600', padding: '1px 8px', textTransform: 'uppercase', width: 'fit-content' }}>{blog?.category}</p>
                            <p style={{ color: 'purple', fontWeight: '800', fontSize: '15px', textTransform: 'uppercase' }}>{convertDate(blog?.postedDate)}</p>

                        </div>

                        <h1 className=" mb-4 text-primary text-uppercase font-weight-bold">{blog?.title}</h1>

                        <div className="w-100">
                            <img className="img-fluid" src={blog?.img_url} alt="Responsive Image" />
                        </div>

                        <div className='mt-3'>
                            <h5 style={{ fontWeight: 'bold' }}>{blog?.Author_Name}</h5>
                        </div>

                        <div className="text-lg hidden_froala mt-4" dangerouslySetInnerHTML={{ __html: blog?.content }}></div>

                        <div className="w-100">
                            <img className="img-fluid" src={blog?.img_url2} alt='' />
                        </div>

                        <div className="text-lg hidden_froala mt-4" dangerouslySetInnerHTML={{ __html: blog?.content2 }}></div>
                    </div>


                    <div className='col-xl-3 mt-5'>
                        <div className="row">
                            {blogs.map((item) => {

                                const data = cheerio.load(item?.content);
                                const textContent = data('body').text();

                                return (
                                    <Link href={`/blogs/${item?.queryTitle}`} className="main_card_single d-block mb-3 mt-3" key={item?._id}>
                                        <div className="blog-card w-100 h-100">
                                            <img style={{ position: 'absolute', backgroundColor: '#493b90e0', width: '100%', height: '100%', }} className='blog-img' src={item?.img_url} alt="" />
                                            <div style={{ position: 'absolute', backgroundColor: '#493b90e0', width: '100%', height: '100%' }}></div>
                                            <div className="blog-text">
                                                <div className='d-flex gap-3'>
                                                    <p style={{ color: '#fff', backgroundColor: 'purple', fontSize: '12px', fontWeight: '600', padding: '1px 5px', textTransform: 'uppercase' }}>{item?.category}</p>
                                                    <p style={{ color: '#fff', fontWeight: '600', fontSize: '12px', textTransform: 'uppercase' }}>{convertDate(blog?.postedDate)}</p>

                                                </div>
                                                <h5 style={{ color: '#fff', fontWeight: 'bold', }} className="">{item?.title}</h5>
                                                {/* <p className="card-text">{textContent.substr(0,100)}...</p> */}
                                            </div>
                                        </div>
                                    </Link>
                                )
                            }
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Cta2 />
        </>
    )
}

export default SingleBlog