import homePoster from '../assets/Special Thali (A5) - 5.jpg';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div className="bg-black min-h-screen flex items-center justify-center">
            <Helmet>
                <title>SAWAII | Authentic Indian Cuisine</title>
            </Helmet>
            <div className="max-w-4xl w-full p-20">
                <img
                    src={homePoster}
                    alt="Sawaii Promotional Poster"
                    className="w-full h-auto object-contain rounded-lg shadow-2xl"
                />
            </div>
        </div>
    );
};

export default Home;
