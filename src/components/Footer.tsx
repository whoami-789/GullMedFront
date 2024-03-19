import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="fixed bottom-0 w-full bg-blue-700 text-white text-center py-4">
            <div className="container mx-auto text-center text-white">
                <p>&copy; 2024 Gull Med. Все права защищены.</p>
                <p>контактная информация и другие детали</p>
            </div>
        </footer>
    );
}

export default Footer;
