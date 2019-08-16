// Constructor for the VRP objects
function Vrp() {
  this.data = {
    visits: {},
    fleet: {},
    options: {}
  }
};

Vrp.routeKey = 'vrp'
Vrp.routingShortEndpoint = `/${Vrp.routeKey}`
Vrp.routingLongEndpoint = `${Vrp.routingShortEndpoint}-long`
Vrp.fixEndpoint = `/fix-${Vrp.routeKey}`

Vrp.prototype.addVisit = function(id, visit) {
  this.data.visits[id] = visit;
}

Vrp.prototype.addVehicle = function(id, vehicle) {
  this.data.fleet[id] = vehicle;
}

Vrp.prototype.addOption = function(id, option) {
  this.data.options[id] = option;
}

module.exports = Vrp
