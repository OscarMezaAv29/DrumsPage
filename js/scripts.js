// navbar init

document.addEventListener('DOMCOntentLoad', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
    console.log(instances);
})

// carousel init

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
  });

  var options = {
    indicator: true,
    numVisible: 5,
    padding: 15
  }