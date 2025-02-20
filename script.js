document.addEventListener("DOMContentLoaded", function() {
    // Função para mostrar/ocultar seções
    function showSection(sectionId) {
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(sectionId).classList.add('active');
    }

    // Adicionar event listeners aos botões de navegação
    document.querySelectorAll('.nav-button').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = button.getAttribute('data-section');
            showSection(targetSection);
        });
    });

    function ajustarLayout() {
        const container = document.getElementById("container");
        container.innerHTML = ""; // Limpa o container antes de recriar os projetos

        const projetos = [
            { nome: "Projeto Casa do Lago", descricao: "Projeto de treinamento da Growarq", imagem: "assets/Casa do lago.png", link: "https://autode.sk/3QkICWu" },
            { nome: "Predio Residencial de 10 pavimentos", descricao: "Arquitetura básica e projeto elétrico de um prédio com apartamentos típicos, garagem e cobertura", imagem: "assets/Prédio com 10 pavimentos.png", link: "https://autode.sk/4k177Fu" },
            { nome: "Gerador Sustentável para Praça - Presidente Kenneddy - ES", descricao: "Projeto Conceitual de uma estrutura de gerador fotovoltaico utilizando os telhados de estruturas públicas e projeto de telhados solares de estacionamento ao redor da praça", imagem: "assets/Carport Kennedy.jpg", link: "https://autode.sk/4i4Uckb"},
        ];

        projetos.forEach(projeto => {
            const divProjeto = document.createElement("div");
            divProjeto.classList.add("projeto");

            divProjeto.innerHTML = `
                <h2>${projeto.nome}</h2>
                <p>${projeto.descricao}</p>
                <img src="${projeto.imagem}" alt="Imagem do ${projeto.nome}" class="exemplo-imagem">
                <a href="${projeto.link}" target="_blank" class="botao-link">Acessar Projeto 3D</a>
            `;

            container.appendChild(divProjeto);
        });
    }

        // Seção de Experiência
        const experienciaContainer = document.getElementById("experiencia");
        experienciaContainer.innerHTML = `
            <h2>Experiência Profissional</h2>
            <div class="experiencia-item">
                <h3>Green Matrix Partners | Engenheiro Eletricista</h3>
                <p class="periodo">Nov 2024 - Atualmente (Consultor em meio período)</p>
                <ul>
                    <li>Entrega de 40 planos em 15 dias para 3 usinas totalizando 1,9 GW de geradores solares e sistemas de baterias.</li>
                </ul>
            </div>
            <div class="experiencia-item">
                <h3>AtBim | Modelador BIM - MEP</h3>
                <p class="periodo">Set 2024 - Out 2024</p>
                <ul>
                    <li>Responsável pela revisão e modelagem de um berçário de corais anexo ao projeto "The Line" na Arábia Saudita, assegurando compliance com normas ambientais de sustentabilidade e normas técnicas de segurança.</li>
                    <li>Entrega de plantas: Elétrica de baixa tensão, elétrica de média tensão, CCTV e segurança, Tráfego e codificação, utilizando Revit e suas ferramentas para garantir eficiência e segurança dos projetos.</li>
                </ul>
            </div>

                        <div class="experiencia-item">
                <h3>RRC Companies | Engenheiro Elétrico - Designer II</h3>
                <p class="periodo">Mar 2023 - Ago 2024</p>
                <ul>
                    <li>Projetei seis usinas fotovoltaicas e eólicas de larga escala, superando 1 GW projetados e instalados</li>
                    <li>Implementei a metodologia BIM, reduzindo o tempo de elaboração de projetos conceituais em 50% através do uso eficiente do
                    Revit, padronização e automação de ferramentas e projetos.
                </li>
                </ul>
            </div>
            <div class="experiencia-item">
                <h3>GENA | Engenheiro Eletricista</h3>
                <p class="periodo">Ago 2022 - Mar 2023</p>
                <ul>
                <li>Responsável por mais de 40 projetos conceituais e orçamentos para usinas fotovoltaicas a partir de 20 kWp, utilizando análise de
                risco, definição de escopo de projeto, viabilidade e alinhamento com as necessidades do cliente.
                </li>
                <li>Melhorias de sistema de monitoramento pós vendas, transformando um sistema reativo em um sistema proativo, reduzindo a média
                de atendimento de 15 dias para 2 dias.
                </li>
                </ul>
            </div>
            <div class="experiencia-item">
                <h3>Alexandria | Engenheiro Eletricista Junior</h3>
                <p class="periodo">Apr 2022 - Jul 2022</p>
                <ul>
                <li>Participei do design de 3 usinas solares totalizando 12 MW de capacidade instalada, utilizando métodos eficientes do Revit e
                criando documentação com XeLateX.
                </li>
                <li>Criação de documentos e planilhas padronizados para inserção de dados e memoriais descritivos.
                </li>
                </ul>
            </div>    
                        <div class="experiencia-item">
                <h3>Automatech Solutions | Engenheiro Eletricista Junior</h3>
                <p class="periodo">May 2019 - Apr 2022</p>
                <ul>
                <li>Design, implementação e homologação de sistemas fotovoltaicos residenciais e comerciais utilizando AutoCAD e PVsyst para
                designs inteligentes e eficientes
                </li>
                <li>Gerenciei equipes de instalação e manutenção, garantindo entrega de projetos dentro do cronograma e manutenção de sistemas
            fotovoltaicos e de monitoramento garantindo satisfação dos clientes.
                </li>
                </ul>
            </div>        
        `;
        
        
        // Seção de Skills
        const skillsContainer = document.getElementById("skills");
        skillsContainer.innerHTML = `
            <h2>Competências</h2>
            <div class="skills-grid">
                <div class="skill-category">
                    <h3>Engenharia Elétrica</h3>
                    <ul>
                        <li>Projetos Elétricos</li>
                        <li>Energia Renovável</li>
                        <li>BIM</li>
                        <li>AutoCAD</li>
                        <li>Revit</li>
                        <li>Navisworks</li>
                        <li>PVSyst</li>
                        <li>Modelagem 3D, 4D e 5D</li>
                    </ul>
                </div>
                <div class="skill-category">
                    <h3>Programação e Tecnologia</h3>
                    <ul>
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>SAP</li>
                        <li>Dynamo</li>
                        <li>Inteligência Artificial</li>
                    </ul>
                </div>
                <div class="skill-category">
                    <h3>Gerenciamento de Projetos</h3>
                    <ul>
                        <li>Metodologias Ágeis</li>
                        <li>Gestão de Riscos</li>
                        <li>Definição de Escopo</li>
                        <li>Controle de Qualidade</li>
                    </ul>
                </div>
                <div class="skill-category">
                    <h3>Habilidades Interpessoais</h3>
                    <ul>
                        <li>Atendimento B2B e B2C</li>
                        <li>Soluções proativas</li>
                        <li>Atendimento personalizado</li>
                    </ul>
                </div>
            </div>
        `;
    // Seção de Certificações
    const certificacoesContainer = document.getElementById("certificacoes");
    certificacoesContainer.innerHTML = `
        <h2>Certificações e Cursos</h2>
        <div class="certificacoes-grid">
            <div class="certificacao-item">
                <h3>BIM e Modelagem</h3>
                <ul>
                    <li>BIM: Implementação - ENAP</li>
                    <li>Desmistificando BIM - Udemy</li>
                    <li>Revit MEP - Projetos Residenciais - BIM Studio</li>
                    <li>Curso Completo de 4D e coordenação executiva de obras - VMB</li>
                </ul>
            </div>
            <div class="certificacao-item">
                <h3>Energia e Automação</h3>
                <ul>
                    <li>Especialista em energia solar - Soliens</li>
                    <li>Especialista em Smart Houses - Soliens</li>
                    <li>Projetos Elétricos Residenciais - Udemy</li>
                </ul>
            </div>
            <div class="certificacao-item">
                <h3>Programação e IA</h3>
                <ul>
                    <li>Começando em Programação - Alura</li>
                    <li>Lógica de Programação: mergulhe em programação com JavaScript - Alura</li>
                    <li>Ciência de dados, inteligência artificial e Python - Samsung Ocean & UFAM</li>
                    <li>AI for Everyone - DeepLearning.AI</li>
                </ul>
            </div>
            <div class="certificacao-item">
                <h3>Gestão</h3>
                <ul>
                    <li>Gerenciamento de Projetos - Rice University</li>
                </ul>
                                <ul>
                    <li>Formação em Marketing Digital: USP</li>
                </ul>
            </div>
        </div>
    `;
        //seção de certificações

    // Inicialização
    ajustarLayout();
    showSection('projetos'); // Mostrar seção inicial
    window.addEventListener("resize", ajustarLayout);
});