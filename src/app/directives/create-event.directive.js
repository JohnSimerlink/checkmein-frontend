import angular from 'angular'
import location from '../services/location.service.js'
console.log('create event directive file used')
location(function(coords){
  console.log('from inside the directive. lat is', coords.latitude, ' and long is ', coords.longitude)
})
function createevent(){
  console.log('create event constructor called')
  return {
    restrict: 'E',
    scope: {
      name: "=",
      day: "=",//TODO: replace scope with a controller
    },
    template: require('../templates/createevent.html')
  }
}

const MODULE_NAME ='directives.createevent'

angular.module(MODULE_NAME, [])
  .directive('createevent', createevent)

export default MODULE_NAME
