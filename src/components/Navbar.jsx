import React, { useState } from 'react';

const Navbar = ({ toggleLanguage, currentLang, texts }) => {
    const [nav, setNav] = useState(false);
    const handleNav = () => setNav(!nav);

    const links = [
        { id: 1, text: texts.home, href: '#hero' },
        { id: 2, text: texts.about, href: '#about' },
        { id: 3, text: texts.projects, href: '#projects' },
        { id: 4, text: texts.contact, href: '#contact' },
    ];

    return (
        <div className='fixed left-0 top-0 w-full z-50 bg-primary/90 backdrop-blur-sm ease-in duration-300'>
            <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-txt'>

                <h1 className='text-3xl font-bold text-accent cursor-pointer'>
                    Luiz Eduardo.
                </h1>

                <div className='flex items-center'>
                    <ul className='hidden md:flex mr-8'>
                        {links.map((link) => (
                            <li key={link.id} className='p-4 hover:text-accent cursor-pointer text-sm font-medium uppercase tracking-wider transition-colors'>
                                <a href={link.href}>{link.text}</a>
                            </li>
                        ))}
                    </ul>

                    <button
                        onClick={toggleLanguage}
                        className='border border-accent text-accent px-3 py-1 rounded hover:bg-accent hover:text-white transition font-bold text-xs sm:text-sm'
                    >
                        {currentLang === 'pt' ? 'EN 🇺🇸' : 'PT 🇧🇷'}
                    </button>

                    <div onClick={handleNav} className='block md:hidden ml-4 z-10 cursor-pointer'>
                        {nav ? <span className="text-2xl font-bold">✕</span> : <span className="text-2xl font-bold">☰</span>}
                    </div>
                </div>

                <div className={
                    nav
                        ? 'fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-primary text-center ease-in duration-300'
                        : 'fixed top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-primary text-center ease-in duration-300'
                }>
                    <ul>
                        {links.map((link) => (
                            <li key={link.id} onClick={handleNav} className='p-4 text-4xl hover:text-accent cursor-pointer'>
                                <a href={link.href}>{link.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;