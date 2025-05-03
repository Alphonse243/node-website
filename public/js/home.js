// Choisir type aleatoire
function choisirTypeAleatoire(){
	const mots = ["women","men","watches","tec"];
	const indexAleatoire = Math.floor(Math.random() * mots.length);
	return mots[indexAleatoire];
}

function choisirTypeAleatoireChiffre(){
	return Math.floor(Math.random()*9) + 1;
}

// Devise 
function DetermineDevise(deviseCode){
	if(deviseCode === 'USD'){
		return '$';
	}else{
		return 'FC';
	}
}
	const apiUrlCategorie = 'http://localhost/karma-master/api/commerce/getCategory.php';

	async function fetchDataCategorie() {
        try {
            const response = await fetch(apiUrlCategorie);
            const data = await response.json();

            const resultatsContainer = document.getElementById('categorie-all');
            
            // Boucle pour afficher chaque élément sous forme de carte
            data.slice(0, 20).forEach(item => {
				
				const  categorie = choisirTypeAleatoire();
				const NumberImage = choisirTypeAleatoireChiffre();
				const devise = DetermineDevise(item.devise);
				const dataFilter = '.'+item.slug;
				
                const card = document.createElement('div');
                card.className = `flex-w flex-l-m filter-tope-group m-tb-10`;
                card.innerHTML = `
				
					<button class="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".${item.slug}">
						${item.name}
					</button>
				
				`;
                resultatsContainer.appendChild(card);
            });
        } catch (error) {
            console.error('Erreur lors de la récupération des données:', error);
        }
    }
	// <button class="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".women">
	// 	Women
	// </button>


	fetchDataCategorie();


const apiUrl = 'http://localhost/karma-master/api/commerce/produitsApi.php?take=30';

    async function fetchData() {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            const resultatsContainer = document.getElementById('resultats');
            
            // Boucle pour afficher chaque élément sous forme de carte
            data.slice(0, 30).forEach(item => {
				
				const  categorie = choisirTypeAleatoire();
				const NumberImage = choisirTypeAleatoireChiffre();
				const devise = DetermineDevise(item.devise);
				
                const card = document.createElement('div');
                card.className = `col-sm-6 col-md-4 col-lg-3 col-6 p-b-35 isotope-item ${item.category.slug} `;
                card.innerHTML = `
                    
                    <div class="block2">
						<div class="block2-pic hov-img0 label-new" data-label="${item.nature} ">
							<img src="images/product-0${NumberImage}.jpg" alt="IMG-PRODUCT">

							<a href="#" class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
								voir
							</a>
						</div>

						<div class="block2-txt flex-w flex-t p-t-14">
							<div class="block2-txt-child1 flex-col-l ">
								<a href="details" class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
									${item.title} | ${item.category.slug}  <strong>${categorie}</strong>
								</a>

								<span class="stext-105 cl3">
									${item.prix}<strong>${devise}</strong>
								</span>
								<span class="stext-105 cl3">
									<strong>${item.user.name}</strong>
								</span>
							</div>

							<div class="block2-txt-child2 flex-r p-t-3">
								<a href="#" class="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
									<img class="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON">
									<img class="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON">
								</a>
							</div>
						</div>
					</div>
                `;
                resultatsContainer.appendChild(card);
            });
        } catch (error) {
            console.error('Erreur lors de la récupération des données:', error);
        }
    }

fetchData();
    