//start button to start timer and game

$(document).ready(function() {
  var questions = [
    {
      question: "In which game did Mario first appear?",
      choices: [
        "Donkey Kong",
        "Supemario Bros",
        "Mario brothers",
        "Yoshis World"
      ]
    },
    {
      question: "Which damsel did Mario rescue first?",
      choices: ["Peach", "Pauline", "Daisy", "Zelda"]
    },
    {
      question: "Who is Mario's arch-nemisis?",
      choices: ["Chomp-Chomp", "Koopa bros", "Donkey Kong", "Bowser"]
    },
    {
      question: "Who is Mario's brother?",
      choices: ["Wauligi", "Wario", "Luigi", "Peach"]
    },
    {
      question: "What comapny invented Mario?",
      choices: ["Nintendo", "NES", "SONY", "Activision"]
    },
    {
      question: "Before Mario, what was he originally called?",
      choices: ["jumpman", "plumber", "redman", "mustachio"]
    },
    {
      question: "What dinosaur did Mario befriend on his journies?",
      choices: ["Birdo", "Yoshi", "Godzilla", "Captain Krool"]
    },
    {
      question: "What is the fastest completeion of Mario 64?",
      choices: [
        "1 hour and 15 mins",
        "1 hour and 18 mins",
        "1 hour and 25 mins",
        "2 hour and 25 mins "
      ]
    }
  ];

  //timer variable
  var time = 60;
  var correct = 0;
  var incorrect = 0;
  var notGuessed = 0;

  //function to start the time
  $("#start").on("click", function() {
    intervalId = setInterval(count, 1000);
    $("#start").hide();
    displayQuestion();
    $(".container").addClass("bg-white");
    $(".container").addClass("pt-3");

    $(".timer").attr("id", "timer");
    $("#timer").text("Time: " + time);
  });
  //decrements the time by 1 and puts it on html
  function count() {
    time--;
    $(".timer").text("Time: " + time);
    if (time === -1) {
      gameover();
    }
    console.log(time);
  }
  $(".submit").on("click", function() {
    gameover();
  });

  //need to fix this mess****//
  //displays question
  function displayQuestion() {
    //question1

    $(".question").append("<p class ='q1' >" + questions[0].question + "</p>");
    $(".input-group").append(
      "<div class='input-group-prepend'> <div class='input-group-text bg-white border-white '> <input type='radio' name='one'  value='0'><p class='anwsers' id='anwser1'></p><input type='radio' name='one' value='1'><p class='anwsers' id='anwser2'></p><input type='radio' name='one'  value='1'><p class='anwsers' id='anwser3'></p><input type='radio' name ='one' value='1'> <p class='anwsers' id='anwser4'></p></div>  </div> "
    );
    $("#anwser1").text(questions[0].choices[0]);
    $("#anwser2").text(questions[0].choices[1]);
    $("#anwser3").text(questions[0].choices[2]);
    $("#anwser4").text(questions[0].choices[3]);
    //question2
    $(".question2").append("<p class ='q1' >" + questions[1].question + "</p>");
    $(".input-group2").append(
      " <div class='input-group-prepend'>  <div class='input-group-text rounded-0 bg-white border-white  '> <input type='radio' name='two'  value='1'><p class='anwsers' id='anwser5'></p><input type='radio' name='two' value='0'><p class='anwsers' id='anwser6'></p><input type='radio' name='two'  value='1'><p class='anwsers' id='anwser7'></p><input type='radio' name ='two' value='1'> <p class='anwsers' id='anwser8'></p></div> </div>"
    );
    $("#anwser5").text(questions[1].choices[0]);
    $("#anwser6").text(questions[1].choices[1]);
    $("#anwser7").text(questions[1].choices[2]);
    $("#anwser8").text(questions[1].choices[3]);

    //question3
    $(".question3").append("<p class ='q1' >" + questions[2].question + "</p>");
    $(".input-group3").append(
      " <div class='input-group-prepend'> <div class='input-group-text rounded-0 bg-white border-white '> <input type='radio' name='three'  value='1'><p class='anwsers' id='anwser9'></p><input type='radio' name='three' value='1'><p class='anwsers' id='anwser10'></p><input type='radio' name='three'  value='1'><p class='anwsers' id='anwser11'></p><input type='radio' name ='three' value='0'> <p class='anwsers' id='anwser12'></p></div> </div>"
    );

    $("#anwser9").text(questions[2].choices[0]);
    $("#anwser10").text(questions[2].choices[1]);
    $("#anwser11").text(questions[2].choices[2]);
    $("#anwser12").text(questions[2].choices[3]);

    //question4
    $(".question4").append("<p class ='q1' >" + questions[3].question + "</p>");
    $(".input-group4").append(
      " <div class='input-group-prepend'> <div class='input-group-text rounded-0 border-white bg-white '> <input type='radio' name='four'  value='1'><p class='anwsers' id='anwser13'></p><input type='radio' name='four' value='1'><p class='anwsers' id='anwser14'></p><input type='radio' name='four'  value='0'><p class='anwsers' id='anwser15'></p><input type='radio' name ='four' value='1'> <p class='anwsers' id='anwser16'></p></div> </div>"
    );
    $("#anwser13").text(questions[3].choices[0]);
    $("#anwser14").text(questions[3].choices[1]);
    $("#anwser15").text(questions[3].choices[2]);
    $("#anwser16").text(questions[3].choices[3]);

    //question5
    $(".question5").append("<p class ='q1' >" + questions[4].question + "</p>");
    $(".input-group5").append(
      " <div class='input-group-prepend'> <div class='input-group-text rounded-0  bg-white border-white '> <input type='radio' name='five'  value='0'><p class='anwsers' id='anwser17'></p><input type='radio' name='five' value='1'><p class='anwsers' id='anwser18'></p><input type='radio' name='five'  value='1'><p class='anwsers' id='anwser19'></p><input type='radio' name ='five' value='1'> <p class='anwsers' id='anwser20'></p></div> </div>"
    );
    $("#anwser17").text(questions[4].choices[0]);
    $("#anwser18").text(questions[4].choices[1]);
    $("#anwser19").text(questions[4].choices[2]);
    $("#anwser20").text(questions[4].choices[3]);

    //question6
    $(".question6").append("<p class ='q1' >" + questions[5].question + "</p>");
    $(".input-group6").append(
      " <div class='input-group-prepend'> <div class='input-group-text rounded-0 bg-white border-white'> <input type='radio' name='six'  value='0'><p class='anwsers' id='anwser21'></p><input type='radio' name='six' value='1'><p class='anwsers' id='anwser22'></p><input type='radio' name='six'  value='1'><p class='anwsers' id='anwser23'></p><input type='radio' name ='six' value='1'> <p class='anwsers' id='anwser24'></p></div> </div>"
    );

    $("#anwser21").text(questions[5].choices[0]);
    $("#anwser22").text(questions[5].choices[1]);
    $("#anwser23").text(questions[5].choices[2]);
    $("#anwser24").text(questions[5].choices[3]);
    //question7
    $(".question7").append("<p class ='q1' >" + questions[6].question + "</p>");
    $(".input-group7").append(
      " <div class='input-group-prepend'> <div class='input-group-text rounded-0  bg-white border-white'> <input type='radio' name='seven'  value='1'><p class='anwsers' id='anwser25'></p><input type='radio' name='seven' value='0'><p class='anwsers' id='anwser26'></p><input type='radio' name='seven'  value='1'><p class='anwsers' id='anwser27'></p><input type='radio' name ='seven' value='1'> <p class='anwsers' id='anwser28'></p></div> </div>"
    );

    $("#anwser25").text(questions[6].choices[0]);
    $("#anwser26").text(questions[6].choices[1]);
    $("#anwser27").text(questions[6].choices[2]);
    $("#anwser28").text(questions[6].choices[3]);

    //question 8 and submit button
    $(".question8").append("<p class ='q1' >" + questions[7].question + "</p>");
    $(".input-group8").append(
      " <div class='input-group-prepend'> <div class='input-group-text rounded-0  bg-white border-white '> <input type='radio' name='eight'  value='0'><p class='anwsers' id='anwser29'></p><input type='radio' name='eight' value='1'><p class='anwsers' id='anwser30'></p><input type='radio' name='eight'  value='1'><p class='anwsers' id='anwser31'></p><input type='radio' name ='eight' value='1'> <p class='anwsers' id='anwser32'></p></div> </div>"
    );
    $("#anwser29").text(questions[7].choices[0]);
    $("#anwser30").text(questions[7].choices[1]);
    $("#anwser31").text(questions[7].choices[2]);
    $("#anwser32").text(questions[7].choices[3]);
    $(".submit").append("<button id= 'done'>" + "SUBMIT" + "</button>");
  }

  //check anwser//

  function checkanwser() {
    //check anwser 1
    var radioValue = $("input[name='one']:checked").val();
    console.log(radioValue);
    nothingSelected = !$("input[name='one']:checked").false;
    console.log(nothingSelected);
    if (radioValue === "0") {
      correct++;
    } else if (radioValue === "1") {
      incorrect++;
    } else if (nothingSelected === true) {
      notGuessed++;
    }
    //check anwser 2
    var radioValue = $("input[name='two']:checked").val();
    console.log(radioValue);
    nothingSelected = !$("input[name='two']:checked").false;
    console.log(nothingSelected);
    if (radioValue === "0") {
      correct++;
    } else if (radioValue === "1") {
      incorrect++;
    } else if (nothingSelected === true) {
      notGuessed++;
    }
    //check anwser 3
    var radioValue = $("input[name='three']:checked").val();
    console.log(radioValue);
    nothingSelected = !$("input[name='three']:checked").false;
    console.log(nothingSelected);
    if (radioValue === "0") {
      correct++;
    } else if (radioValue === "1") {
      incorrect++;
    } else if (nothingSelected === true) {
      notGuessed++;
    }
    //check anwser 4
    var radioValue = $("input[name='four']:checked").val();

    nothingSelected = !$("input[name='four']:checked").false;

    if (radioValue === "0") {
      correct++;
    } else if (radioValue === "1") {
      incorrect++;
    } else if (nothingSelected === true) {
      notGuessed++;
    }
    //check anwser 5
    var radioValue = $("input[name='five']:checked").val();

    nothingSelected = !$("input[name='five']:checked").false;

    if (radioValue === "0") {
      correct++;
    } else if (radioValue === "1") {
      incorrect++;
    } else if (nothingSelected === true) {
      notGuessed++;
    }
    //check anwser 6
    var radioValue = $("input[name='six']:checked").val();

    nothingSelected = !$("input[name='six']:checked").false;

    if (radioValue === "0") {
      correct++;
    } else if (radioValue === "1") {
      incorrect++;
    } else if (nothingSelected === true) {
      notGuessed++;
    }
    //check anwser 7
    var radioValue = $("input[name='seven']:checked").val();

    nothingSelected = !$("input[name='seven']:checked").false;

    if (radioValue === "0") {
      correct++;
    } else if (radioValue === "1") {
      incorrect++;
    } else if (nothingSelected === true) {
      notGuessed++;
    }
    //check anwser 8
    var radioValue = $("input[name='eight']:checked").val();

    nothingSelected = !$("input[name='eight']:checked").false;

    if (radioValue === "0") {
      correct++;
    } else if (radioValue === "1") {
      incorrect++;
    } else if (nothingSelected === true) {
      notGuessed++;
    }
  }
  //ends timer and shows players score
  function gameover() {
    clearInterval(intervalId);
    checkanwser();
    $("#letshide").hide();
    $("body").prepend("<div class = 'final'> </div>");
    $(".final").append("<p> Correct: " + correct + "</p>");
    $(".final").append("<p>Incorrect: " + incorrect + "</p>");
    $(".final").append("<p>Not guessed: " + notGuessed + "</p>");
  }
});
