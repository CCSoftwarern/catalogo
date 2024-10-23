// Função para carregar os cartões do arquivo JSON
async function loadCards() {
    try {
        const response = await fetch('cards.json');
        const cards = await response.json();
        displayCards(cards);
    } catch (error) {
        console.error('Erro ao carregar os cartões:', error);
    }
}

// Função para exibir os cartões na página
function displayCards(cards) {
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = ''; // Limpar o conteúdo anterior

    cards.forEach(card => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        cardDiv.innerHTML = `<h3>${card.title}</h3><p>${card.description}</p>`;
        cardContainer.appendChild(cardDiv);
    });
}

// Evento para adicionar um novo cartão
document.getElementById('addCardBtn').addEventListener('click', function() {
    const title = document.getElementById('cardTitle').value;
    const description = document.getElementById('cardDescription').value;

    if (title && description) {
        const newCard = { title, description };
        
        // Adiciona o novo cartão ao JSON (apenas no frontend para fins de demonstração)
        const cardContainer = document.getElementById('cardContainer');
        
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        cardDiv.innerHTML = `<h3>${newCard.title}</h3><p>${newCard.description}</p>`;
        cardContainer.appendChild(cardDiv);

        // Limpar os campos
        document.getElementById('cardTitle').value = '';
        document.getElementById('cardDescription').value = '';
    } else {
        alert('Por favor, preencha o título e a descrição do cartão.');
    }
});

// Carregar os cartões ao iniciar a página
loadCards();
