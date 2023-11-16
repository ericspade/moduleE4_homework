function ElectricalAppliance(name, wattage, powered){
  this.name = name
  this.wattage = wattage;
  this.powered = powered;
};


ElectricalAppliance.prototype.turnOn = function() {
    console.log(this.name + ' Turned ON');
    this.powered = true;
}

ElectricalAppliance.prototype.turnOff = function() {
    console.log(this.name + ' Turned OFF');
    this.powered = false;
}

function Computers(name, wattage, cpu, cpuFrequency) {
    this.name = name;
    this.wattage = wattage;
    this.cpu = cpu;
    this.cpuFrequency = cpuFrequency;
}

function Lamps(name, wattage, brightness) {
    this.name = name;
    this.wattage = wattage;
    this.brightness = brightness;
}

function totalPowerUsed(...appliances) {
    let total = 0;
    for (let each of appliances) {
        if (each.powered) {
            total += each.wattage;
        }
    }
    return total;
}

Computers.prototype = new ElectricalAppliance();
Lamps.prototype = new ElectricalAppliance();

const comp1 = new Computers('comp1', 400, 'AMD', 2400);
const lamp1 = new Lamps('lamp1', 20, 100);

console.log(comp1);
console.log(lamp1);
comp1.turnOff();
console.log(totalPowerUsed(comp1, lamp1));
comp1.turnOn();
console.log(totalPowerUsed(comp1, lamp1));