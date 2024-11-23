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
    document.body.classList.toggle("dark-mode");

    // Atualiza os elementos específicos
    document.querySelector("footer").classList.toggle("dark-mode");
    document.querySelector(".contact").classList.toggle("dark-mode");
    document.querySelector("aside").classList.toggle("dark-mode");

    // Adiciona logs para depuração (opcional)
    console.log("Modo escuro alternado!");
}

// Carregar mais notícias ao clicar no botão
document.getElementById("loadMoreBtn").addEventListener("click", function() {
    const newArticle = document.createElement("article");
    newArticle.classList.add("news");
    newArticle.innerHTML = `
        <h2>Novos Avanços na Inteligência Artificial</h2>
            <p class="date">06 de Novembro de 2024</p>
            <p>A inteligência artificial tem avançado de forma acelerada, com novos algoritmos sendo desenvolvidos a cada mês. Descubra o que há de mais recente no campo da IA...</p>
            <a href="#" class="read-more" data-video="https://www.youtube.com/embed/dQw4w9WgXcQ">Leia mais</a>
        <div class="video-container"></div>
    `;
    document.querySelector(".content").appendChild(newArticle);
    this.style.display = "none"; // Esconde o botão depois de carregar mais notícias
});

// Adiciona o evento de clique para alternar entre os temas
const themeToggleBtn = document.createElement("button");
themeToggleBtn.textContent = "Alternar Modo Escuro";
themeToggleBtn.onclick = toggleDarkMode;
document.querySelector("header").appendChild(themeToggleBtn);


// -------------

document.addEventListener('DOMContentLoaded', () => {
    const readMoreLinks = document.querySelectorAll('.read-more');

    readMoreLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            const videoUrl = link.getAttribute('data-video');
            const videoContainer = link.nextElementSibling;

            if (!videoUrl) {
                console.error('URL do vídeo não encontrada no atributo data-video.');
                return;
            }

            // Verifica se o vídeo já está carregado
            if (videoContainer.innerHTML.trim() === '') {
                videoContainer.innerHTML = `
                    <iframe 
                        src="${videoUrl}" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>`;
                videoContainer.style.display = 'block';
            } else {
                // Remove o vídeo se já estiver carregado (alternar exibição)
                videoContainer.innerHTML = '';
                videoContainer.style.display = 'none';
            }
        });
    });
});

// dark mode

