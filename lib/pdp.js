// Constructor for the PDP objects
function Pdp() {
  this.data = {
    visits: {},
    fleet: {},
    options: {}
  }
};

Pdp.routeKey = 'pdp'
Pdp.routingShortEndpoint = `/${Pdp.routeKey}`
Pdp.routingLongEndpoint = `${Pdp.routingShortEndpoint}-long`
Pdp.fixEndpoint = `/fix-${Pdp.routeKey}`

Pdp.prototype.addVisit = function(id, visit) {
  this.data.visits[id] = visit;
}

Pdp.prototype.addVehicle = function(id, vehicle) {
  this.data.fleet[id] = vehicle;
}

Pdp.prototype.addOption = function(id, option) {
  this.data.options[id] = option;
}

module.exports = Pdp
