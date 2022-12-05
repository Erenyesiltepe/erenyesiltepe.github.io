var guitar=[
    `<a href="https://www.youtube.com/watch?v=HulsUtMPL2Q"  target="_blank"><img src="./photos/guitar/1" alt=""></a>`,
    `<a href="https://www.youtube.com/watch?v=2_A2tXEFpyQ"  target="_blank"><img src="./photos/guitar/2.png" alt=""></a>`,
    `<a href="https://www.youtube.com/watch?v=UmP-XGBqess"  target="_blank"><img src="./photos/guitar/3.png" alt=""></a>`,
    `<a href="https://www.youtube.com/watch?v=kbKy5bkHFeM"  target="_blank"><img src="./photos/guitar/4.png" alt=""></a>`,
    `<a href="https://www.youtube.com/watch?v=A0o8VXs0kkQ"  target="_blank"><img src="./photos/guitar/5.png" alt=""></a>`,
]

var blender=[

]

var arduino=[

]

var coding=[]

var arr=[];
var start=0;


document.getElementById("guitar").addEventListener("click",function(){
    console.log("clicked");
    arr=guitar;
    display();
});

var liste=document.getElementById("list");
function display(){
  
    for(var i=start;i<start+5;i++){
        liste.innerHTML+=`<div class="containimg">${arr[i]}</div>`;
    }
}