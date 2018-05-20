window.onload = init;
window.onclick = function(event) {
    
    for(var i=0;i<3;i++){
        if(event.target === modals[i]){
            console.log('Enter?');
            closeModal();
        }
    
    }
    
}

var images = ['.img1', '.img2', '.img3'];
var bg = document.querySelector('.full');
var modals = document.querySelectorAll('.modal');
var closes = document.querySelectorAll('.close');
var ozzyContainer = document.querySelector('.ozzy-map-clickableArea');

function init(){

    bg.addEventListener("mouseenter", (event) => { dim(); });
    bg.addEventListener("mouseleave", (event) => { unDim(); });
    bg.addEventListener('click', () => {closeModal();});
    //ozzyContainer.addEventListener('click', () => {closeModal();});

    images.forEach( (selector, i) => {
        var elem = document.querySelector(selector);

        ( (i) => {
            console.log('selector : ' + selector);
            elem.addEventListener('mouseenter', (event) => { dim(i); });
            elem.addEventListener('click',(event) => {showModal(i);});
        } )(i);
        elem.addEventListener('mouseleave', () => {	unDim(i); });
        closes[i].addEventListener('click', () => {closeModal();});
		modals[i].addEventListener('click', () => {closeModal();});
    });	
    


}

function dim(index) {
    bg.classList.add('full--dim');
    images.forEach((selector, i) => {
        var elem = document.querySelector(selector);
        //console.log('Dim! selector : ' + selector + ' ' + 'index : ' + index + ' ' + 'i : ' + i);
        if (index >= 0 && index === i) {
            elem.classList.remove('partial--vanish'); // index === chosen img
        } else {
            elem.classList.add('partial--vanish');
        }
    });
}

function unDim() {
    bg.classList.remove('full--dim');
    
    images.forEach((selector) => {
        var elem = document.querySelector(selector);
        elem.classList.remove('partial--vanish');
    });
}

function showModal(index) {
    
    console.log('index : '+index);
    if(index === 0){
        // text1 visivble 
        document.getElementById('modal-sec1').style.display = 'block';
    }else if(index === 1){
        // text2 visible
        document.getElementById('modal-sec2').style.display = 'block';
    }else{
        // text3
        document.getElementById('modal-sec3').style.display = 'block';
    }
}

function closeModal() {
    var allModals = document.querySelectorAll('.modal');

    if(isModal()){
        for(var i=0; i< allModals.length;i++){
            allModals[i].style.display = 'none';
        }
    }
}

function isModal() {
    var allModals = document.querySelectorAll('.modal');

    for(var i=0; i< allModals.length;i++){
        if(allModals[i].style.display === 'block'){
            console.log(allModals[i].style.display);
            return true;
        }
    }
    return false;
}
