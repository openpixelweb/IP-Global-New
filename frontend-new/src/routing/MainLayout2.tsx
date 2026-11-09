import type { ReactNode } from "react";
import Header2 from '../components/Header2.tsx';
import Footer from '../components/Footer.tsx';

interface MainLayout2Props {
    children: ReactNode;
}
const MainLayout2 = ({ children }: MainLayout2Props) => {
    return (
        <>
            <Header2 />
            {children}
            <Footer />
        </>
    );
};

export default MainLayout2;
