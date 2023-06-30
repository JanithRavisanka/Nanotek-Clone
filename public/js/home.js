// document.addEventListener('DOMContentLoaded', function (){
//     $(".new").on("click", function(){
//         console.log($(".new")[0].classList)
//         if(jQuery.inArray("act", $(".new")[0].classList) == -1){
//             $(".new").addClass("act");
//             $(".offer").addClass("noact");
//             $(".hr1").addClass("d-none");
//             $(".hr2").removeClass("d-none")
//             $(".path2").attr("fill", "#ff9400");
//             $(".path1").attr("fill", "#000000");
//             $(".c1").addClass("d-none");
//             $(".c2").removeClass("d-none");
//         }
//       });
//     $(".offer").on("click", function(){
//         if(!(jQuery.inArray("noact", $(".offer")[0].classList) == -1)){
//             $(".new").removeClass("act");
//             $(".offer").removeClass("noact");
//             $(".hr1").removeClass("d-none");
//             $(".hr2").addClass("d-none");
//             $(".path1").attr("fill", "#ff9400");
//             $(".path2").attr("fill", "#000000");
//             $(".c2").addClass("d-none");
//             $(".c1").removeClass("d-none");
//         }
//     });
//
//     for(let i=1; i <= 20 ; i++){
//
//
//         // console.log(`hi${i}`);
//         console.log($(`#item${i}`));
//
//
//         // js for hover card
//         $(`#item${i}`).children(".cardBg").children(".itemAbove").on("mouseover",function(){
//           $(`#item${i}`).children(".cardBg").children(".itemUnder").addClass("itemUnderBg");
//           $(`#item${i}`).children(".cardBg").children(".card-body").children(".cardText").css("background-color", "black");
//           $(`#item${i}`).children(".cardBg").children(".cbtn").children("#addto").children(".plusdiv").children(".addimg").addClass("dd");
//           $(`#item${i}`).children(".cardBg").children(".cbtn").children("#addto").children(".plusdiv").css("background-color", "black");
//           $(`#item${i}`).children(".cardBg").css("border-color", "black");
//           $(`#item${i}`).children(".cardBg").children(".ccc").css("color", "black");
//         });
//
//         $(`#item${i}`).children(".cardBg").children(".itemAbove").on("mouseout",function(){
//           $(`#item${i}`).children(".cardBg").children(".itemUnder").removeClass("itemUnderBg");
//           $(`#item${i}`).children(".cardBg").children(".card-body").children(".cardText").css("background-color", "#4b4a48");
//           $(`#item${i}`).children(".cardBg").children(".cbtn").children("#addto").children(".plusdiv").children(".addimg").removeClass("dd");
//           $(`#item${i}`).children(".cardBg").children(".cbtn").children("#addto").children(".plusdiv").css("background-color", "transparent");
//           $(`#item${i}`).children(".cardBg").css("border-color", "#4b4a48");
//           $(`#item${i}`).children(".cardBg").children(".ccc").css("color", "#ff9400");
//         });
//
//         // js for hove plus div
//         $(`#item${i}`).children(".cardBg").children(".cbtn").children("#addto").on("mouseover", function(){
//           $(`#item${i}`).children(".cardBg").children(".cbtn").children("#addto").css("background-color", "black");
//           $(`#item${i}`).children(".cardBg").children(".card-body").children(".cardText").css("background-color", "black");
//           $(`#item${i}`).children(".cardBg").children(".cbtn").children("#addto").children(".addtext").addClass("dd");
//           $(`#item${i}`).children(".cardBg").children(".itemUnder").addClass("itemUnderBg");
//           $(`#item${i}`).children(".cardBg").children(".cbtn").children("#addto").children(".plusdiv").children(".addimg").addClass("dd");
//           $(`#item${i}`).children(".cardBg").children(".cbtn").children("#addto").children(".plusdiv").css("display", "none");
//           $(`#item${i}`).children(".cardBg").css("border-color", "black");
//           $(`#item${i}`).children(".cardBg").children(".ccc").css("color", "black");
//         });
//
//         $(`#item${i}`).children(".cardBg").children(".cbtn").children("#addto").on("mouseout", function(){
//           $(`#item${i}`).children(".cardBg").children(".cbtn").children("#addto").css("background-color", "transparent");
//           $(`#item${i}`).children(".cardBg").children(".card-body").children(".cardText").css("background-color", "#4b4a48");
//           $(`#item${i}`).children(".cardBg").children(".cbtn").children("#addto").children(".addtext").removeClass("dd");
//           $(`#item${i}`).children(".cardBg").children(".itemUnder").removeClass("itemUnderBg");
//           $(`#item${i}`).children(".cardBg").children(".cbtn").children("#addto").children(".plusdiv").children(".addimg").removeClass("dd");
//           $(`#item${i}`).children(".cardBg").children(".cbtn").children("#addto").children(".plusdiv").css("display", "block");
//           $(`#item${i}`).children(".cardBg").css("border-color", "#4b4a48");
//           $(`#item${i}`).children(".cardBg").children(".ccc").css("color", "#ff9400") ;
//         });
//         $(".build").on("mouseover", function(){
//           $(this).children(".container").addClass("gbgb")
//         });
//
//         $(".build").on("mouseout", function(){
//           $(this).children(".container").removeClass("gbgb")
//         });
//         $(".navbar-toggler").on("click", function(){
//           $(".navbar-toggler-icon").css("transition", "all 0.5s ease");
//           console.log($(".navbar-toggler-icon").css("transform"))
//           if ($(".navbar-toggler-icon").css("transform") === "matrix(1, 0, 0, 1, 0, 0)"){
//             $(".navbar-toggler-icon").css("transform", "rotate(-90deg");
//
//           }else if($(".navbar-toggler-icon").css("transform") === "matrix(6.12323e-17, -1, 1, 6.12323e-17, 0, 0)"){
//             $(".navbar-toggler-icon").css("transform", "rotate(0deg");
//
//           }else{
//             $(".navbar-toggler-icon").css("transform", "rotate(-90deg");
//
//           }
//         });
//
//
//
//       }
//
//     });
//
