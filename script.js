const audio = document.querySelector('.audio');


var music = ['./Assets/Maroon 5 - Beautiful Mistakes.mp3','./Assets/Maroon 5 - Don t Wanna Know.mp3','./Assets/Coldplay - A Sky Full Of Stars.mp3',
'./Assets/Maroon 5 - Payphone.mp3','./Assets/Coldplay - Clocks.mp3','./Assets/Coldplay - Yellow.mp3',
'./Assets/Maroon 5 - Girls Like You.mp3','./Assets/The Weeknd - Blinding Lights.mp3'];


var musicBackground = ['./Assets/maroon5.jpg','./Assets/maroon5.jpg','./Assets/Coldplay.jpg','./Assets/maroon5.jpg',
'./Assets/Coldplay.jpg','./Assets/Coldplay.jpg','./Assets/maroon5.jpg','./Assets/wekend.jpg'];

var Mname = ['Maroon 5 - Beautiful Mistakes','Maroon 5 - Don t Wanna Know','Coldplay - A Sky Full Of Stars','Maroon 5 - Payphone',
'Coldplay - Clocks','Coldplay - Yellow','Maroon 5 - Girls Like You','The Weeknd - Blinding Lights']

const verified = document.querySelector('.container');
const control = document.querySelector('.controle');
const disc = document.querySelector('.disc');
const playBtn = document.querySelector('#playBtn')
var index  = 0

verified.addEventListener('mouseover', function () {
  control.classList.add('show');
  });

verified.addEventListener('mouseout', function () {
  control.classList.remove('show');
  });

function retroceder(){

    barRemove()

    if(index <= 0){
        index= music.length -1
        console.log(index)
    }
    else{
        index --
        console.log(index)
    }

    play()
}


function avancar(){

    barRemove()

    if(index >= music.length -1 ){
        index=0
        console.log(index)
    }
    else{
        index ++
        console.log(index)
    }
    play()

}


function play(){
    disc.style.backgroundImage = `url(${musicBackground[index]})`
    audio.setAttribute('src',music[index])
    audio.play();
    disc.style.animation = 'rotate 5s linear infinite';
    playBtn.setAttribute('src','./Assets/pause.png');
    playBtn.setAttribute('onclick','pause()');
    
    bar()

}


function pause(){
    audio.pause()
    disc.style.animation = 'none';
    playBtn.setAttribute('src','./Assets/play.png');
    playBtn.setAttribute('onclick','play()');
    barRemove()
}

onload = function(){
    disc.style.backgroundImage = `url(${musicBackground[index]})`
}

function bar (){
    let musicName = document.querySelector('.title')

    let element = document.createElement('h3');
    let textItem = document.createTextNode(Mname[index]);
    element.appendChild(textItem);
    musicName.appendChild(element);

}

function barRemove(){
    let musicName = document.querySelector('.title')
    musicName.innerHTML = ''
}