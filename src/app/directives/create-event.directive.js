import angular from 'angular'
console.log('create event directive file used')
function createEvent(){
  console.log('create event constructor called')
  return {
    restrict: 'E',
    scope: {
      name: "=",
      day: "=",//TODO: replace scope with a controller
    },
    template: require('../templates/create-event.html')
  }
}

const MODULE_NAME ='directives.createEvent'

angular.module(MODULE_NAME, [])
  .directive('create-event', createEvent)

export default MODULE_NAME
