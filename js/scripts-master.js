// Back end
function Player(name, score, roll) {
  this.name = name;
  this.score = 0;
  this.roll = 0;
}


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

    var newPlayer = new Player(inputtedPlayerName);
    $(".playerName").text(newPlayer.name);

    $("button#roll-button").click(function(event){
      event.preventDefault();

    roll = rollDice();
    $("span#result").text(roll);

    if (roll === 1){
      newPlayer.roll = 0;

      if (roll === 1){
        alert("1 Rolled..... turn over");
        alert("Computer Turn");
        $("#player1panel").hide();
        $("#computer-panel").show();
        roll = rollDice();
        $("span#result2").text(roll);

        var turn = 0;
        var maxTurn = rollDice();

        while ((roll !==1) && (turn <=maxTurn)) {
          computerTempScore = computerTempScore + roll;
          alert(roll);
          alert(computerTempScore);
          roll = rollDice();
          if (roll ===1) {
            computerTempScore = 0;
          }
          turn +=1;
        }
        alert(computerTempScore);
        alert(newPlayer.name + "Your Turn");
        $("#player1panel").show();
        $("#computer-panel").hide();

      }
    } else {
      newPlayer.roll += roll;

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
      var turn = 0;
      var maxTurn = rollDice();

      while ((roll !==1) && (turn <=maxTurn)) {
        computerTempScore = computerTempScore + roll;
        alert(roll);
        alert(computerTempScore);
        roll = rollDice();
        if (roll ===1) {
          computerTempScore = 0;
        }
        turn +=1;
      }
      alert(computerTempScore);
      alert(newPlayer.name + "Your Turn");
      $("#player1panel").show();
      $("#computer-panel").hide();

      // run computer dice roll function two times
      // computer presses hold button
      // alert(Your Turn newPlayer.name)

    });
  });
});
