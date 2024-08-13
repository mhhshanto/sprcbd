import Sidebar from "./../../components/dashboard/Sidebar";
import dynamic from "next/dynamic";
const PrivateRoute = dynamic(
  () => import("./../../components/auth/PrivateRoute"),
  {
    ssr: false,
  }
);

function DashboardLayoutPage({ children }) {
  return (
    <>
      <head>
        <title>Dashboard || SPRCBD Manipulation Therapy</title>
        <meta
          name="description"
          content="Learn more about SPRCBD Manipulation Therapy, the best physiotherapy center in Chittagong. We offer expert services by experienced professionals."
        />
        <meta
          property="og:title"
          content="Dashboard || SPRCBD Manipulation Therapy"
        />
        <meta
          property="og:description"
          content="Discover the team behind SPRCBD Manipulation Therapy and our commitment to providing exceptional physiotherapy services."
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/YourImageURL/your-about-page-thumbnail.jpg"
        />
        <meta property="og:url" content="https://sprcbd.com/dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
      </head>

      <body>
        <PrivateRoute>
          <div className="container">
            <Sidebar className="w-100 " />
            <div className=" w-100 ">{children}</div>
          </div>
        </PrivateRoute>
      </body>
    </>
  );
}

export default DashboardLayoutPage;
