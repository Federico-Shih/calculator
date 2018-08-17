var isPreviousANumber = true;


window.onload = function(){
    var elements = document.getElementsByClassName("button");

    for(var i = 0; i< elements.length; i++){
        AddCssEvents(elements[i]); //cssEvents

        //logic events
        if(elements[i].className.split(" ").find(checkClass) == "number"){
            elements[i].addEventListener("mousedown", AddNumber);
        }
        
    }

    var button0 = document.getElementsByClassName("button0");
    button0[0].addEventListener("mousedown",AddNumber);
    AddCssEvents(button0[0]);
}

function checkClass(chosenClass){
    return chosenClass == "number";
}

function AddCssEvents(button){
    button.addEventListener("mousemove", MouseHover);
    button.addEventListener("mouseout", MouseunHover);
    button.addEventListener("mousedown", MouseOnClick);
    button.addEventListener("mouseup", MouseUnClick);
}

function AddNumber(button){

    if(isPreviousANumber){

        var log = document.getElementById("logger");
        if(button.target.id != "zero"){
            if(log.innerHTML.trim() == 0){
                log.innerHTML = "";
            }
            log.innerHTML = log.innerHTML.trim() + button.target.innerHTML.trim();

        } 
        if(button.target.id == "zero"){
            if(log.innerHTML.trim() == 0){
                log.innerHTML = 0;

            } else{

                log.innerHTML = log.innerHTML.trim() + 0;

            }
        }
        
        if(isOverflowing(logger)){
            var newSize = Number((log.style.fontSize).slice(0,log.style.fontSize.search("p")))/1.4;
            log.style.fontSize = newSize + "px";
        }
    }
    //gibberish previousbuttonaintnumber logic here
    
}

function isOverflowing(logger){

    var previousLog = logger.style.overflow;
    var presentLog = logger;

    if(previousLog === "visible"){
        document.getElementById("logger").style.overflow = "hidden";
    }

    return presentLog.clientWidth < presentLog.scrollWidth

}

function MouseHover(e){
    e.target.style.borderWidth = "2px";
    e.target.style.cursor ="pointer";
    e.target.style.userSelect = "none";
}

function MouseunHover(e){
    e.target.style.borderWidth = "0px";
    e.target.style.opacity = "1";
}

function MouseOnClick(e){
    e.target.style.opacity = "0.7";

}

function MouseUnClick(e){
    e.target.style.opacity = "1";
}

function MouseClickAC(){
    document.getElementById("logger").innerHTML = "0";
}