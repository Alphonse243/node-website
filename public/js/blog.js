const apiUrl = 'http://localhost/karma-master/api/react-front/posts.php';

    async function fetchData() {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            const resultatsContainer = document.getElementById('resultats');
            
            // Boucle pour afficher chaque élément sous forme de carte
            data.slice(0, 10).forEach(item => {
                const card = document.createElement('div');
                card.className = 'p-b-63';
                card.innerHTML = `
                    
                    <a href="blog/detail" class="hov-img0 how-pos5-parent">
                        <img src="images/blog-04.jpg" alt="IMG-BLOG">
                        <div class="flex-col-c-m size-123 bg9 how-pos5">
                            <span class="stext-109 cl3 txt-center">
                                ${item.created_at}
                            </span>
                        </div>
                    </a>

                    <div class="p-t-32">
                        <h4 class="p-b-15">
                            <a href="blog-detail" class="ltext-108 cl2 hov-cl1 trans-04">
                                ${item.title}
                            </a>
                        </h4>

                        <p class="stext-117 cl6">
                            ${item.extret.substring(0, 80)}...
                        </p>

                        <div class="flex-w flex-sb-m p-t-18">
                            <span class="flex-w flex-m stext-111 cl2 p-r-30 m-tb-10">
                                <span>
                                    <span class="cl4">Par</span> ${item.user.name}  
                                    <span class="cl12 m-l-4 m-r-6">|</span>
                                </span>

                                <span>
                                    ${item.category.name}   
                                    <span class="cl12 m-l-4 m-r-6">|</span>
                                </span>

                                <span>
                                    ${item.comments_count}   Commentaire
                                </span>
                            </span>

                            <a href="blog/detail" class="stext-101 cl2 hov-cl1 trans-04 m-tb-10">
                                Continue Reading

                                <i class="fa fa-long-arrow-right m-l-9"></i>
                            </a>
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