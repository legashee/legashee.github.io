$(document).ready(function(){
        $('.burger-btn').click(function(event){
        $('.burger-btn').toggleClass('activebtn');
        $('.burger-menu').toggleClass('activebrg')
    });
});