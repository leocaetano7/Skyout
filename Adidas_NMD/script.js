// Seleciona todas as miniaturas
const thumbnails = document.querySelectorAll('.product-thumbnail');

// Seleciona a imagem principal
const mainImage = document.querySelector('.product-image-main');

// Seleciona os botões de rolagem
const scrollUpButton = document.getElementById('scroll-up');
const scrollDownButton = document.getElementById('scroll-down');

// Calcula o número total de miniaturas
const totalThumbnails = thumbnails.length;

// Define o índice inicial e o limite de miniaturas a serem exibidas
let startIndex = 0;
const limit = 4;

// Função para atualizar a visibilidade das miniaturas
function updateThumbnailsVisibility() {
    thumbnails.forEach((thumbnail, index) => {
        if (index >= startIndex && index < startIndex + limit) {
            thumbnail.style.display = 'inline-block'; // Exibe a miniatura se estiver dentro do limite
        } else {
            thumbnail.style.display = 'none'; // Oculta a miniatura se estiver fora do limite
        }
    });
}

// Função para remover a classe 'selected-thumbnail' de todas as miniaturas
function removeSelectedThumbnailClass() {
    thumbnails.forEach(thumbnail => {
        thumbnail.classList.remove('selected-thumbnail');
    });
}

// Adiciona ouvintes de evento de clique a cada miniatura
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        // Remove a classe 'selected-thumbnail' de todas as miniaturas
        removeSelectedThumbnailClass();

        // Adiciona a classe 'selected-thumbnail' apenas à miniatura clicada
        thumbnail.classList.add('selected-thumbnail');

        // Obtém o caminho da imagem da miniatura clicada
        const imagePath = thumbnail.getAttribute('data-image');

        // Atualiza o src da imagem principal com o caminho da imagem da miniatura clicada
        mainImage.setAttribute('src', imagePath);
    });
});

// Adiciona ouvintes de evento de clique aos botões de rolagem (não precisa ser alterado)

// Inicializa a visibilidade das miniaturas
updateThumbnailsVisibility();