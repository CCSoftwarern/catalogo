document.addEventListener('DOMContentLoaded', function() {
    const cardContainer = document.getElementById('card-container');
    
    const cardData = [
      { title: 'Card 1', text: 'Descrição do Card 1', imgSrc: 'https://i2.wp.com/blog.connectplug.com.br/wp-content/uploads/2018/01/como-decorar-uma-loja-de-roupas-e1522869386918.jpg' },
      { title: 'Card 2', text: 'Descrição do Card 2', imgSrc: 'https://via.placeholder.com/300x200' },
      { title: 'Card 3', text: 'Descrição do Card 3', imgSrc: 'https://via.placeholder.com/300x200' },
      { title: 'Card 4', text: 'Descrição do Card ', imgSrc: 'https://via.placeholder.com/300x200' },
    ];
    
    for (let i = 0; i < cardData.length; i++) {
      const card = document.createElement('div');
      card.className = 'col-md-4 mb-4';
      card.innerHTML = `
        <div class="card">
          <img class="card-img-top" src="${cardData[i].imgSrc}" alt="Imagem do ${cardData[i].title}">
          <div class="card-body">
            <h5 class="card-title">${cardData[i].title}</h5>
            <p class="card-text">${cardData[i].text}</p>
            <a href="#" class="btn btn-primary">Mais detalhes</a>
          </div>
        </div>
      `;
      cardContainer.appendChild(card);
    }
  });

  
  