export default function loadscreen() {
    $("#page").hide();
    injectLoadbar();

    var currentProgress = {value: 0};

    function updateProgress() {
        currentProgress.value += Math.floor(Math.random() * 15);
        updateBarCss(currentProgress.value);

        if (currentProgress.value >= 100) {
            clearInterval(myTimer);
            $('#progressbar').html('100%');
            setTimeout(showPage, 300);
        }
    }

    var myTimer = setInterval(updateProgress, 150);
};



function showPage(readyState) {
    $("#load-container").fadeOut("slow");
    $("#page").fadeIn("slow");
}

function updateBarCss(value) {
    $('#progressbar').attr('aria-valuenow', value);
    $('#progressbar').css('width', value+'%');
    $('#progressbar').html(value+'%');

}

function injectLoadbar() {
    document.getElementById("load-container").innerHTML = '<div id="loading"> <div class="progress"> <div id="progressbar" class="progress-bar bg-success" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0;"></div> </div> </div> <div id="load-message"> <h3>Greatness is coming...</h3> </div>';
 }
