//
//$('#bio-container').hide().fadeIn(1000);
//$('#clean').hide().fadeIn(function()
//{
//$('#ampersand').fadeIn(1000)
//}, 1000);

/**
Banner text Fade In Entrance
*/
//$('#clean').hide();
//$('#ampersand').hide();
//$('#bold').hide();
//$('#links_title').hide();
//$('#portfolio_btn').hide();
//$('#clean').fadeIn(1000, function()
//{
//    $('#ampersand').hide().fadeIn(1000, function()
//    {
//        $('#bold').hide().fadeIn(1000, function()
//        {
//        
//            $('#links_title').hide().fadeIn(500);
////            $('#portfolio_btn').hide().fadeIn(500);
//        });
//    });
//});

$('.logo').hide(); 
$('#links_title').hide(); 
$('.fadeInContent').hide(); 
$('.fadeInContent').fadeIn(1500);
$('.logo').fadeIn(1500, function()
{
$('#links_title').fadeIn(1000);
});

var vid = document.getElementById("hometownVid");


$(document).on('click','#replayHometown',function(){
    document.getElementById("replayHometown").innerHTML = "Play";
    vid.pause();
    vid.currentTime = '0';
    vid.play();
});


  document.getElementById('hometownVid').addEventListener('ended',handle,false);
    function handle(e) {
        document.getElementById("replayHometown").innerHTML = "Replay";
    }

