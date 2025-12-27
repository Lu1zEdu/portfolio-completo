import { FaJava, FaReact, FaPython, FaBrain, FaRobot, FaDatabase } from 'react-icons/fa';
import { SiSpringboot, SiArduino, SiOpenai, SiStreamlit } from 'react-icons/si';


export const projects = [
    {
        id: 1,
        title: "LPP System (ITA)",
        category: "work",
        img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        desc_pt: "Sistema de controle e automação para o laboratório do ITA.",
        desc_en: "Control and automation system for ITA laboratory.",
        long_desc_pt: "Este é um sistema complexo desenvolvido para o Laboratório de Pesquisa (LPP) do ITA. O objetivo é gerenciar o acesso físico ao prédio, monitorar atividades via câmeras e manter um registro detalhado de pesquisadores e projetos.",
        long_desc_en: "This is a complex system developed for ITA's Research Laboratory (LPP). The goal is to manage physical access to the building, monitor activities via cameras, and keep a detailed record of researchers and projects.",
        gitUrl: "#",
        previewUrl: "#",
        tech_details: [
            { name: "Java", icon: <FaJava />, purpose_pt: "Lógica robusta do Backend e regras de negócio.", purpose_en: "Robust Backend logic and business rules." },
            { name: "Spring Boot", icon: <SiSpringboot />, purpose_pt: "Framework para criar a API REST e gerenciar injeção de dependência.", purpose_en: "Framework to build REST API and manage dependency injection." },
            { name: "Arduino", icon: <SiArduino />, purpose_pt: "Integração com hardware de câmeras e sensores de porta.", purpose_en: "Integration with camera hardware and door sensors." },
            { name: "React", icon: <FaReact />, purpose_pt: "Interface administrativa responsiva para os gestores.", purpose_en: "Responsive administrative interface for managers." }
        ]
    },
    {
        id: 2,
        title: "Incluid IA",
        category: "college",
        img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        desc_pt: "Projeto acadêmico focado em acessibilidade e inclusão usando IA.",
        desc_en: "Academic project focused on accessibility and inclusion using AI.",
        long_desc_pt: "Projeto desenvolvido na faculdade com o objetivo de utilizar Inteligência Artificial para quebrar barreiras de acessibilidade. A ferramenta analisa cenários e auxilia pessoas com deficiência na interação com o ambiente digital.",
        long_desc_en: "Project developed in college aimed at using Artificial Intelligence to break accessibility barriers. The tool analyzes scenarios and assists people with disabilities in interacting with the digital environment.",
        gitUrl: "#",
        previewUrl: "#",
        tech_details: [
            { name: "Python", icon: <FaPython />, purpose_pt: "Processamento de dados e orquestração da IA.", purpose_en: "Data processing and AI orchestration." },
            { name: "OpenAI API", icon: <SiOpenai />, purpose_pt: "Motor de inteligência generativa para interpretação.", purpose_en: "Generative intelligence engine for interpretation." },
            { name: "Streamlit", icon: <SiStreamlit />, purpose_pt: "Frontend rápido para demonstração do protótipo.", purpose_en: "Fast frontend for prototype demonstration." },
            { name: "Database", icon: <FaDatabase />, purpose_pt: "Armazenamento de histórico de interações.", purpose_en: "Storage of interaction history." }
        ]
    }
];