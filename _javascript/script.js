//----------------------------------------------------//
//                                                    //
//                     // SCRIPT //                   //
//                     _script.js                     //
//----------------------------------------------------//


/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Permet d'animer (ouverture et fermeture) le panneau du 
 * menu mobile
 * 
 */
function toggleNav(p){
    $(p).toggleClass('nav-close');
    $(p).toggleClass('nav-open');
}

/* * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Gestion des évènements d'interaction
 * 
 */
$(function(){
    if($('.nav-wrapper').hasClass('estNav')){
        $('.menu-bars').on('focus', function(){
            toggleNav('.nav-wrapper');
        });
        $('.menu-bars').on('blur', function(){
            toggleNav('.nav-wrapper');
            $(this).removeAttr('style');
        });
    } 
});