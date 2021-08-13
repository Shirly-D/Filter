var filterElem = document.querySelectorAll('.filter');
for (var i = 0; i < filterElem.length; i++){
    filterElem[i].addEventListener('click', function(e){
        if (this == e.target) {
            var elem = e.target.getAttribute('data-gallery');
            console.log(e.target);
            filter();
        }
    })
}

function filter() {
    var element = document.querySelectorAll('.filter-image');
    for (var j = 0; j < element.length; j++) {
        if ('data-gallery' == element,innerHTML) {
            element[j].className += "active";
        } else {
            element[j].className += "none";
        }
    }
}
















