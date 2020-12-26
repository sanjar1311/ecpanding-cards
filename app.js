var panels = document.querySelectorAll('.panel');


panels.forEach(function(panel) {
  panel.addEventListener('click', function() {
    removeClassList();
    panel.classList.add('active');
  });
});

var removeClassList = function() {
  panels.forEach(function(panel) {
    panel.classList.remove('active');
  });
}