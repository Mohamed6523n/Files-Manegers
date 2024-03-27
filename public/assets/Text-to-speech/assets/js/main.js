var start = document.getElementById("start")
var pause = document.getElementById("pause")
var Resume = document.getElementById("Resume")
var stop = document.getElementById("stop")
var clear = document.getElementById("clear")


start.addEventListener("click", function(){
    var voice = document.getElementById("voice").value;
    var text = document.getElementById("text").value;

    if(voice == ""){
        responsiveVoice.speak("Select the voice first", "UK English Male");
    }else if(text == ""){
        responsiveVoice.speak("Enter your text", "UK English Male");
    }else{
        responsiveVoice.speak(text, voice);
    }
})

pause.addEventListener("click",function(){
    responsiveVoice.pause();
})
Resume.addEventListener("click",function(){
    responsiveVoice.resume();
})
stop.addEventListener("click",function(){
    responsiveVoice.cancel();
})
clear.addEventListener("click",function(){
    var text = document.getElementById("text").value ="";
    
})