import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = ({ language }) => {
    return (
        <div id='contact' className='w-full py-16 px-4 bg-[#0f172a] text-gray-300'>
            <div className='max-w-[1240px] m-auto'>
                <p className='text-xl tracking-widest uppercase text-accent font-bold'>
                    {language === 'pt' ? 'Contato' : 'Contact'}
                </p>
                <h2 className='py-4 text-4xl font-bold text-white'>
                    {language === 'pt' ? 'Vamos Conversar?' : 'Get In Touch'}
                </h2>

                <div className='grid lg:grid-cols-2 gap-8 mt-8'>
                    {/* Lado Esquerdo: Infos */}
                    <div className='w-full h-full shadow-xl shadow-gray-900 rounded-xl p-8 bg-[#1e293b] border border-gray-700 flex flex-col justify-between'>
                        <div>
                            <img
                                className='rounded-xl hover:scale-105 ease-in duration-300 w-full mb-6'
                                src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                alt="/"
                            />
                            <h3 className='text-2xl font-bold text-white'>Luiz Eduardo</h3>
                            <p className='text-accent font-bold'>Full Stack Developer</p>
                            <p className='py-4'>
                                {language === 'pt'
                                    ? 'Estou disponível para vagas de estágio, júnior ou freelance. Entre em contato!'
                                    : 'I am available for freelance or full-time positions. Contact me and let\'s talk.'}
                            </p>
                        </div>

                        <div>
                            <p className='uppercase pt-8 text-accent font-bold'>
                                {language === 'pt' ? 'Conecte-se comigo' : 'Connect With Me'}
                            </p>
                            <div className='flex items-center justify-start gap-6 py-4'>
                                <a href="https://www.linkedin.com/in/seu-linkedin" target='_blank' rel="noreferrer" className='p-4 rounded-full bg-gray-700 hover:bg-accent hover:text-white transition duration-300 shadow-lg cursor-pointer'>
                                    <FaLinkedin size={20} />
                                </a>
                                <a href="https://github.com/lu1zedu" target='_blank' rel="noreferrer" className='p-4 rounded-full bg-gray-700 hover:bg-accent hover:text-white transition duration-300 shadow-lg cursor-pointer'>
                                    <FaGithub size={20} />
                                </a>
                                <a href="mailto:seuemail@gmail.com" className='p-4 rounded-full bg-gray-700 hover:bg-accent hover:text-white transition duration-300 shadow-lg cursor-pointer'>
                                    <FaEnvelope size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Lado Direito: Formulário (Visual) */}
                    <div className='w-full h-auto shadow-xl shadow-gray-900 rounded-xl lg:p-4 bg-[#1e293b] border border-gray-700'>
                        <div className='p-4'>
                            <form action="https://getform.io/f/seu-codigo-aqui" method='POST'>
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>{language === 'pt' ? 'Nome' : 'Name'}</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-600 bg-[#0f172a] text-white focus:border-accent outline-none' type="text" name='name' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>{language === 'pt' ? 'Telefone' : 'Phone Number'}</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-600 bg-[#0f172a] text-white focus:border-accent outline-none' type="text" name='phone' />
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>E-mail</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-600 bg-[#0f172a] text-white focus:border-accent outline-none' type="email" name='email' />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>{language === 'pt' ? 'Assunto' : 'Subject'}</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-600 bg-[#0f172a] text-white focus:border-accent outline-none' type="text" name='subject' />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>{language === 'pt' ? 'Mensagem' : 'Message'}</label>
                                    <textarea className='border-2 rounded-lg p-3 border-gray-600 bg-[#0f172a] text-white focus:border-accent outline-none' rows='6' name='message'></textarea>
                                </div>
                                <button className='w-full p-4 bg-accent text-white font-bold mt-4 rounded-xl hover:brightness-110 shadow-lg shadow-purple-900/50 transition'>
                                    {language === 'pt' ? 'Enviar Mensagem' : 'Send Message'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;