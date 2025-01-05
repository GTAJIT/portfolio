const checkIcon = document.getElementById('check-icon');
const pageList = document.getElementById('page-list');

checkIcon.addEventListener('change', function () {
    if (checkIcon.checked) {
        pageList.style.display = 'flex'; 
    } else {
        pageList.style.display = 'none'; 
    }
});

document.addEventListener('click', function (event) {
    if (pageList.style.display === 'flex' && 
        !pageList.contains(event.target) && 
        event.target !== checkIcon && 
        !document.querySelector('label[for="check-icon"]').contains(event.target)) {
        pageList.style.display = 'none';
        checkIcon.checked = false; // Reset the checkbox state
    }
});
