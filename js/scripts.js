var leetSpeak = function(str){
      var replaced = str.split('e').join('3').split('o').join('0').split('I').join('1').split('s').join('z');
      return replaced;
  }

$(document).ready(function() {
  $("form#leet-speak").submit(function(event) {
    var str = $("input#string").val();
    var result = leetSpeak(str);

    $(".leet").text(result);

    $("#result").show();
    event.preventDefault();
  });
});
