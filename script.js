window.onload = function(){
    var elements = document.getElementsByClassName("button");

    for(var i = 0; i< elements.length; i++){
        elements[i].addEventListener("mousemove", mouseHover);
        elements[i].addEventListener("mouseout", mouseunHover);
        elements[i].addEventListener("mousedown", mouseOnClick);
        elements[i].addEventListener("mouseup", mouseUnClick);

    }

    var button0 = document.getElementsByClassName("button0");
    button0[0].addEventListener("mousemove", mouseHover);
    button0[0].addEventListener("mouseout", mouseunHover);
    button0[0].addEventListener("mousedown", mouseOnClick);
    button0[0].addEventListener("mouseup", mouseUnClick);
}

function mouseHover(e){
    e.target.style.borderWidth = "2px";
    e.target.style.cursor ="pointer";
    e.target.style.userSelect = "none";

}

function mouseunHover(e){
    e.target.style.borderWidth = "0px";
    e.target.style.opacity = "1";
}

function mouseOnClick(e){
    e.target.style.opacity = "0.7";
}

function mouseUnClick(e){
    e.target.style.opacity = "1";
}
