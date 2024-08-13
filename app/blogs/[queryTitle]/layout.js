import React from "react";
import Nav from "./../../../components/Nav";
import Footer from "./../../../components/Footer";
import useGetSingleBlog from "../../../hooks/useGetSingleBlog";
import dynamic from "next/dynamic";
const extractDescription = dynamic(() => import("../../../hooks/extractDescription"), {
    ssr: false,
  });

async function layout({ children, params }) {
    const queryTitle = params.queryTitle;
    const { data: blog } = await useGetSingleBlog(queryTitle);
    const description = extractDescription(blog?.content);


  return (
     <>
     <head>
       <title>{`Blogs || ${blog?.title}`}</title>
       <meta
         name="description"
         content="Learn more about SPRCBD Manipulation Therapy, the best physiotherapy center in Chittagong. We offer expert services by experienced professionals."
       />
       <meta
         property="og:title"
         content={`Blogs || ${blog?.title}`}
       />
       <meta
         property="og:description"
         content={description}
       />
       <meta
         property="og:image"
         content={blog?.img_url}
       />
       <meta property="og:url" content={`https://sprcbd.com/about/${params?.queryTitle}`} />
       <meta name="viewport" content="width=device-width, initial-scale=1" />
       <link rel="icon" href="favicon.ico" />
     </head>

     
         
           {children}
           
      
   </>
  );
}

export default layout;
