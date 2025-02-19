document.addEventListener("DOMContentLoaded", function() {
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
                <a href="${projeto.link}" target="_blank" class="botao-link">Ver Projeto</a>
            `;

            container.appendChild(divProjeto);
        });

        if (window.innerWidth < 768) {
            document.body.classList.add("mobile");
            document.body.classList.remove("desktop");
        } else {
            document.body.classList.add("desktop");
            document.body.classList.remove("mobile");
        }
    }

    ajustarLayout();
    window.addEventListener("resize", ajustarLayout);
});