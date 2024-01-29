function checkLinkExistence(link){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechangd = function(){
        if(xhr.readyState == 4){
            console.log("존재합니다!");
        }else{
            console.log("존재하지 않습니다!");
        }
    }
    xhr.open("HEAD", link, true);
    xhr.send();
}

var testLink = "";