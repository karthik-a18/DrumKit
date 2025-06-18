for(var i=0;i<(document.querySelectorAll(".drum").length);i++){
document.querySelectorAll(".drum")[i].addEventListener("click",music);
}
function music()
{
    var sound=this.innerHTML;
    switch(sound){
        case "w":
            var s=new Audio("sounds/crash.mp3");
            s.play();
            break;
        case "a":
            var a=new Audio("sounds/kick-bass.mp3");
            a.play();
            break;
        case "s":
            var b=new Audio("sounds/snare.mp3");
            b.play();
            break;
        case "d":
            var c=new Audio("sounds/tom-1.mp3");
            c.play();
            break;
        case "j":
            var d=new Audio("sounds/tom-2.mp3");
            d.play();
            break;
        case "k":
            var e=new Audio("sounds/tom-3.mp3");
            e.play();
            break;
        case "l":
            var f=new Audio("sounds/tom-4.mp3");
            f.play();
            break;
        default: console.log(sound);
    }

}