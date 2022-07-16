var rangeOne = document.querySelector('input[name="rangeOne"]'),
    rangeTwo = document.querySelector('input[name="rangeTwo"]'),
    outputOne = document.querySelector('.out1'),
    outputTwo = document.querySelector('.out2'),
    inclRange = document.querySelector('.incl-range'),
    updateView = function () {
      if (this.getAttribute('name') === 'rangeOne') {
        outputOne.innerHTML = this.value;
      } else {
        outputTwo.innerHTML = this.value
      }
    };
var rangeOne1 = document.querySelector('input[name="rangeOne1"]'),
    rangeTwo2 = document.querySelector('input[name="rangeTwo2"]'),
    outputOne1 = document.querySelector('.out11'),
    outputTwo2 = document.querySelector('.out22'),
    inclRange1 = document.querySelector('.incl-range1'),
    updateView1 = function () {
      if (this.getAttribute('name') === 'rangeOne1') {
        outputOne1.innerHTML = this.value;
      } else {
        outputTwo2.innerHTML = this.value
      }
    };


  document.addEventListener('DOMContentLoaded', function () {
    updateView.call(rangeOne);
    updateView.call(rangeTwo);
    updateView1.call(rangeOne1);
    updateView1.call(rangeTwo2);
    $('input[type="range"]').on('mouseup', function() {
      this.blur();
    }).on('mousedown input', function () {
      updateView.call(this);
      updateView1.call(this);
    });
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


    $(".bodybg").width($(".body").width());
    $(".bodyx").width($(".body").width());    

  });
  