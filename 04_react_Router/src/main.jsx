import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import About from "./componets/About/About.jsx";
import Home from "./componets/Home/Home.jsx";
import Contact from "./componets/Contacts/Contacts.jsx";
import User from "./componets/User/User.jsx";
import Github, { githubInfoLoader } from "./componets/Github/Github.jsx";

// const router = createBrowserRouter([
//   {
//        path:'/',
//        element: <Layout />,
//        children:[
//         {
//           path:"",
//           element:<Home />
//         },
//         {path:"about",
//           element: <About />
//         },
//       {
//           path:"contacts",
//           element: <Contact />
//       },
//        ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contacts" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />

      <Route loader={githubInfoLoader} path="github" element={<Github />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
