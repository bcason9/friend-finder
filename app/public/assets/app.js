//initial page display
$(window).on("load", function() {
    $("#result-div").hide();
    $("#reset").hide();

//reset page function
  $("#reset").on("click", function() {
    $("#survey").show();
    $("#submit").show();
    $(".field").val("")
    $("#result-div").hide();
    $("#reset").hide();
    $("#match-name").empty();
    
  });

//submit function
  $("#submit").on("click", function(event) {
    event.preventDefault();
    
    //form validation
    if ($(".field").val() != "") {
    

    //stores responses in an object
        var userInfo = {
        name: $("#name").val(),
        photo: $("#photo").val(),
        scores: [
          $("#ques1").val(),
          $("#ques2").val(),
          $("#ques3").val(),
          $("#ques4").val(),
          $("#ques5").val(),
          $("#ques6").val(),
          $("#ques7").val(),
          $("#ques8").val(),
          $("#ques9").val(),
          $("#ques10").val()
        ]
      };

      //console.log(userInfo);

      //ajax post route sends userInfo to friends API
      $.ajax({
        url: "/api/friends",
        method: "POST",
        data: userInfo
      })
      .then(function(data) {
        //console.log(data)
        //displays results and reformats page
        $("#survey").hide();
        $("#submit").hide();
        $("#result-div").show();
        $("#reset").show();
        $("#match-name").append("<h2>Match Name: " + data.friendName + "<br>Photo: " + data.friendImage + "</h2>");
      });
      
    } else {
      alert("Please fill out all required fields!");
    }

  
      
    });
    
  });
  