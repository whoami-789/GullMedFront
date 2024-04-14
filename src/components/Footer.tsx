import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-blue-700 text-white text-center py-4 mt-auto m-0">
            <div className="container mx-auto text-center text-white m-0">
                <a>&copy; 2024 Gull Med. Все права защищены.</a>
                <br/>
                {/*<a>контактная информация и другие детали</a>*/}
            </div>
        </footer>
    );
}

export default Footer;
