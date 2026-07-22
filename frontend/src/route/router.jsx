import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/root"
import Home from "../App";
import About from "../pages/about";
import Blog from "../pages/blog";
import BlogDetails from "../pages/blog-details";
import LayoutTwo from "../layout/layoutTwo";

import Contact from "../pages/contact";
import Faq from "../pages/faq";
import Testimonials from "../pages/testimonials";

import ServiceDetails from "../pages/service-details";
import Services from "../pages/services";
import TermsConditions from "../pages/terms-conditions";
import PrivacyPolicy from "../pages/privacy-policy";
import SearchResult from "../pages/search-result";
import Register from "../pages/register";
import Team from "../pages/team";
import Pricing from "../pages/pricing";
import Login from "../pages/login";
import NotFound from "../pages/404";
import Author from "../pages/author";
import Categories from "../pages/categories";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home />
            },
        ],
    },
    {
        path: "/",
        element: <LayoutTwo />,
        children:[

            {
                path: "/service-details",
                element: <ServiceDetails />
            },
            {
                path: "/services",
                element: <Services />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/blog-details",
                element: <BlogDetails />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/faq",
                element: <Faq />
            },
            {
                path: "/testimonials",
                element: <Testimonials />
            },
            {
                path: "/team",
                element: <Team />
            },
            {
                path: "/pricing",
                element: <Pricing />
            },
            {
                path: "/terms-conditions",
                element: <TermsConditions />
            },
            {
                path: "/privacy-policy",
                element: <PrivacyPolicy />
            },
            {
                path: "/search-result",
                element: <SearchResult />   
            },
            {
                path: "/register",
                element: <Register />   
            },
            {
                path: "/login",
                element: <Login />   
            },
            {
                path: "/author",
                element: <Author />   
            },
            {
                path: "/categories",
                element: <Categories />   
            },
        ]
    }
])