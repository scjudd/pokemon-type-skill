'use strict';

var AlexaSkill = require('./AlexaSkill'),
    types = require('./types');

var APP_ID = undefined; //replace with 'amzn1.echo-sdk-ams.app.[your-unique-value-here]';

var PokeTypeHelper = function() {
  AlexaSkill.call(this, APP_ID);
};

PokeTypeHelper.prototype = Object.create(AlexaSkill.prototype);
PokeTypeHelper.prototype.constructor = PokeTypeHelper;

PokeTypeHelper.prototype.eventHandlers.onLaunch = function(launchRequest, session, response) {
  var speechOutput = "You can ask a question like, what attacks are strong against fire types? ... Now, do you want to be the very best, like no one ever was?";
  var repromptText = "Try asking, what types are strong against the ghost type.";
  response.ask(speechOutput, repromptText);
};

PokeTypeHelper.prototype.intentHandlers = {

  WeakIntent: function(intent, session, response) {

    var defending = intent.slots.Defending.value.toLowerCase();

    if (types[defending] === undefined) {
      return response.tell("Sorry, there is no " + defending + " type.");
    }

    if (types[defending]['weak'] === undefined ||
        types[defending]['weak'].length === 0) {
      return response.tell("The " + defending + " type has no weaknesses.");
    }

    var n = types[defending]['weak'].length;
    var speechOutput = "The " + defending + " type is weak against ";

    for (var i = 0; i < n; i++) {
      var type = types[defending]['weak'][i];

      if (n == 1) {
        speechOutput += 'the ' + type + ' type.'
      } else if (i == n-1) {
        speechOutput += 'and ' + type + ' types.';
      } else {
        speechOutput += type + ', ';
      }
    }

    response.tell(speechOutput);
  }
};

exports.handler = function(event, context) {
  var PokeTypeHelper = new PokeTypeHelper();
  PokeTypeHelper.execute(event, context);
};
