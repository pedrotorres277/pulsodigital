// Exibe um alerta de boas-vindas quando a página carrega
window.onload = function() {
    alert("Bem-vindo ao Pulso Digital! Fique por dentro das últimas notícias!");
};

// Função para alternar entre o modo claro e escuro
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    document.querySelector("header").classList.toggle("dark-mode");
    document.querySelector("h1").classList.toggle("dark-mode");
    document.querySelector("h2").classList.toggle("dark-mode");
    document.querySelector("h3").classList.toggle("dark-mode");
    document.querySelector("p").classList.toggle("dark-mode");
    const newsItems = document.querySelectorAll(".news");
    newsItems.forEach(function(item) {
        item.classList.toggle("dark-mode");
    });
}

// Carregar mais notícias ao clicar no botão
document.getElementById("loadMoreBtn").addEventListener("click", function() {
    const newArticle = document.createElement("article");
    newArticle.classList.add("news");
    newArticle.innerHTML = `
        <h2>Nova Atualização sobre o Sistema Operacional X</h2>
        <p class="date">04 de Novembro de 2024</p>
        <p>O sistema operacional X acaba de receber uma grande atualização, com melhorias de desempenho e novos recursos...</p>
        <a href="#">Leia mais</a>
    `;
    document.querySelector(".content").appendChild(newArticle);
    this.style.display = "none"; // Esconde o botão depois de carregar mais notícias
});

// Adiciona o evento de clique para alternar entre os temas
const themeToggleBtn = document.createElement("button");
themeToggleBtn.textContent = "Alternar Modo Escuro";
themeToggleBtn.onclick = toggleDarkMode;
document.querySelector("header").appendChild(themeToggleBtn);
