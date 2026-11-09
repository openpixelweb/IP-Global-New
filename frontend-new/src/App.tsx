import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import './assets/css/slick.css';
import './assets/css/swiper.css';
import './assets/css/bootstrap.min.css';
import './assets/css/swap.css';
import './assets/css/style.css';
import './assets/css/media.css';
import "remixicon/fonts/remixicon.css";
import MainLayout1 from './routing/MainLayout1.tsx';
import MainLayout2 from './routing/MainLayout2.tsx';
import NewPageTop from './components/NewPageTop.tsx';
import { routesWithMainLayout1, routesWithMainLayout2, routesWithoutLayout } from './routing/Routing.tsx';
import BottomToTopButton from "./components/BottomToTopButton.tsx";
import Preloader from "./components/Preloader.tsx";

function App() {
    return (
        <>
            <Router>
                <Preloader />
                <NewPageTop />
                <Routes>
                    {/* Routes with MainLayout1 */}
                    {routesWithMainLayout1.map(({ path, element }) => (
                        <Route
                            key={path}
                            path={path}
                            element={<MainLayout1>{element}</MainLayout1>}
                        />
                    ))}
                    {/* Routes with MainLayout2 */}
                    {routesWithMainLayout2.map(({ path, element }) => (
                        <Route
                            key={path}
                            path={path}
                            element={<MainLayout2>{element}</MainLayout2>}
                        />
                    ))}

                    {/* Routes without MainLayout */}
                    {routesWithoutLayout.map(({ path, element }) => (
                        <Route key={path} path={path} element={element} />
                    ))}
                </Routes>
                <BottomToTopButton />
            </Router>
        </>
    )
}

export default App