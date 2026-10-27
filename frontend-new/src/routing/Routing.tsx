import type { ReactNode } from "react";
import Home1 from "../pages/Home1.tsx";
import Home2 from "../pages/Home2.tsx";
import Home3 from "../pages/Home3.tsx";
import Home4 from "../pages/Home4.tsx";
import AboutUs from "../pages/AboutUs.tsx";
import Team1 from '../pages/Team1.tsx';
import Team2 from '../pages/Team2.tsx';
import SingleTeam from "../pages/SingleTeam.tsx";
import PricingPlan from '../pages/PricingPlan.tsx';
import Testimonial from '../pages/Testimonial.tsx';
import Faq from '../pages/Faq.tsx';
import NotFound from '../pages/NotFound.tsx';
import ComingSoon from '../pages/ComingSoon.tsx';
import Services1 from '../pages/Services1.tsx';
import Services2 from '../pages/Services2.tsx';
import ServicesDetail1 from '../pages/ServicesDetail1.tsx';
import ServicesDetail2 from '../pages/ServicesDetail2.tsx';
import Blogs1 from '../pages/Blogs1.tsx';
import Blogs2 from '../pages/Blogs2.tsx';
import BlogDetail from '../pages/BlogDetail.tsx';
import BlogDetail2 from '../pages/BlogDetail2.tsx';
import Projects1 from "../pages/Projects1.tsx";
import SingleProjects from "../pages/SingleProjects.tsx";
import SingleProjects2 from "../pages/SingleProjects2.tsx";
import Contact from '../pages/Contact.tsx';

interface RouteType {
    path: string;
    element: ReactNode;
}

export const routesWithMainLayout2: RouteType[] = [
    { path: "/Home3", element: <Home3 /> },
    { path: "/Home4", element: <Home4 /> },
];

export const routesWithMainLayout1: RouteType[] = [
    { path: "/", element: <Home1 /> },
    { path: "/Home2", element: <Home2 /> },
    { path: "/AboutUs", element: <AboutUs /> },
    { path: "/Team1", element: <Team1 /> },
    { path: "/Team2", element: <Team2 /> },
    { path: "/SingleTeam", element: <SingleTeam /> },
    { path: "/PricingPlan", element: <PricingPlan /> },
    { path: "/Testimonial", element: <Testimonial /> },
    { path: "/Faq", element: <Faq /> },
    { path: "*", element: <NotFound /> },
    { path: "/Services1", element: <Services1 /> },
    { path: "/Services2", element: <Services2 /> },
    { path: "/ServicesDetail1", element: <ServicesDetail1 /> },
    { path: "/ServicesDetail2", element: <ServicesDetail2 /> },
    { path: "/Blogs1", element: <Blogs1 /> },
    { path: "/Blogs2", element: <Blogs2 /> },
    { path: "/BlogDetail", element: <BlogDetail /> },
    { path: "/BlogDetail2", element: <BlogDetail2 /> },
    { path: "/Projects1", element: <Projects1 /> },
    { path: "/SingleProjects", element: <SingleProjects /> },
    { path: "/SingleProjects2", element: <SingleProjects2 /> },
    { path: "/Contact", element: <Contact /> },
];

export const routesWithoutLayout: RouteType[] = [
    { path: "/ComingSoon", element: <ComingSoon /> },
];
