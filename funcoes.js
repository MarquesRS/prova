document.addEventListener('DOMContentLoaded', function() {
    const tableRows = document.getElementsByClassName('tbody__row');
    const modal = document.getElementById('modal-id');

    for (row of tableRows) {
        row.addEventListener('click', function() {
            modal.classList.add('--visible');
        });
    }
    
});

document.addEventListener('DOMContentLoaded', function() {
    const cancelButton = document.getElementById('cancel-button-id');
    const modal = document.getElementById('modal-id');

    cancelButton.addEventListener('click', function() {
        modal.classList.remove('--visible');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const cancelButton = document.getElementById('cancel-button-id');
    const modal = document.getElementById('modal-id');

    cancelButton.addEventListener('click', function() {
        modal.classList.remove('--visible');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const option = document.getElementById('services-option-id');
    const sublist = document.getElementById('services-sublist-id');

    option.addEventListener('click', function() {
        option.classList.toggle('--active');
        sublist.classList.toggle('--inactive');
    });
});





