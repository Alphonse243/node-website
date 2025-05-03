function displayProduitIdFromUrl(){
    const paramElement = document.getElementById('param');
    // Verifier si l'element avec id param existe
    if(!paramElement){
        console.error("Error : aucun element avec ce ID param trouver");
        return;
    }
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    if(productId !== null){
        paramElement.textContent = productId;
    }else{
        console.warn("averntisement : le paramaetre id n'a pas ete trouver dans URL");
        paramElement.textContent = "ID non specifier";
    }
}
displayProduitIdFromUrl();

