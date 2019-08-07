function changePicture(id) {
    var img = id
    var modal = document.getElementById("modalImg");
    var modalImg = document.getElementById("contentImg");
    var captionText = document.getElementById("caption");

    var next = document.getElementById("goToNextImg");
    var previous = document.getElementById("goToPreviousImg");
    var closeImg = document.getElementById("closeCurrentImg");
    
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
                
        var currentId = String(modalImg.src);
        currentId = currentId.substring(currentId.length - 7, currentId.length - 4);
        var nextId = "img" + (parseInt(currentId) + 1);
        var previousId = "img" + (parseInt(currentId) - 1);

        if(document.body.contains(document.getElementById(nextId))){
            next.style.display = "block";
        } 
        else {
            next.style.display = "none";
        }

        if(document.body.contains(document.getElementById(previousId))){
            previous.style.display = "block";
        } 
        else {
            previous.style.display = "none";
        }
    };
    
    next.onclick = function() {

        var currentId = String(modalImg.src);
        currentId = currentId.substring(currentId.length - 7, currentId.length - 4);
        var nextId = "img" + (parseInt(currentId) + 2);
        previous.style.display = "block";

        if(document.body.contains(document.getElementById(nextId))){
            next.style.display = "block";
        } 
        else {
            next.style.display = "none";
        }

        var currentSrc = String(modalImg.src);
        var leftPart = currentSrc.substring(0, currentSrc.length - 7);
        var rightPart = currentSrc.substring(currentSrc.length - 7, currentSrc.length - 4);
        var nextNumber = parseInt(rightPart) + 1;
        var nextSrc = leftPart + nextNumber + ".jpg";
        modalImg.src = nextSrc;
    };


    previous.onclick = function() {

        var currentId = String(modalImg.src);
        currentId = currentId.substring(currentId.length - 7, currentId.length - 4);
        var previousId = "img" + (parseInt(currentId) - 2);
        next.style.display = "block";
     
        if(document.body.contains(document.getElementById(previousId))){
            previous.style.display = "block";
        } 
        else {
            previous.style.display = "none";
        }

        var currentSrc = String(modalImg.src);
        var leftPart = currentSrc.substring(0, currentSrc.length - 7);
        var rightPart = currentSrc.substring(currentSrc.length - 7, currentSrc.length - 4);
        var nextNumber = parseInt(rightPart) - 1;
        var nextSrc = leftPart + nextNumber + ".jpg";
        modalImg.src = nextSrc;
    };


    document.onkeydown = function(evt) {
        evt = evt || window.event;

        var currentId = String(modalImg.src);
        currentId = currentId.substring(currentId.length - 7, currentId.length - 4);
        var nextId = "img" + (parseInt(currentId) + 1);
        previous.style.display = "block";
        var previousId = "img" + (parseInt(currentId) - 1);
        next.style.display = "block";
        var isPossibleNext = true;
        var isPossiblePrevious = true;

        if(document.body.contains(document.getElementById(nextId))){
            next.style.display = "block";
            isPossibleNext = true;
        } 
        else {
            next.style.display = "none";
            isPossibleNext = false;
        }

        if(document.body.contains(document.getElementById(previousId))){
            previous.style.display = "block";
            isPossiblePrevious = true;
        } 
        else {
            previous.style.display = "none";
            isPossiblePrevious = false
        }

        if (evt.keyCode == 39 && isPossibleNext) {
            var currentId = String(modalImg.src);
            currentId = currentId.substring(currentId.length - 7, currentId.length - 4);
            var nextId = "img" + (parseInt(currentId) + 2);
            previous.style.display = "block";

            if(document.body.contains(document.getElementById(nextId))){
                next.style.display = "block";
            } 
            else {
                next.style.display = "none";
            }
        
            var currentSrc = String(modalImg.src);
            var leftPart = currentSrc.substring(0, currentSrc.length - 7);
            var rightPart = currentSrc.substring(currentSrc.length - 7, currentSrc.length - 4);
            var nextNumber = parseInt(rightPart) + 1;
            var nextSrc = leftPart + nextNumber + ".jpg";
            modalImg.src = nextSrc;
        }

        if (evt.keyCode == 37 && isPossiblePrevious) {
            var currentId = String(modalImg.src);
            currentId = currentId.substring(currentId.length - 7, currentId.length - 4);
            var previousId = "img" + (parseInt(currentId) - 2);
            next.style.display = "block";
            

            if(document.body.contains(document.getElementById(previousId))){
                previous.style.display = "block";
            } 
            else {
                previous.style.display = "none";
            }

            var currentSrc = String(modalImg.src);
            var leftPart = currentSrc.substring(0, currentSrc.length - 7);
            var rightPart = currentSrc.substring(currentSrc.length - 7, currentSrc.length - 4);
            var nextNumber = parseInt(rightPart) - 1;
            var nextSrc = leftPart + nextNumber + ".jpg";
            modalImg.src = nextSrc;
        }

        if (evt.keyCode == 27) {
            modal.style.display = "none";
        }
    };

    closeImg.onclick = function() {
        modal.style.display = "none";
    };
};