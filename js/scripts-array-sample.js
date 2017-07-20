// Back end
function PigDicePlayers = function (){
  this.Players = [];
};

PigDicePlayers.prototype.addPlayer = function (Player) {
  this.Players.push(Player);
  Player.id = this.Players.length;
  return this;
};

function Player(name, score, roll) {
  this.name = name;
  this.score = 0;
  this.roll = 0;
  this.id = null;
  return alert('Player' + this.name + ' has been created');
};

var rollDice = function() {
  return Math.ceil(Math.random()*6);
}

// Front end
$(document).ready(function(){
  $("#enter1").click(function(event){
    event.preventDefault();
    var computerTempScore = 0;
    var computerTempScore2 = 0;
    var inputtedPlayerName = $("input#playername").val();
    // alert(inputtedPlayerName);
    var newPlayer = new Player(inputtedPlayerName);

    $(".player1Name").text(newPlayer.name);

  $("#enter2").click(function(event){
    event.preventDefault();
    var inputtedPlayerName = $("input#player2name").val();
    var newPlayer2 = new Player(inputtedPlayerName);
    $(".player2Name").text(newPlayer2.name);

  $("#enter3").click(function(event){
    event.preventDefault();
    var inputtedPlayerName = $("input#player3name").val();
    var newPlayer3 = new Player(inputtedPlayerName);
    $(".player3Name").text(newPlayer3.name);

  $("#play-button").click(function(event){
    event.preventDefault();
    $("#player-name").hide();


    $("button#roll-button").click(function(event){
      event.preventDefault();

    roll = rollDice();
    $("span#result").text(roll);

    if (roll === 1){
      newPlayer.roll = 0;
    // alert(newPlayer.roll);
      if (roll === 1){
        alert("1 Rolled..... turn over");

        // alert("Computer Turn");
        // $("#player1panel").hide();
        // $("#computer-panel").show();
        // roll = rollDice();
        // $("span#result2").text(roll);
        // if (roll === 1){
        //   computerTempScore = 0;
        //   if (roll === 1){
        //     alert("1 Rolled..... turn over");
        //   }
        // }
        // alert(roll);
        // computerTempScore = computerTempScore + roll;
        // alert(computerTempScore);
        // roll = rollDice();
        // if (roll === 1){
        //   computerTempScore = 0;
        //
        //   if (roll === 1){
        //     alert("1 Rolled..... turn over");
        //   }
        // }
        // alert(roll);
        // computerTempScore2 = computerTempScore + roll;
        // alert(computerTempScore2);
        alert(newPlayer2.name + "Your Turn");
        $("#player1panel").show();
        $("#computer-panel").hide();

      }
    } else {
      newPlayer.roll += roll;
    }
    $("span#tempScore2").text(newPlayer2.roll);
    });
    $("button#hold-button").click(function(event){
      event.preventDefault();
      newPlayer.score += newPlayer.roll;
      newPlayer.roll = 0;
      $("span#playerScore").text(newPlayer.score);
      if (newPlayer.score >= 100){
        alert(newPlayer.name + " WINS!!!");
      } else alert(NewPlayer.name)

      // alert("Computer Turn");
      // $("#player1panel").hide();
      // $("#computer-panel").show();
      // roll = rollDice();
      // $("span#result2").text(roll);
      //
      // var turn = 0;
      // var maxTurn = rollDice();
      //
      // while ((roll !==1) && (turn <=maxTurn)) {
      //   computerTempScore = computerTempScore + roll;
      //   alert(roll);
      //   alert(computerTempScore);
      //   roll = rollDice();
      //   if (roll ===1) {
      //     computerTempScore = 0;
      //   }
      //   turn +=1;
      // }
      // console.log(computerTempScore);

      alert(newPlayer.name + "Your Turn");
      $("#player1panel").show();
      $("#computer-panel").hide();
      });
  });
  });
  });
  });
});
