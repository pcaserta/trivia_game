//start button to start timer and game

$(document).ready(function () {

    var questions = [{

        question: "In which game did Mario first appear?",
        choices: ["donkey kong", "supemario brothers", "mario brothers", "yoshis world"],
    }, {
        question: "Which damsel did Mario rescue first?",
        choices: ["Peach", "Pauline", "Daisy", "Zelda"],
    }, {
        question: "Whos is Mario's arch-nemisis?",
        choices: ["Chomp-Chomp", "Koopa bros", "Donkey Kong", "Bowser"]
    },{
        question: "Who is Mario's brother?",
        choices: ["Wauligi", "Wario", "Luigi", "Peach"]
    },{
        question: "What comapny invented Mario",
        choices: ["Nintendo", "NES", "SONY", "Activision"]
    },

    
    ]

    //timer variable
    var time = 10
    var correct = 0
    var incorrect = 0
    notGuessed = 0
    //function to start the time
    $("#start").on("click", function () {

        intervalId = setInterval(count, 1000);
        $("#start").hide();
        displayQuestion()


    })
    //decrements the time by 1 and puts it on html
    function count() {
        $(".timer").text(time);
        time--
        if (time === -1) {
            gameover()
        }
        console.log(time)
    }


    //displays question
    function displayQuestion() {
        //question1
        $(".input-group").append(" <div class='input-group-prepend'> <div class='input-group-text'> <input type='radio' name='one'  value='0'><p class='anwsers' id='anwser1'></p><input type='radio' name='one' value='1'><p class='anwsers' id='anwser2'></p><input type='radio' name='one'  value='1'><p class='anwsers' id='anwser3'></p><input type='radio' name ='one' value='1'> <p class='anwsers' id='anwser4'></p></div> </div>")
        $(".question").text(questions[0].question)
        $("#anwser1").text(questions[0].choices[0])
        $("#anwser2").text(questions[0].choices[1])
        $("#anwser3").text(questions[0].choices[2])
        $("#anwser4").text(questions[0].choices[3])
        //question2
        $(".input-group2").append(" <div class='input-group-prepend'> <div class='input-group-text'> <input type='radio' name='two'  value='1'><p class='anwsers' id='anwser5'></p><input type='radio' name='two' value='0'><p class='anwsers' id='anwser6'></p><input type='radio' name='two'  value='1'><p class='anwsers' id='anwser7'></p><input type='radio' name ='two' value='1'> <p class='anwsers' id='anwser8'></p></div> </div>")
        $(".question2").text(questions[1].question)
        $("#anwser5").text(questions[1].choices[0])
        $("#anwser6").text(questions[1].choices[1])
        $("#anwser7").text(questions[1].choices[2])
        $("#anwser8").text(questions[1].choices[3])

        //question3
        $(".input-group3").append(" <div class='input-group-prepend'> <div class='input-group-text'> <input type='radio' name='three'  value='1'><p class='anwsers' id='anwser9'></p><input type='radio' name='three' value='1'><p class='anwsers' id='anwser10'></p><input type='radio' name='three'  value='1'><p class='anwsers' id='anwser11'></p><input type='radio' name ='three' value='0'> <p class='anwsers' id='anwser12'></p></div> </div>")
        $(".question3").text(questions[2].question)
        $("#anwser9").text(questions[2].choices[0])
        $("#anwser10").text(questions[2].choices[1])
        $("#anwser11").text(questions[2].choices[2])
        $("#anwser12").text(questions[2].choices[3])

        //question4
        $(".input-group4").append(" <div class='input-group-prepend'> <div class='input-group-text'> <input type='radio' name='four'  value='1'><p class='anwsers' id='anwser13'></p><input type='radio' name='four' value='1'><p class='anwsers' id='anwser14'></p><input type='radio' name='four'  value='0'><p class='anwsers' id='anwser15'></p><input type='radio' name ='four' value='1'> <p class='anwsers' id='anwser16'></p></div> </div>")
        $(".question4").text(questions[3].question)
        $("#anwser13").text(questions[3].choices[0])
        $("#anwser14").text(questions[3].choices[1])
        $("#anwser15").text(questions[3].choices[2])
        $("#anwser16").text(questions[3].choices[3])

        //question5
        $(".input-group5").append(" <div class='input-group-prepend'> <div class='input-group-text'> <input type='radio' name='five'  value='0'><p class='anwsers' id='anwser17'></p><input type='radio' name='four' value='1'><p class='anwsers' id='anwser18'></p><input type='radio' name='four'  value='1'><p class='anwsers' id='anwser19'></p><input type='radio' name ='four' value='1'> <p class='anwsers' id='anwser20'></p></div> </div>")
        $(".question5").text(questions[4].question)
        $("#anwser17").text(questions[4].choices[0])
        $("#anwser18").text(questions[4].choices[1])
        $("#anwser19").text(questions[4].choices[2])
        $("#anwser20").text(questions[4].choices[3])




    }

    //check anwser//



    function checkanwser() {

        var radioValue = $("input[name='one']:checked").val();
        console.log(radioValue)
        nothingSelected = !$("input[name='one']:checked").false
        console.log(nothingSelected)
        if (radioValue === "0") {
            correct++
            console.log(correct)
        } else if (radioValue === "1") {
            incorrect++
            console.log(incorrect)
        } else if (nothingSelected === true) {
            notGuessed++
            console.log(notGuessed)
        }

        var radioValue = $("input[name='two']:checked").val();
        console.log(radioValue)
        nothingSelected = !$("input[name='two']:checked").false
        console.log(nothingSelected)
        if (radioValue === "0") {
            correct++
            console.log(correct)
        } else if (radioValue === "1") {
            incorrect++
            console.log(incorrect)
        } else if (nothingSelected === true) {
            notGuessed++
            console.log(notGuessed)
        }
        var radioValue = $("input[name='three']:checked").val();
        console.log(radioValue)
        nothingSelected = !$("input[name='three']:checked").false
        console.log(nothingSelected)
        if (radioValue === "0") {
            correct++
            console.log(correct)
        } else if (radioValue === "1") {
            incorrect++
            console.log(incorrect)
        } else if (nothingSelected === true) {
            notGuessed++
            console.log(notGuessed)
        }

        var radioValue = $("input[name='four']:checked").val();
        console.log(radioValue)
        nothingSelected = !$("input[name='four']:checked").false
        console.log(nothingSelected)
        if (radioValue === "0") {
            correct++
            console.log(correct)
        } else if (radioValue === "1") {
            incorrect++
            console.log(incorrect)
        } else if (nothingSelected === true) {
            notGuessed++
            console.log(notGuessed)
        }
        var radioValue = $("input[name='five']:checked").val();
        console.log(radioValue)
        nothingSelected = !$("input[name='five']:checked").false
        console.log(nothingSelected)
        if (radioValue === "0") {
            correct++
            console.log(correct)
        } else if (radioValue === "1") {
            incorrect++
            console.log(incorrect)
        } else if (nothingSelected === true) {
            notGuessed++
            console.log(notGuessed)
        }





       
    }
//ends timer and shows players score
    function gameover() {
        clearInterval(intervalId)
        checkanwser()
        $('#letshide').hide()
        $('#correct').append("Correct: " + correct)
        $("#incorrect").append("Incorrect: " + incorrect)
        $("#notGuessed").append("Not guessed: " + notGuessed)

    }
})