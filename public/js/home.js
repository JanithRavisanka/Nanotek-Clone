document.addEventListener('DOMContentLoaded', function (){
    $(".new").on("click", function(){
        console.log($(".new")[0].classList)
        if(jQuery.inArray("act", $(".new")[0].classList) == -1){
            $(".new").addClass("act");
            $(".offer").addClass("noact");
            $(".hr1").addClass("d-none");
            $(".hr2").removeClass("d-none")
            $(".path2").attr("fill", "#ff9400");
            $(".path1").attr("fill", "#000000");
        }
      });
    $(".offer").on("click", function(){
        if(!(jQuery.inArray("noact", $(".offer")[0].classList) == -1)){
            $(".new").removeClass("act");
            $(".offer").removeClass("noact");
            $(".hr1").removeClass("d-none");
            $(".hr2").addClass("d-none");
            $(".path1").attr("fill", "#ff9400");
            $(".path2").attr("fill", "#000000");
        }
    });
      
    });

