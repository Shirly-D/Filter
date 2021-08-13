var elem = document.querySelectorAll('.filter-elem');
for (var i = 0; i < elem.length; i++) {
    elem[i].addEventListener('click', function(e){
        if (this == e.target) {
       var gallery = e.target.getAttribute("data-gallery");
    }
  });
}

function garden() {
    
}


















