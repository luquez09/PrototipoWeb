console.log('\'Allo \'Allo!');
 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {
        accordion: true,
        inDuration: 500
    });
  });
