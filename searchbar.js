document.addEventListener('keydown', toggleSearchBar);
document.addEventListener('keydown', search);
var flag = false;

function toggleSearchBar(e){

    if(e.code == "Space" && flag == false){
        console.log("SPACE");
        $('#fixedBox').css("filter","blur(8px)");
        on();
        flag = true;
    }

    if(e.code == "Escape" && flag == true){
        $('#fixedBox').css("filter","");
        off();
        flag = false;
    }

}

function search(e){
    if(e.code == "Enter" && flag == true){
        var userInput = document.getElementById('searchBar').value.trim();
        if(userInput != ""){
            var url = "https://www.google.com/search?q=" + userInput.trim().split(" ").join("+");
            console.log(url);
            window.open(url,"_self");
        }
    } 
}

function on() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById('searchBar').focus();
    document.getElementById('searchBar').select();
}
  
function off() {
    document.getElementById("overlay").style.display = "none";
}