/**
 * Created by llj on 2015/8/20.
 */
$(function () {
    var currentstep = 1;
    var step=$(".step");
    $('button[name="next"]').click(function () {
        if(currentstep>step.length-1){
            return;
        }
        $(step[currentstep]).addClass("clicked");
        $($("p")).replaceWith("<p>" + (currentstep + 1) + "</p>");
        currentstep++;
    });
    $('button[name="prev"]').click(function () {
        if(currentstep<1){
            return;
        }
        $(step[currentstep-1]).removeClass("clicked");
        $($("p")).replaceWith("<p>" + (currentstep - 1) + "</p>");
        currentstep--;
    });
});