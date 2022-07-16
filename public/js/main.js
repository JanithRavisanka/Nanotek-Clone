var rangeOne = document.querySelector('input[name="rangeOne"]'),
    rangeTwo = document.querySelector('input[name="rangeTwo"]'),
    outputOne = document.querySelector('.out1'),
    outputTwo = document.querySelector('.out2'),
    inclRange = document.querySelector('.incl-range'),
    updateView = function () {
      if (this.getAttribute('name') === 'rangeOne') {
        outputOne.innerHTML = this.value;
        outputOne.style.left = this.value / this.getAttribute('max') * 100 + '%';
      } else {
        outputTwo.style.left = this.value / this.getAttribute('max') * 100 + '%';
        outputTwo.innerHTML = this.value
      }
      if (parseInt(rangeOne.value) > parseInt(rangeTwo.value)) {
        inclRange.style.width = (rangeOne.value - rangeTwo.value) / this.getAttribute('max') * 100 + '%';
        inclRange.style.left = rangeTwo.value / this.getAttribute('max') * 100 + '%';
      } else {
        inclRange.style.width = (rangeTwo.value - rangeOne.value) / this.getAttribute('max') * 100 + '%';
        inclRange.style.left = rangeOne.value / this.getAttribute('max') * 100 + '%';
      }
    };

  document.addEventListener('DOMContentLoaded', function () {
    updateView.call(rangeOne);
    updateView.call(rangeTwo);
    $('input[type="range"]').on('mouseup', function() {
      this.blur();
    }).on('mousedown input', function () {
      updateView.call(this);
    });

    // add hover animation to items
    // $('.itemAbove').hover(function(){
    //   $(".itemUnder").addClass("itemUnderBg"); !
    //   $(".cardText").css("background-color", "black"); !
    //   $(".addimg").addClass("dd"); !
    //   $(".cardBg").css("border-color", "black"); !
    //   $(".plusdiv").css("background-color", "black"); !
    // },function(){
    //   $(".itemUnder").removeClass("itemUnderBg"); !
    //   $(".cardText").css("background-color", "#4b4a48"); !
    //   $(".addimg").removeClass("dd"); !
    //   $(".cardBg").css("border-color", "#4b4a48"); !
    //   $(".plusdiv").css("background-color", "transparent"); !
    // });

    // $('#addto').hover(function(){
    //   $('#addto').css("background-color", "black"); !
    //   $(".cardText").css("background-color", "black"); !
    //   $(".addtext").addClass("dd"); !
    //   $(".itemUnder").addClass("itemUnderBg"); !
    //   // $(".addtext").text("+ Add to") !
    //   $(".plusdiv").css("display", "none"); !
    //   $(".cardBg").css("border-color", "black");

    // },function(){
    //   $('#addto').css("background-color", "transparent");!
    //   $(".cardText").css("background-color", "#4b4a48"); !
    //   $(".addtext").removeClass("dd"); !
    //   $(".itemUnder").removeClass("itemUnderBg"); !
    //   $(".addimg").removeClass("dd"); !
    //   $(".plusdiv").css("display", "block"); !
    //   $(".cardBg").css("border-color", "#4b4a48");
    // });



    console.log("hi1");
    for(let i=1; i <= 20 ; i++){

      
      // console.log(`hi${i}`);
      // console.log($(`#item${i}`));


      // js for hover card
      $(`#item${i}`).children(".cardBg").children(".itemAbove").on("mouseover",function(){
        $(`#item${i}`).children(".cardBg").children(".itemUnder").addClass("itemUnderBg");
        $(`#item${i}`).children(".cardBg").children(".card-body").children(".cardText").css("background-color", "black");
        $(`#item${i}`).children(".cardBg").children(".cbtn").children("#addto").children(".plusdiv").children(".addimg").addClass("dd");
        $(`#item${i}`).children(".cardBg").children(".cbtn").children("#addto").children(".plusdiv").css("background-color", "black");
        $(`#item${i}`).children(".cardBg").css("border-color", "black");     
      });

      $(`#item${i}`).children(".cardBg").children(".itemAbove").on("mouseout",function(){
        $(`#item${i}`).children(".cardBg").children(".itemUnder").removeClass("itemUnderBg");
        $(`#item${i}`).children(".cardBg").children(".card-body").children(".cardText").css("background-color", "#4b4a48");
        $(`#item${i}`).children(".cardBg").children(".cbtn").children("#addto").children(".plusdiv").children(".addimg").removeClass("dd");
        $(`#item${i}`).children(".cardBg").children(".cbtn").children("#addto").children(".plusdiv").css("background-color", "transparent");
        $(`#item${i}`).children(".cardBg").css("border-color", "#4b4a48");      
      });

      // js for hove plus div
      $(`#item${i}`).children(".cardBg").children(".cbtn").children("#addto").on("mouseover", function(){
        $(`#item${i}`).children(".cardBg").children(".cbtn").children("#addto").css("background-color", "black");
        $(`#item${i}`).children(".cardBg").children(".card-body").children(".cardText").css("background-color", "black");
        $(`#item${i}`).children(".cardBg").children(".cbtn").children("#addto").children(".addtext").addClass("dd");
        $(`#item${i}`).children(".cardBg").children(".itemUnder").addClass("itemUnderBg");
        $(`#item${i}`).children(".cardBg").children(".cbtn").children("#addto").children(".plusdiv").children(".addimg").addClass("dd");
        $(`#item${i}`).children(".cardBg").children(".cbtn").children("#addto").children(".plusdiv").css("display", "none");
        $(`#item${i}`).children(".cardBg").css("border-color", "black");
      });

      $(`#item${i}`).children(".cardBg").children(".cbtn").children("#addto").on("mouseout", function(){
        $(`#item${i}`).children(".cardBg").children(".cbtn").children("#addto").css("background-color", "transparent");
        $(`#item${i}`).children(".cardBg").children(".card-body").children(".cardText").css("background-color", "#4b4a48");
        $(`#item${i}`).children(".cardBg").children(".cbtn").children("#addto").children(".addtext").removeClass("dd");
        $(`#item${i}`).children(".cardBg").children(".itemUnder").removeClass("itemUnderBg");
        $(`#item${i}`).children(".cardBg").children(".cbtn").children("#addto").children(".plusdiv").children(".addimg").removeClass("dd");
        $(`#item${i}`).children(".cardBg").children(".cbtn").children("#addto").children(".plusdiv").css("display", "block");
        $(`#item${i}`).children(".cardBg").css("border-color", "#4b4a48");
      });


    }


    $(".bodybg").width = $(".body").width();
    $(".bodyx").width = $(".body").width();    

  });
  