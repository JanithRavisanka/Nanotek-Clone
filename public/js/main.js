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
    $('.itemAbove').hover(function(){
      $(".itemUnder").addClass("itemUnderBg");
      $(".cardText").css("background-color", "black");
      $(".addimg").addClass("dd");
      $(".cardBg").css("border-color", "black");
      $(".plusdiv").css("background-color", "black");
    },function(){
      $(".itemUnder").removeClass("itemUnderBg");
      $(".cardText").css("background-color", "#4b4a48");
      $(".addimg").removeClass("dd");
      $(".cardBg").css("border-color", "#4b4a48");
      $(".plusdiv").css("background-color", "transparent");
    });

    $('#addto').hover(function(){
      $('#addto').css("background-color", "black");
      $(".cardText").css("background-color", "black");
      $(".addtext").addClass("dd");
      $(".itemUnder").addClass("itemUnderBg");
      // $(".addtext").text("+ Add to")
      $(".plusdiv").css("display", "none");
      $(".cardBg").css("border-color", "black");

    },function(){
      $('#addto').css("background-color", "transparent");
      $(".cardText").css("background-color", "#4b4a48");
      $(".addtext").removeClass("dd");
      $(".itemUnder").removeClass("itemUnderBg");
      $(".addimg").removeClass("dd");
      $(".plusdiv").css("display", "block");
      $(".cardBg").css("border-color", "#4b4a48");
    });


    $(".bodybg").width = $(".body").width();
    $(".bodyx").width = $(".body").width();    

  });
  