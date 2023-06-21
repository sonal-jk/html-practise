$(function(){
   /*var supportaudio=document.createElement('audio').canPlayType;
   if (supportaudio){
    var player=new Plyr('#aud',{
        controls:[
            'restart',
            'play',
            'progress',
            'current-time',
            'duration',
            'mute',
            'volume',
            'download',
            'settings'
        ]
    });
   }
   $("button").onclick(() =>{
    $("#aud").play();
   });*/

   var play= $("#play");
   var next=$("#next");
   var previous=$("#previous");

   var stamp=$("#time-stamp");
   var duration=$("#duration");
   var progress=$("#progress");
   var volume=$("#vol-progress");

   var index=0;
   var playing=false;

   var aud=document.createElement('audio');
   var tracks=[{
    track: 1,
    name: "Baarishein",
    duration: "3:27",
    artist: "Anuv Jain",
    image: "Image URL",
    path: "../Songs/Baarishein.mp3",
   
   },
   {
    track: 2,
    name: "Ilahi",
    duration: "3:32",
    artist: "Mohit Chauhan",
    image: "Image URL",
    path: "../Songs/Ilahi.mp3",

   },
   {
    track: 3,
    name: "Tu Maan Meri Jaan",
    duration: "3:14",
    artist: "King, Saurabh Lokhande",
    image: "Image URL",
    path: "../Songs/Tu_Maan_Meri_Jaan.mp3",
  
   },
   {
    track: 4,
    name: "Kabira",
    duration: "4:29",
    artist: "Arijit Singh, Harshdeep Kaur",
    image: "Image URL",
    path: "../Songs/Kabira.mp3",
   
   },
   {
    track: 5,
    name: "Khamoshiyan",
    duration: "5:35",
    artist: "Jeet Gannguli",
    image: "Image URL",
    path: "../Songs/Khamoshiyan.mp3",

   }
   
]
   
   

});