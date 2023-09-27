//voices
var audio;
$(document).ready(function(){
  $('#btn-submenu > a').on('click', function() {
    $('#btn-submenu').addClass('hidden');
    $('#btn-close').removeClass('hidden');
  });
  $('#btn-close > a').on('click', function() {
    $('#btn-submenu').removeClass('hidden');
    $('#btn-close').addClass('hidden');
    $(this).parents('header').toggleClass('open');
    $(this).parents('body').toggleClass('menu-open');
  });
  $(document).on('click', '#open-special-menu', function() {
    $('.special-menu').stop().slideToggle('fast');
    $("#special").toggleClass('upper');
  });

  if($("body#dragon").length > 0){

    //voice
    $(document).on("click",".voice a.play",function(){
      if(audio){
        audio.pause();
        audio = null;
        $(".voice a.stop").addClass("play").removeClass("stop");
      }

      var audioFile= $(this).attr("data-voicefile");

      audio = new Audio(audioFile);
      audio.play();
      $(audio).on("playing",function(){
        $(".voice a.play").addClass("stop").removeClass("play");
      });
      $(audio).on("ended",function(){
        if(audio){
          audio.pause();
          audio = null;
        }
        $(".voice a.stop").addClass("play").removeClass("stop");
      });

    });

    //STOP
    $(document).on("click",".voice a.stop",function(){
      if(audio){
        audio.pause();
        audio = null;
      }
        $(".voice a.stop").addClass("play").removeClass("stop");
    });
  }
  if($("body#character-detail").length > 0){

    //voice
    $(document).on("click",".voice a.play",function(){
      if(audio){
        audio.pause();
        audio = null;
        $(".voice a.stop").addClass("play").removeClass("stop");
      }

      var audioFile= $(this).attr("data-voicefile");

      audio = new Audio(audioFile);
      audio.play();
      $(audio).on("playing",function(){
        $(".voice a.play").addClass("stop").removeClass("play");
      });
      $(audio).on("ended",function(){
        if(audio){
          audio.pause();
          audio = null;
        }
        $(".voice a.stop").addClass("play").removeClass("stop");
      });

    });

    //STOP
    $(document).on("click",".voice a.stop",function(){
      if(audio){
        audio.pause();
        audio = null;
      }
        $(".voice a.stop").addClass("play").removeClass("stop");
    });
  }

  if($("body#gamesystem").length > 0){
    $('.cap1').addClass('active');
    /*クリックイベント*/
    $(".section3 .prev, .section3 .next").on('click', function (e) {
      e.preventDefault();
      $(".section3 .cap1").toggleClass('active');
      $(".section3 .cap2").toggleClass('active');
	});
	$(".section4 .prev, .section4 .next").on('click', function (e) {
      e.preventDefault();
      $(".section4 .cap1").toggleClass('active');
      $(".section4 .cap2").toggleClass('active');
    });

    var $yts = $("<script>");
    $yts.attr("src","https://www.youtube.com/iframe_api")
    $("head").append($yts);

  }
  if($("body#chart").length > 0){
    $('#chart-01').addClass('active');
    $('.tab2').addClass('active');
    /*クリックイベント*/
    $(".chart-tab .tab2").on('click', function () {
      $("#chart-01").removeClass('active');
      $("#chart-02").addClass('active');
      $(".tab2").removeClass('active');
      $(".tab1").addClass('active');
    });
    $(".chart-tab .tab1").on('click', function () {
      $("#chart-02").removeClass('active');
      $("#chart-01").addClass('active');
      $(".tab1").removeClass('active');
      $(".tab2").addClass('active');
    });
  }

});


var player;
if ($('html').attr('lang') === 'en' || $('html').attr('lang') === 'en-gb') {
	// 英語・欧州英語の場合、クッキーを無効化した状態で再生する
	var youtubeHost = "https://www.youtube-nocookie.com";
} else {
	var youtubeHost = "https://www.youtube.com";
}
function onYouTubeIframeAPIReady() {
  player = new YT.Player('main-cap', {
	videoId: $('#main-cap').data("youtube"),
	host: youtubeHost,
    playerVars: {
      height: "321",
      playsinline: 1,
      controls: 0,
      loop: 1,
      showinfo: 0,
      rel: 0
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onStateChange
    }
  });
}

function onPlayerReady(event) {
//  const player = event.target;

  player.mute();
  player.playVideo();
}

function onStateChange(event) {
  if(event.data == 0){
    player.playVideo();

  }
}

function d(){
  $(".debug-sheet").toggle();
}
