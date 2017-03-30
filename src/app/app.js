import angular from 'angular'
import createEvent from './directives/create-event.directive'
let app = () => {
  return {
    restrict: 'E', //TODO DO we always need this? firstapp2/src/app/app.js doesn't have it even though it is a directive
    scope: {
      day: '='  
    },//TODO replace this with a controller?
    template: require('./app.html')
  }
}
/*
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCd_J1PaIg222vbnhzdPxizfmq_G5iAcRo",
    authDomain: "checkmein-d9a4c.firebaseapp.com",
    databaseURL: "https://checkmein-d9a4c.firebaseio.com",
    storageBucket: "checkmein-d9a4c.appspot.com",
    messagingSenderId: "711964979059"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
  userlocation = {}
function printLocation(){
  getLocation(function(position){
    userlocation = position.coords
    console.log(position.coords.latitude + " " + position.coords.longitude, position)
  })
}
//printLocation()

function getLocation(callback){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(callback)
  } else {
    throw Error('geolocation not supported')
  }
}
function writeUserData(userId, name, email) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email
  });
}
timeRange = {
  start: new Date(),
  end: new Date()+2*3600*1000
}
function createSampleEvent(){
  var rand = Math.floor(Math.random() * 10 + 1) 
  console.log('the user location we are passingin is', userlocation)
  createEventDb("Party" + rand, userlocation, 100, "SEL", timeRange)
}
function createEventDb(name, center, radius, locationAlias, timeRange ) {
  
  console.log('the center of event is', center)
  //get a new key for a new event
  if ( name.trim().length <= 0 ){
    throw Error('No Event name')
    return
  }
  if ( Object.keys(center).length === 0 || !radius ){
    debugger;
    throw Error('missing location data')
    return
  }
  if (Object.keys(timeRange).length === 0 ){
    throw Error ('missing time data')
    return
  }
  const eventKey = firebase.database().ref().child('events').push().key;
  const event = {
    name,
    center,
    radius,
    locationAlias,
    timeRange
  }
  firebase.database().ref('events/' + eventKey).set(event)
}
firebase.database().ref('/users/' + 1).once('value').then(function(snapshot) {
  var username = snapshot.val().username;
  console.log('username is ', username)
});
*/
const MODULE_NAME = 'app'
angular.module(MODULE_NAME,[createEvent])
  .directive(MODULE_NAME, app)
export default MODULE_NAME
console.log('this is app.js')
