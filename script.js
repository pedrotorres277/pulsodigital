// Exibe um alerta de boas-vindas quando a página carrega
window.onload = function() {
    alert("Bem-vindo ao Pulso Digital! Fique por dentro das últimas notícias!");
};

// Função para alternar entre o modo claro e escuro
function toggleDarkMode() {
    const elements = [
        document.body,
        document.querySelector("header"),
        document.querySelector("h1"),
        document.querySelector("h2"),
        document.querySelector("h3"),
        document.querySelector("p"),
        document.querySelector("footer"),
        document.querySelector(".contact"),
        document.querySelector("aside"),
    ];

    elements.forEach(el => el?.classList.toggle("dark-mode")); // Verifica se o elemento existe antes de alternar
    document.querySelectorAll(".news").forEach(item => item.classList.toggle("dark-mode"));

    console.log("Modo escuro alternado!");
}


// Carregar mais notícias ao clicar no botão
document.getElementById("loadMoreBtn").addEventListener("click", function() {
    const newArticle = document.createElement("article");
    newArticle.classList.add("news");
    newArticle.innerHTML = `
        <h2>Novos Avanços na Inteligência Artificial</h2>
            <p class="date">25 de Novembro de 2024</p>
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

            let videoUrl = link.getAttribute('data-video');
            const videoContainer = link.nextElementSibling;

            if (!videoUrl) {
                console.error('URL do vídeo não encontrada no atributo data-video.');
                return;
            }

            // Ajusta a URL para o formato embed, se necessário
            if (videoUrl.includes("youtu.be")) {
                videoUrl = videoUrl.replace("youtu.be", "www.youtube.com/embed");
            }

            if (!videoContainer.innerHTML.trim()) {
                videoContainer.innerHTML = `
                    <iframe 
                        src="${videoUrl}" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>`;
                videoContainer.style.display = 'block';
            } else {
                videoContainer.innerHTML = '';
                videoContainer.style.display = 'none';
            }
        });
    });
});


// dark mode

