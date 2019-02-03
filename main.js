document.getElementById("add").addEventListener('click', function(){
    document.getElementById('form').classList.add('Active');
});
document.getElementById("btn-close").addEventListener('click', function(){
    document.getElementById('form').classList.remove('Active');
});

