var friendsData = require("../data/friends");

module.exports = function(app) {
    //recieves userinfo from survey
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function(req, res) {
        //targets userinfo when it is recieved
        var newFriend = req.body;
        //targets user survey scores
        var responses = newFriend.scores;
		//match name and image
		var friendName = "";
        var friendImage = "";
        //this is set to a value larger than the survey results can return to simplify the initial comparison
		var totalDifference = 10000; 

		//iterates through data already stored in API
		for (var i = 0; i < friendsData.length; i++) {
            var difference = 0;
            //compares first loop to user responses
			for (var j = 0; j < responses.length; j++) {
                //calculates the difference as an absolute value
				difference += Math.abs(friendsData[i].scores[j] - responses[j]);
			}
			
                //resets difference if it is less than before
                //stores the match in previously declared variables
			    if (difference < totalDifference) {
	                totalDifference = difference;
				    friendName = friendsData[i].name;
				    friendImage = friendsData[i].photo;
			    }
		}

		//pushes userinfo to API
        friendsData.push(newFriend);
        //sends match info to survey page
        res.json({status: 'OK', friendName: friendName, friendImage: friendImage});
    });
}
