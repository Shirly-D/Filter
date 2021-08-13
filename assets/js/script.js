var filterElem = document.querySelectorAll('.filter');
for (var i = 0; i < filterElem.length; i++){
    filterElem[i].addEventListener('click', function(e){
        if (this == e.target) {
            var elem = e.target.getAttribute('data-gallery');
            console.log(filterElem);
        }
    })
}

















