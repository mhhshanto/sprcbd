import React from "react";
import Nav from "./../../components/Nav";
import Footer from "./../../components/Footer";

function layout({ children }) {
  return (
    <>
      <head>
        <title>Stuff || SPRCBD Manipulation Therapy</title>
        <meta
          name="description"
          content="Learn more about SPRCBD Manipulation Therapy, the best physiotherapy center in Chittagong. We offer expert services by experienced professionals."
        />
        <meta
          property="og:title"
          content="Stuff || SPRCBD Manipulation Therapy"
        />
        <meta
          property="og:description"
          content="Discover the team behind SPRCBD Manipulation Therapy and our commitment to providing exceptional physiotherapy services."
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/YourImageURL/your-about-page-thumbnail.jpg"
        />
        <meta property="og:url" content="https://sprcbd.com/stuff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
      </head>

      <body>
        <main className="">
          <div>
            <Nav />
            {children}
            <Footer />
          </div>
        </main>
      </body>
    </>
  );
}

export default layout;
