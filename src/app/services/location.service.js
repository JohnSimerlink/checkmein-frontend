//callback should have one param. coords: {lat, long}
function getCoords(callback){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(callback);
  } else {
    throw Error('geolocation not supported')
  }
}
function getPositionCoords(callback){
  getCoords(function(position){
    callback(position.coords)
  })
}
export default getPositionCoords
