// Back end
function Player(name, score, roll) {
  this.name = name;
  this.score = 0;
  this.roll = 0;
}
// function CompTurn(){
//   alert("Computer Turn");
//   $("#player1panel").hide();
//   $("#computer-panel").show();
//   roll = rollDice();
//   $("span#result2").text(roll);
//   alert(roll);
//   computerTempScore = computerTempScore + roll;
//   alert(computerTempScore);
//   roll = rollDice();
//   alert(roll);
//   computerTempScore2 = computerTempScore + roll;
//   alert(computerTempScore2);
//   alert(newPlayer.name + "Your Turn");
//   $("#player1panel").show();
//   $("#computer-panel").hide();
// }

var rollDice = function() {
  return Math.ceil(Math.random()*6);
}

// Front end
$(document).ready(function(){
  $("#play-button").click(function(event){
    event.preventDefault();
    var computerTempScore = 0;
    var computerTempScore2 = 0;
    var inputtedPlayerName = $("input#playername").val();
    // alert(inputtedPlayerName);
    var newPlayer = new Player(inputtedPlayerName);
    $(".playerName").text(newPlayer.name);

    $("button#roll-button").click(function(event){
      event.preventDefault();

    roll = rollDice();
    $("span#result").text(roll);

    if (roll === 1){
      newPlayer.roll = 0;
    // alert(newPlayer.roll);
      if (roll === 1){
        alert("1 Rolled..... turn over");

      }
    } else {
      newPlayer.roll += roll;
    // alert(newPlayer.roll);
    }
    $("span#tempScore").text(newPlayer.roll);
    });
    $("button#hold-button").click(function(event){
      event.preventDefault();
      newPlayer.score += newPlayer.roll;
      newPlayer.roll = 0;
      $("span#playerScore").text(newPlayer.score);
      if (newPlayer.score >= 100){
        alert(newPlayer.name + " WINS!!!");
      }
      alert("Computer Turn");
      $("#player1panel").hide();
      $("#computer-panel").show();
      roll = rollDice();
      $("span#result2").text(roll);
      alert(roll);
      computerTempScore = computerTempScore + roll;
      alert(computerTempScore);
      roll = rollDice();
      alert(roll);
      computerTempScore2 = computerTempScore + roll;
      alert(computerTempScore2);
      alert(newPlayer.name + "Your Turn");
      $("#player1panel").show();
      $("#computer-panel").hide();

      // run computer dice roll function two times
      // computer presses hold button
      // alert(Your Turn newPlayer.name)

    });
  });
});
