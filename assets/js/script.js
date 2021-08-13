var filterElem = document.querySelectorAll('.filter');
for (var i = 0; i < filterElem.length; i++){
    filterElem[i].addEventListener('click', function(e){
        if (this == e.target) {
            var elem = e.target.getAttribute('data-gallery');
            console.log(filterElem);
        }
    })
}

function filter() {
    var element = document.querySelectorAll('.filter-image');
    for (var j = 0; j < element.length; j++) {
        if (element.innerHTML == getAttribute('data-gallery')) {
            element[j].className += "active";
        } else {
            
        }
    }
}
















