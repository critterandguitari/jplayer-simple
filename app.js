
$(document).ready(function() {

    // init player
    $("#jquery_jplayer_1").jPlayer({
        ready: function(event) {
            $(this).jPlayer("setMedia", {
                wav: "./s1.wav"
            });
        },
        swfPath: "http://www.jplayer.org/2.1.0/js",
        supplied: "wav",
    });
	$("#jquery_jplayer_1").jPlayer("play", {});
});
