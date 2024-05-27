document.addEventListener("DOMContentLoaded", function() {
    const profilePicture = "./assets/avatar.jpg"; // Adicione o caminho para a foto de perfil
    const name = "Simone Aparecida Barbieri De Albuquerque";
    const objective = "Busco oportunidades em uma empresa dinâmica onde posso aplicar minha experiência em gestão de equipe de vendas, desenvolvimento de marca e apresentação ao cliente para contribuir significativamente com o crescimento e sucesso da organização. Estou motivado a trabalhar em um ambiente colaborativo, onde possa liderar uma equipe motivada e apaixonada, alcançando resultados excepcionais e expandindo meu conhecimento na área.";
    const experienceAreas = `Gestão de equipe de vendas, Desenvolvimento de marca, Apresentação ao cliente.`;
    const experiences = [
        {
            company: "Letucce Confecções (Rua Tereza)",
            period: "Setembro 1995 a Março 1998",
            role: "Vendedora Balconista"
        },
        {
            company: "Mercadinho Corrêas",
            period: "Fevereiro 2007 a Janeiro 2012",
            role: "Operadora de Caixa, Balconista de Lanchonete (Delícias de Corrêas), Embalagem de Padaria"
        },
        {
            company: "Avon Cosméticos",
            period: "2016 a 2020",
            role: "Executiva de Vendas (Gerenciamento e atendimento a equipe de revendedoras)"
        },
        {
            company: "Mimos da Clara",
            period: "2020 a 2022",
            role: "Artesã, Costureira"
        },
        {
            company: "Diniz Rio / Rua Teresa (Roupas Masculinas) ",
            period: "",
            role: "Experiência Temporária"
        },
        {
            company: "Meu Dossiê",
            period: "Março 2023 a Maio 2024",
            role: "Gerente e Vendedora"
        }
    ];
    const educationData = [
        {
            degree: "Projeto Viva Rio-Telecurso",
            institution: "Escola Municipal Magdalena Tagliaferro",
            period: "Fevereiro 2004 a Dezembro 2004",
            details: "1º Grau Completo"
        }
    ];
    const hardSkills = [
        "Gestão de equipe de vendas",
        "Desenvolvimento de marca",
        "Apresentação ao cliente",
        "Operadora de Caixa",
        "Costureira"
    ];
    const softSkills = [
        "Trabalho em equipe",
        "Comunicação eficaz",
        "Gerenciamento de tempo"
        
    ];
    const contactData = {
        address: "Rua Pedro Gonçalves Lopes, 30, Bairro Roseiral, CEP 25715-180, Petrópolis, RJ",
        email: "simone.barbiery22@gmail.com",
        phone: "(32) 99161-0013"
    };

    document.getElementById("profile-picture").src = profilePicture;
    document.getElementById("name").textContent = name;
    document.getElementById("objective").textContent = objective;
    document.getElementById("experience-areas").textContent = experienceAreas;

    const experienceSection = document.getElementById("experience");
    experiences.forEach(exp => {
        const expDiv = document.createElement("div");
        expDiv.innerHTML = `<strong>${exp.company}</strong><br>${exp.period}<br>${exp.role}<br><br>`;
        experienceSection.appendChild(expDiv);
    });

    const educationSection = document.getElementById("education");
    educationData.forEach(data => {
        const educationDiv = document.createElement("div");
        educationDiv.innerHTML = `<strong>${data.degree}</strong><br>${data.institution} - ${data.period}<br>${data.details}<br><br>`;
        educationSection.appendChild(educationDiv);
    });

    const hardSkillsSection = document.getElementById("hard-skills");
    hardSkills.forEach(skill => {
        const skillItem = document.createElement("p");
        skillItem.textContent = skill;
        hardSkillsSection.appendChild(skillItem);
    });

    const softSkillsSection = document.getElementById("soft-skills");
    softSkills.forEach(skill => {
        const skillItem = document.createElement("p");
        skillItem.textContent = skill;
        softSkillsSection.appendChild(skillItem);
    });

    const contactSection = document.getElementById("contact");
    contactSection.innerHTML = `
        <p><strong>Endereço:</strong> ${contactData.address}</p>
        <p><strong>E-mail:</strong> <a href="mailto:${contactData.email}">${contactData.email}</a></p>
        <p><strong>Telefone:</strong> ${contactData.phone}</p>
    `;
});
