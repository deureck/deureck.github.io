function ComponeteProjetos(data) {
    const container = document.querySelector(".projetos_container");
    data.forEach(element => {
        const a = document.createElement("a");
        const div = document.createElement("div");


        a.appendChild(div);
        a.href = element.link;
        a.style.textDecoration = "none";


        div.className = "projeto_card";
        div.style.backgroundImage = `url("${element.image}")`;
        div.style.backgroundSize = "cover";
        div.style.backgroundPosition = "center";
        div.innerHTML = `
        <h2 class="projetos_title">${element.title}</h2>
        `;
        container.appendChild(a);
    });
}


function ComponenteExperiencias(data) {
    const container = document.querySelector(".experiencias_container");
    data.forEach(element => {
        const div = document.createElement("div");
        div.className = "experiencia_card";
        div.innerHTML = `
        <h2 class="experiencia_title">${element.title}</h2>
        <p class="experiencia_empresa">${element.empresa}</p>
        <p class="experiencia_data">${element.data_inicio}|${element.data_fim}</p>
        <p class="experiencia_descricao">${element.descricao}</p>   
        `;
        const div_palavra_chave = document.createElement("div");
        div_palavra_chave.className = "experiencia_palavra_chave";
        element.palavras_chave.forEach(element => {
            const div_palavras_chaves = document.createElement("div");
            div_palavras_chaves.className = "experiencia_palavras_chaves";
            div_palavras_chaves.innerHTML = element;
            div_palavra_chave.appendChild(div_palavras_chaves);
        });
        div.appendChild(div_palavra_chave);
        container.appendChild(div);

    });
}



async function CarregarJSON(text) {
    const response = await fetch(text);
    const data = await response.json();
    return data;
}




CarregarJSON("assents/json/projetos.json").then(data => {
    console.log(data);
    ComponeteProjetos(data)
});


CarregarJSON("assents/json/experiencias.json").then(data => {
    console.log(data);
    ComponenteExperiencias(data)
});








