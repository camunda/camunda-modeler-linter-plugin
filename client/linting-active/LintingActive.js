export default class LintingActive {
  constructor(eventBus) {
    eventBus.on('linting.toggle', function(context) {
      var active = context.active;
  
      localStorage.setItem('lintingActive', active);
    });
  }
}

LintingActive.$inject = [ 'eventBus' ];