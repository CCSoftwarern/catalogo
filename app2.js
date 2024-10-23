document.addEventListener('DOMContentLoaded', function() {
    const cardContainer = document.getElementById('card-container');
  
    fetch('cardData.json')
      .then(response => response.json())
      .then(cardData => {
        cardData.forEach(cardInfo => {
          const card = document.createElement('div');
          card.className = 'col-md-4 mb-4';
          card.innerHTML = `
            <div class="card">
              <img class="card-img-top" src="${cardInfo.imgSrc}" alt="Imagem do ${cardInfo.title}">
              <div class="card-body">
                <h5 class="card-title">${cardInfo.title}</h5>
                <p class="card-text">${cardInfo.text}</p>
                <a href="#" class="btn btn-primary">Mais detalhes</a>
              </div>
            </div>
          `;
          cardContainer.appendChild(card);
        });
      })
      .catch(error => console.error('Erro ao carregar dados:', error));
  });
  