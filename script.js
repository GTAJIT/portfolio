document.getElementById('check-icon').onclick = function() {
    const list = document.getElementById('page-list');
    if (list.style.display === 'none' || list.style.display === '') {
        list.style.display = 'flex';
      } else {
        list.style.display = 'none';
      }
};