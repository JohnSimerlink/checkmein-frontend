import angular from 'angular'
console.log('create event directive file used')
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
