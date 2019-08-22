// Constructor for the VRP objects
function Vrp() {
  this.data = {
    visits: {},
    fleet: {},
    options: {},
    solution: {},
    unserved: []
  }
};

Vrp.routeKey = 'vrp'
Vrp.routingShortEndpoint = `/${Vrp.routeKey}`
Vrp.routingLongEndpoint = `${Vrp.routingShortEndpoint}-long`
Vrp.fixEndpoint = '/fix'

Vrp.prototype.addVisit = function(id, visit) {
  this.data.visits[id] = visit;
}

Vrp.prototype.addVehicle = function(id, vehicle) {
  this.data.fleet[id] = vehicle;
}

Vrp.prototype.addOption = function(id, option) {
  this.data.options[id] = option;
}

Vrp.prototype.addSolution = function(id, option) {
  this.data.solution[id] = option;
}

Vrp.prototype.addUnserved = function(stopId) {
  this.data.unserved.push(stopId);
}


module.exports = Vrp
