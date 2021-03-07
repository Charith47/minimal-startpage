getImageURL();
getGreeting();

function getImageURL(){
    var seed = '';
    var charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charLen = charSet.length;

    for(var i = 0 ; i < 20; i++){
        seed += charSet.charAt(Math.floor(Math.random()*charLen));
    }

    var url = "https://picsum.photos/seed/" + seed.trim() + "/800/400";

    document.getElementById('mainImg').src = url;
}

function getGreeting(){
    var time = new Date();

    var h = time.getHours();
    var m = time.getMinutes();
    var greeting = '';

    if(h < 12 && m <= 59) greeting = "Good Morning!";
    else if((h >= 12 && h <= 17) && (m <= 59)) greeting = "Good Afternoon!";
    else greeting = "Good Evening!";

    document.getElementById("greet").innerHTML = greeting;

    console.log(greeting);
}

