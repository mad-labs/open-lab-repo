"use strict";

//let

function fetch(url, callback){
  setTimeout(function() {
        _fetch(url, callback);
    }, 1000);
}

function _fetch(url, callback){
  //fetching
  console.log("calling API: " + url);
  //fetched
  callback();
}


function loadProfiles(userNames) {

  for (let i in userNames) {
    console.log("fetching: " + userNames[i]);
    fetch("/users/" + userNames[i], function (){
      console.log(userNames[i], " fetched!");
    })
  }
}

loadProfiles(["a", "b", "c", "d"]);
