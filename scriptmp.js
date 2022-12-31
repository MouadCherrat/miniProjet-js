


let element = document.getElementById('content1');


function creationcourses(image, titre, prix) {
// creation de la card(div)(1)
    let div = document.createElement('div'),
        img = document.createElement('img'),
        p = document.createElement('p'),
        span = document.createElement('span');


    img.src = image;
    p.appendChild(document.createTextNode(titre));
    span.appendChild(document.createTextNode(prix));
// pour le css
    div.setAttribute('class', 'card cards');
    img.setAttribute('class', 'image');
    p.setAttribute('class', 'card_text');
    span.setAttribute('class', 'card_text');


// remplir le div par (image,titreet prix)
    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(span);
// remplir la page (content1) par div
    element.appendChild(div);
}
//Pour lister les objets d array
courses.forEach(e => {
    creationcourses(e.image, e.title, e.price);
});

//Pour le input range de prix
let range = document.getElementById('range1');
let valeur = document.getElementById('priceValue');
function range2 () {
    valeur.textContent = (range.value);
}
//filtration par searchbar
const searchbar = document.getElementById('search');
const cards = document.querySelectorAll(".cards");
searchbar.addEventListener("keyup", (e) => {
    const searchedletter = e.target.value;
    // console.log(e.target.value) il affiche ce qu'on saisit en searchbar;
    cards.forEach((card) => {
        //console.log(card.textContent) il affiche toute les elements de type texte du card;
        if (card.textContent.indexOf(searchedletter) >= 0) {
            card.style.display = "block";//affichage 
        }
        else {
            card.style.display = "none";

        }
    })

})

function searchHtml() {
        var i;
        for (i=0;i<courses.length;i++){
           
        if(courses[i].category=="HTML"){
            
            cards[i].style.display="block";
        }
        else{
            cards[i].style.display="none";      
          }
    }
    
}
function searchCss(){
    var i;
    for (i=0;i<courses.length;i++){
       
    if(courses[i].category=="CSS"){
        
        cards[i].style.display="block";
    }
    else{
        cards[i].style.display="none";      
      }
}
}
function searchPhp(){
    var i;
    for (i=0;i<courses.length;i++){
       
    if(courses[i].category=="PHP"){
        
        cards[i].style.display="block";
    }
    else{
        cards[i].style.display="none";      
      }
}
}
function searchJs(){
    var i;
    for (i=0;i<courses.length;i++){
       
    if(courses[i].category=="JS"){
        
        cards[i].style.display="block";
    }
    else{
        cards[i].style.display="none";      
      }
}
}
function searchAll(){
    var i;
    for(i=0;i<courses.length;i++){
        cards[i].style.display="block";
    }
}
function filtreprix(){
    var i;
    for(i=0;i<courses.length;i++){
        if(courses[i].price<=range.value){
            cards[i].style.display="block";
        }
        else{
            cards[i].style.display="none";      
          }
    }
}
















