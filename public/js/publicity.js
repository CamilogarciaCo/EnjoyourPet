/*
$(document).ready(function(){
    resizeAds();
    });
    $( window ).resize(function() {
    resizeAds();
    });
    $(document).scroll(function() {
    checkOffsetAds();
    });
    function checkOffsetAds() {
    if($('#adlateral1').offset().top + $('#adlateral1').height() >= $('#footer').offset().top - 10){
    $('#adlateral1').css('position', 'absolute');
    }
    if($('#adlateral2').offset().top + $('#adlateral2').height() >= $('#footer').offset().top - 10){
    $('#adlateral2').css('position', 'absolute');
    }
    if($(document).scrollTop() + window.innerHeight < $('#footer').offset().top){
    $('#adlateral1').css('position', 'fixed');
    $('#adlateral2').css('position', 'fixed');
    }
    }
    function resizeAds(){
    var anchoPantalla = $( document ).width();
    var disponibleAds = anchoPantalla - 1170;
    var disponibleAd = disponibleAds / 2;
    var margenAds = (disponibleAd - 160) / 2;
    $("#adlateral1").css("margin-left",margenAds+"px");
    $("#adlateral2").css("margin-right",margenAds+"px");
    }
    */