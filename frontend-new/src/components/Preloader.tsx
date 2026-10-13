import { useEffect, useState } from 'react';
import LoaderSvg from '../assets/images/favicon.png';

const Preloader: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 800);

        return () => clearTimeout(timer);
    }, []);

    if (!isLoading) return null;

    return (
        <div className="preloader" id="preloader">
            <div className="loader">
                <img src={LoaderSvg} alt="loader" />
            </div>
        </div>
    );
};

export default Preloader