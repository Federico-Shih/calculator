window.onload = function(){
    var elements = document.getElementsByClassName("button");

    for(var i = 0; i< elements.length; i++){
        elements[i].addEventListener("mousemove", mouseHovered);
        elements[i].addEventListener("mouseout", mouseHovered);

    }
}

function mouseHovered(e){
    e.target.style.borderWidth = "2px";
}

function mouseunHover(e){
    e.target.style.borderWidth = "0px";
}

