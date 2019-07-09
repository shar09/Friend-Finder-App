var friends = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function(req, res) {
    return res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    console.log(newFriend);

    //scores of new user
    var newScores = req.body.scores;
    console.log(newScores);
    //sum diff of scores of new user and existing user
    var scoresArr = [];
    var bestMatch = 0;
    try {
        for(i=0; i < friends.length; i++) {
            var scoreDiff = 0;
            for(j=0; j < newScores.length; i++) {
                scoreDiff = scoreDiff + Math.abs(parseInt(friends[i].scores[j]-parseInt(newScores[j])));
            }
        }
    }    
    
    catch(e) {
        console.log("error", e);
    }

    scoresArr.push(scoreDiff);
    console.log("Scores array:" +scoresArr);

    for(i=0; i < scoresArr.length; i++) {
        if(scoresArr[i] <= scoresArr[bestMatch])
        bestMatch = i;
    }

    var soulMate = friends[bestMatch];
    res.json(soulMate.name);
    console.log(soulMate);

    //pushing new user to the friends object
    friends.push(newFriend);
    res.json(newFriend);


    // var bestMatch = {
    //     name: "",
    //     photo: "",
    // };

    // var friend = newFriend.name;
    // var friendScores = newFriend.scores;
    
    
});
}