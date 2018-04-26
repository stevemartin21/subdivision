
//  Lot Template


const btnAerial = document.getElementById('btnAerial');
const btnLot = document.getElementById('btnLot');
const btnView = document.getElementById('btnView');
const btnArea = document.getElementById('btnArea');
const btnSubdivision = document.getElementById('btnSubdivision');
const btnAllLot = document.getElementById('btnAllLot');

const aerial = document.querySelectorAll('.aerial');
const lot = document.querySelectorAll('.lot');
const view = document.querySelectorAll('.views');
const subdivision = document.querySelectorAll('.subdivision');
const area = document.querySelectorAll('.area');

btnAllLot.addEventListener('click', function(){

    for (i=0; i<aerial.length; i++){
        aerial[i].style.display ='block';
    }
     for (i=0; i<lot.length; i++){
        lot[i].style.display ='block';
    }

    for (i=0; i<view.length; i++){
        view[i].style.display ='block';
    }
    for (i=0; i<subdivision.length; i++){
        subdivision[i].style.display ='block';
    }
     for (i=0; i<area.length; i++){
        area[i].style.display ='block';
    }
});

btnLot.addEventListener('click', function(){

    for (i=0; i<aerial.length; i++){
        aerial[i].style.display ='none';
    }
     for (i=0; i<lot.length; i++){
        lot[i].style.display ='block';
    }

    for (i=0; i<view.length; i++){
        view[i].style.display ='none';
    }
    for (i=0; i<subdivision.length; i++){
        subdivision[i].style.display ='none';
    }
     for (i=0; i<area.length; i++){
        area[i].style.display ='none';
    }
});

btnAerial.addEventListener('click', function(){

    for (i=0; i<aerial.length; i++){
        aerial[i].style.display ='block';
    }
     for (i=0; i<lot.length; i++){
        lot[i].style.display ='none';
    }

    for (i=0; i<view.length; i++){
        view[i].style.display ='none';
    }
    for (i=0; i<subdivision.length; i++){
        subdivision[i].style.display ='none';
    }
     for (i=0; i<area.length; i++){
        area[i].style.display ='none';
    }
});

btnView.addEventListener('click', function(){

    for (i=0; i<aerial.length; i++){
        aerial[i].style.display ='none';
    }
     for (i=0; i<lot.length; i++){
        lot[i].style.display ='none';
    }

    for (i=0; i<view.length; i++){
        view[i].style.display ='block';
    }
    for (i=0; i<subdivision.length; i++){
        subdivision[i].style.display ='none';
    }
     for (i=0; i<area.length; i++){
        area[i].style.display ='none';
    }
});

btnArea.addEventListener('click', function(){

    for (i=0; i<aerial.length; i++){
        aerial[i].style.display ='none';
    }
     for (i=0; i<lot.length; i++){
        lot[i].style.display ='none';
    }

    for (i=0; i<view.length; i++){
        view[i].style.display ='none';
    }
    for (i=0; i<subdivision.length; i++){
        subdivision[i].style.display ='none';
    }
     for (i=0; i<area.length; i++){
        area[i].style.display ='block';
    }
});

btnSubdivision.addEventListener('click', function(){

    for (i=0; i<aerial.length; i++){
        aerial[i].style.display ='none';
    }
     for (i=0; i<lot.length; i++){
        lot[i].style.display ='none';
    }

    for (i=0; i<view.length; i++){
        view[i].style.display ='none';
    }
    for (i=0; i<subdivision.length; i++){
        subdivision[i].style.display ='block';
    }
     for (i=0; i<area.length; i++){
        area[i].style.display ='none';
    }
});



