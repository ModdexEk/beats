$('.work__player').height($('.work__player').width()/(16/9));
	
	
$(window).resize(function(){
    $('.work__player').height($('.work__player').width()/(16/9));
});

let player;
const playerContainer = $(".player");

let eventsInit = () => {
    $('.player__play').click( e => {
        e.preventDefault();

        if (playerContainer.hasClass("paused")) {
            player.pauseVideo();
         } else {
            player.playVideo();
         }
    })
}

$(".player__track").click(e => {
   const track = $(e.currentTarget);
   const clickedPosition = e.originalEvent.layerX;
   const newButtonPositionPercent = (clickedPosition / track.width()) * 100;
   const newPlaybackPositionSec =
     (player.getDuration() / 100) * newButtonPositionPercent;
 
   $(".player__playback-button").css({
     left: `${newButtonPositionPercent}%`
   });
 
   player.seekTo(newPlaybackPositionSec);
});
 
$(".player__splash").click(e => {
   player.playVideo();
});

$(".player__volume-icon").on('click', () => {
    let isMuted = player.isMuted()
    if (!isMuted) {
        player.mute();

        $(".player__volume-btn").css({
            left: '0'
        });

    } else {
        player.unMute();
        const volumeAfterMute = player.getVolume();
        $(".player__volume-btn").css({
            left: `${volumeAfterMute}%`
        });
        $(".player__volume-cur").css({
            width: `${volumeAfterMute}%`
        });
    }
});

$('.player__volume-track').click(e => {
    const track = $(e.currentTarget);
    const clickedPos = e.originalEvent.layerX;
    const newBtnPosPercent = (clickedPos / track.width() * 100);
    const newVolumePosSec = newBtnPosPercent;

        $(".player__volume-btn").css({
            left: `${newBtnPosPercent}%`
        });
        $(".player__volume-cur").css({
            width: `${newBtnPosPercent}%`
        });
  
    player.setVolume(newVolumePosSec);
})




const onPlayerReady = () => {
    let interval;
    const durationSec = player.getDuration();
    
    
    if (typeof interval !== "undefined") {
        clearInterval(interval);
    }

    const currentVolume = player.getVolume();
    
    $('.player__volume-btn').css({
        left: `${currentVolume}%`
    });
    $('.player__volume-cur').css({
        width: `${currentVolume}%`
    });
    
    interval = setInterval(() => {
        const completedSec = player.getCurrentTime();
        const completedPercent = (completedSec / durationSec) * 100;

        $('.player__slider').css({
            left: `${completedPercent}%`
        });
        
        $('.player__track-cur').css({
            width: `${completedPercent}%`
        });
     }, 1);
}

const onPlayerStateChange = event => {

    switch (event.data) {
      case 1:
         playerContainer.addClass("active");
         playerContainer.addClass("paused");
         break;
    
      case 2:
         playerContainer.removeClass("active");
         playerContainer.removeClass("paused");
         break;
    }
};

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: '7jy8CJTCY-8',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        },
        playerVars: {
            controls: 0,
            disablekb: 0,
            showinfo: 0,
            rel: 0,
            autoplay: 0,
            modestbranding: 0
        }
    });
}

eventsInit();
