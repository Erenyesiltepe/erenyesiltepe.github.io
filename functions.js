var v=3;
$(function(){
    $("#inside").html(aboutMe);
    $("#inside #mailform").css("left","250px").css("width","400px");
    $("#options li").each(function(){

        $(this).click(function(){
            var text=$(this).text();
            if(text==="About me"){
                $("#works #containworks").css("visibility","hidden");
                $("#inside").animate({left:'7000px'});
                $("#works").animate({left:'7000px'});
                var time=setTimeout(function(){
                    $("body").css("height","100vh");
                    $("#inside").css("display","flex");
                    $("#works").css("display","none");
                    $("#inside").html(aboutMe);
                    $("#inside").animate({left:'0px'});
                    $("#inside #mailform").css("left","250px").css("width","400px");
                    $("#inside").css("width","660px");
                    clearTimeout(time);
                },500)
                
            }
            else if(text==="Contacts"){
                $("#inside").css("display","flex");
                $("#inside").animate({left:'7000px'});
                $("#works #containworks").css("visibility","hidden");
                $("#works").animate({left:'7000px'});
                var time=setTimeout(function(){
                    $("body").css("height","100vh");
                    $("#works").css("display","none");
                    $("#inside").html(Contacts);
                    $("#inside").animate({left:'0px'});
                    $("#inside").css("width","540px");
                    $("#inside #mailform").css("left","150px").css("height","300px");
                    $("#btn").click(function(){
                        if($(this).hasClass("clicked")){
                            $("#inside #mailform").css("left","150px");
                            $("#inside").css("width","540px");
                        }
                        else{
                            $("#inside #mailform").css("left","470px");
                            $("#inside").css("width","860px");
                        }
                        $(this).toggleClass("clicked");
                    })
                    clearTimeout(time);
                },500)
              
            }
            else{
                $("#inside").animate({left:'7000px'});
                $("#works").animate({left:'7000px'},100);
                $("#works #containworks").css("visibility","hidden");
                var time=setTimeout(function(){
                    $("#inside").css("display","none");
                    $("#works").css("display","flex");
                    $("#works").animate({left:'0px'});
                    $("body").css("height","fit-content");
                    clearTimeout(time);
                },500)
               
            }
               
        })
    })

    $("#btn").click(function(){
        if(!$(this).hasClass("clicked")){
            $("#inside").css("width","840px").css("transition","ease-out 1s");
            $("#mailform").css("left","460px").css("transition","ease-out 1s");
        }
        else{
            $("#inside").css("width","540px").css("transition","ease-out 1s");
            $("#mailform").css("left","160px").css("transition","ease-out 1s");
        }
        $(this).toggleClass("clicked");
    })


        //functions specific to myworks part
        var distT=55,distL=230+100,r=100,j=35,angle=180,rad;
        for(var obj of skills){
            $(".topInfo .miniIcons").append(`<div class="skillsSmall"><img src="${obj.image}"></div>`);
        }

        var characterGrid = document.querySelector("#containworks");
            var numOfCols = Math.floor(($(window).width() * 0.8) / 500);
            gridTemplColStyle = "";
            for (i = 0; i < numOfCols; i++) {
                gridTemplColStyle += "auto ";
            }
            characterGrid.style.gridTemplateColumns = gridTemplColStyle;

        //animation
        var i=1;
       setTimeout(function(){
        for(var obj of skills){
                rad=(angle/180)*Math.PI;
                angle-=j;
                $(`.skillsSmall:nth-of-type(${i})`).css("top",`${distT-r*Math.sin(rad)}px`).css("left",`${distL+r*Math.cos(rad)}px`);
                i++;
            }
       },200);

      

        //on window resize
        $(window).resize(function () {
            var characterGrid = document.querySelector("#containworks");
            var numOfCols = Math.floor(($(window).width() * 0.8) / 500);
            gridTemplColStyle = "";
            for (i = 0; i < numOfCols; i++) {
                gridTemplColStyle += "auto ";
            }
            characterGrid.style.gridTemplateColumns = gridTemplColStyle;
        });

  
       $(".skillsSmall").each(function(){
            $(this).click(function(e){
                console.log($(this).children().attr("src"))
                e.stopPropagation();
                $(".skills").attr("src",`${$(this).children().attr("src")}`);
                $(".text p").text(findDesc($(this).children()));
                displayWorks();
                v=3;
            })
       })
        
    

    
    $(window).scroll(function() {
        if($(window).scrollTop()>=100*(v-1)) {
           $(".work:nth-of-type("+(v+1)+")").animate({left:'100px'},0).animate({left:'0px'},350).css("display","flex");
           $(".work:nth-of-type("+(v)+")").animate({right:'100px'},0).animate({right:'0px'},350).css("display","flex");
            v+=2;
        } 
        console.log($(window).scrollTop()+"  "+v);
    });

    function displayWorks(){
        var att=$(".skills").attr("src");
        $("#containworks").html("");
        $("#works #containworks").css("visibility","visible");
        var arr;
        if(att==="./photos/arduino.png"){arr=arduino;}
        else if(att==="./photos/blender-icon.png"){arr=blender;}
        else if(att==="./photos/coding.png"){arr=coding;}
        else{arr=guitar;}
        for(var obj of arr){
                $("#containworks").append(`
                    <div class="work">
                        <div>
                            <div><p>${obj.description}</p></div>
                            <a href="${obj.link}" target="_blank" class="btn"><p>Details</p></a>
                        </div>
                        ${obj.img}
                        
                    </div>
                `);
            }
            $(".work:nth-of-type(2)").animate({left:'200px'},0).animate({left:'0px'},350).css("display","flex");
           $(".work:nth-of-type(1)").animate({right:'200px'},0).animate({right:'0px'},350).css("display","flex");
    }

    function findDesc(img){
        for(var obj of skills){
            if(obj.image===$(img).attr("src")){
                return obj.description;
            }
        }
    }
    
})