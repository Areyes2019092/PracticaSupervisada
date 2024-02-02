document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('ventana-agregar-contacto');
    var btn = document.getElementById('agregar-contacto');
    var span = document.getElementsByClassName('close')[0];

    btn.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    span.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('ventana-info-usuario-modal');
    var btn = document.getElementById('info-usuario-modal');
    var span = document.getElementsByClassName('close')[1];

    btn.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    span.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});




``





