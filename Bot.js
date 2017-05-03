var txt;
function preoload(){
    txt = loadStrings("Greetings.txt");
}
//Tells our console the bot is starting
console.log("The Bot is Starting Now!");

//Require twit package
var Twit = require('twit');

//We need to authemticate our twitter

var T = new Twit({
    consumer_key: '73CAn0rBEkLvHHXBPuR4YRoJ2',
    consumer_secret: 'rPss5pUsCkwdhKzCYp40vVvubT2yVRLY1W9ZDEXeIjFVBdQsnW',
    access_token: '847899075831672833-pRvmEizc9R5pcbAuUQvg2GAPn0SKkUf',
    access_token_secret: 'iaEYdqRVeQWzbzWOwtKu70g2YjsvsMfcaCVLp0nfjl8UK',
    timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
})




//GET = searches twitter by #, location, user, etc.
//POST = Posts tweets
//STREAM = Follows, you can @ them, mentions, you can @ them.

//
//  search twitter for all tweets containing the word 'banana' since July 11, 2011
//
/*
var parameters = { 
    q: 'apple since:2011-07-11', 
    count: 2,
    lang: 'en'
}
T.get('search/tweets', parameters, gotData);

function gotData(err, data, response){
    
    var tweets = data.statuses;
    
    for(var i = 0; i < tweets.length; i++){
      console.log(data.statuses[i].text);  
    }
    
  
}


var tweet = { 
  status: 'hello world!' 
}
T.post('statuses/update', tweet, gotData);
*/

/*Post Tweet*/
tweetIt();

//set Interval(tweetIt, 1000*45);
function tweetIt() {
    //Find a random #1-100 and multiply by 100, and then round down.
    var r = Math.floor(Math.random() * 100);
    var tweet = {
        status: 'Here is the current random number ' + r + ' #ProvidenceHigh #PHS #ecs #MEMES'
    }
    T.post('statuses/update', tweet, gotData);

    function gotData(err, data, response) {
        if (err) {
            console.log("Something went wrong!");
        } else {
            console.log("It Posted!");
        }
    }
}
//stream function

followTweet();

function followTweet() {

    var stream = T.stream('user');
    //anytime I gain a follower

    stream.on('follow', followed);
    
    function followed(eventMsg){
        var name = eventMsg.source.name;
        var screenName = eventMsg.source.screen_name;
        
        tweetIt2('@' + screenName + ' Hello there.');
        
        console.log('Finished Tweet Json');
        var json = JSON.stringify(eventMsg, null, 2);
        fs.writeFile("#tweet.json", json);
    }

}

function tweetIt2(txt){
    
    var tweet = {
        status: txt
    }
    
    T.post('statuses/update', tweet, tweeted);
    function tweeted(err, data, response){
        if (err){
            console.log("Something went wrong!");
        }
        else
        {
            console.log("You were followed.");
        }
    }
}

/*var exec = require('child_process').exec;
var cmd = '"C:\Users\17reed.jacob\Desktop\P5ECS-Jacob\processing-3.3\processing-java.exe" --sketch="C:\Users\17reed.jacob\Desktop\P5ECS-Jacob\Lesson 20\circlesketch" --run';
exec(cmd, processing);*/

/*
var fs = require('fs');


processing();


function processing(eventMsg){
    
    //console.log('Finished Image!');
    //var json - JSON.stringify(eventMsg, null, 2);
   // fs.writeFile("#tweet.json", json);
}
*/
picking();
function picking() {
    
}
