import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

const ProjectModal = ({ project, onClose, language }) => {
    if (!project) return null;

    // Fecha o modal se clicar fora da caixa branca (no fundo escuro)
    const handleOverlayClick = (e) => {
        if (e.target.id === 'modal-overlay') onClose();
    };

    return (
        // Fundo com desfoque (backdrop-blur-sm)
        <div
            id="modal-overlay"
            onClick={handleOverlayClick}
            className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex justify-center items-center p-4 overflow-y-auto"
        >
            {/* Caixa do Modal */}
            <div className="bg-[#1e293b] w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border border-gray-700 relative animate-fadeIn">

                {/* Botão de Fechar (X) */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white z-10 bg-black/50 p-2 rounded-full transition"
                >
                    <FaTimes size={20} />
                </button>

                <div className="grid md:grid-cols-2">
                    {/* Lado Esquerdo: Imagem Grande */}
                    <div className="h-64 md:h-full w-full">
                        <img
                            src={project.img}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Lado Direito: Conteúdo */}
                    <div className="p-8 max-h-[80vh] overflow-y-auto">
                        <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>

                        {/* Badge da Categoria */}
                        <span className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                            {project.category === 'work' ? (language === 'pt' ? 'Trabalho' : 'Work') : (language === 'pt' ? 'Faculdade' : 'College')}
                        </span>

                        {/* Descrição Longa */}
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            {language === 'pt' ? project.long_desc_pt : project.long_desc_en}
                        </p>

                        {/* Seção "Tech Stack Explained" */}
                        <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-700 pb-2">
                            {language === 'pt' ? 'Tecnologias Utilizadas' : 'Tech Stack Breakdown'}
                        </h3>

                        <div className="space-y-4 mb-8">
                            {project.tech_details.map((tech, index) => (
                                <div key={index} className="flex items-start gap-4 p-3 rounded-lg bg-[#0f172a] hover:bg-[#28354f] transition">
                                    <div className="text-2xl text-accent mt-1">
                                        {tech.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-sm">{tech.name}</h4>
                                        <p className="text-xs text-gray-400">
                                            {language === 'pt' ? tech.purpose_pt : tech.purpose_en}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Botões de Ação */}
                        <div className="flex gap-4">
                            <a
                                href={project.gitUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg font-bold transition"
                            >
                                <FaGithub size={20} /> Repo
                            </a>
                            <a
                                href={project.previewUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 bg-accent hover:bg-accent/80 text-white py-3 rounded-lg font-bold transition"
                            >
                                <FaExternalLinkAlt size={18} /> Demo
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;