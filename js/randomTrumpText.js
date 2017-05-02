text_list = [
              "Oh shit waddup Trump MAGA",
              "I can just see Kim Jong saying this as Trump offers him some laced meth with Pence at his side",
              "What do you think about American healthcare and healthcare in other countries like, say, european ones? Some people say that healthcare is dumb because you pay taxes for it and may never need it. On the other hand, people who get fucked and -really- need to get treated for something serious don't need to worry about it.  What's your opinion? Which is better?  Thoughts on Obamacare and Trump removing it without replacing it with something better like he promised?",
              "That's a bit too far, I'm guessing you're from the US. You can't really make jokes at any country when your president is Donald trump.  Reply when you finish shooting up a school.",
              "Ok.  All done. Don't blame me for Trump.  I voted for Donald Duck.",
              "Yeah that's basically how Trump got millions of free air time and press during his campaign.",
              "I voted for trump because I believed the market would adjust for renewables and it force the private sector/public sector to make these obviously good decisions. Basically I'm going to saw my leg off until you start respecting the environment.",
              "i prefer this to the feds telling everyone what to do. it doesn't matter if trump agrees, or if the epa is making their rules or not. if corporations or cities or states want to be sustainable, go for it. however, what is the real plan? what are the consequences for not reaching this plan? where is the money coming from? what about all the bats and birdies that wind turbines kill? we'll see how it works out in 20 years...",
              "I saw Atlanta and thought sweet Donald Glovers second season is coming out soon",
              "Found the Trump supporter. ",
              "\"This just in: Trump administration designates coal as a \"clean energy source\" for legal purposes\". ",
              "So you don't support Trump but reguarly jerk yourself off on t_d? Right..... Why don't you read up on LCOE, and basic economics. On-shore wind is pretty much the cheapest power source there is. It is virtually identical to natural gas in terms of cost. I havent read a ton on Georgetown but I am guessing you are whining about initial principle costs for building wind turbines, and ignoring actual accounting - meaning the money that will be saved over the total life of said wind turbine. I am assuming they are building on-shore wind because they are somewhere in Texas, and wind generation works quite well there. ",
              "It could power the Trump administration\u2026 Sorry, never mind. I'm thinking TOO big.",
             ];

name_list = [
              "And_You_Like_It_Too",
              "fuckyou2258",
              "arkindal",
              "AlphaWolf901",
              "TokeyWakenbaker",
              "rycia007",
              "FormlessAllness",
              "caine269",
              "EatGarbageDip",
              "TheFilthiestCuck",
              "Woodrow_Butnopaddle",
              "TheFilthiestCuck",
              "bonelessevil",
             ];

rank_list = [
              5,
              10,
              0,
              1,
              9,
             ];

var amount = text_list.length;
$("#numberofComments").text(amount);

$("#comment1").text(text_list[rank_list[0]]);
$("#comment2").text(text_list[rank_list[1]]);
$("#comment3").text(text_list[rank_list[2]]);
$("#comment4").text(text_list[rank_list[3]]);
$("#comment5").text(text_list[rank_list[4]]);

$("#author1").text("- /u/" + name_list[rank_list[0]]);
$("#author2").text("- /u/" + name_list[rank_list[1]]);
$("#author3").text("- /u/" + name_list[rank_list[2]]);
$("#author4").text("- /u/" + name_list[rank_list[3]]);
$("#author5").text("- /u/" + name_list[rank_list[4]]);

var counter = 0

function replaceText(){
  text = text_list[counter];
  if(text.length > 80){
    trump_array = ["Trump","trump","Donald","donald"];
    for(var i=0; i < trump_array.length; i++){
      index = text.indexOf(trump_array[i]);
      if(index > -1){
        if(index > 200){
          text = text.substring(index - 200, index) + text.substring(index,index+206);
          text = "... " + text + " ...";
        }
        else{
          diff = 200 - index;
          text = text.substring(0, index) + text.substring(index, index+206 + diff);
          text = text + " ...";
        }
      }
    }
  }
  $("#comment").text(text + " -/u/" + name_list[counter]);
  counter += 1;
  if((counter % amount) == 0){
    counter = 0;
  }
}

function reload(){
  location.reload();
}

replaceText();
setInterval(replaceText,10000);
setInterval(replaceText,600000);