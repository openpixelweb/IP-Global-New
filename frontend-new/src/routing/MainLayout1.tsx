import type { ReactNode } from "react";
import Header1 from "../components/Header1.tsx";
import Footer from "../components/Footer.tsx";

interface MainLayout1Props {
    children: ReactNode;
}

const MainLayout1 = ({ children }: MainLayout1Props) => {
    return (
        <>
            <Header1 />
            {children}
            <Footer />
        </>
    );
};

export default MainLayout1;
