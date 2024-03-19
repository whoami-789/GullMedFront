import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

const Home: React.FC = () => {
    return (
        <div>
            <Header/>
            <div className="flex justify-center items-center flex-col">
                <div className='mt-2 w-2/4 h-3/4 mb-4'>
                    <Banner/>
                </div>
                <div>
                    asdasd
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;