class ElectricalAppliance {
  constructor() {
    this.name = 'Electrical Appliance';
    this.wattage = 20;
    this.powered = true;
    this.turnon = function() {
    this.powered = true;
    console.log(this.name + ' Turned ON'); }
    this.turnoff = function() {
    this.powered = false;
    console.log(this.name + ' Turned OFF'); }
  }
}

class Computer extends ElectricalAppliance {
  constructor() {
    super();
    this.name = 'Computer';
    this.wattage = 400;
    this.cpu = 'AMD';
    this.cpufrequency = 2400;
    this.overclock = function() {
      this.cpufrequency = this.cpufrequency + 240;
    }
    this.revertoverclock = function() {
      this.cpufrequency = 2400;
    }
  }
}

class Lamp extends ElectricalAppliance {
  constructor() {
    super();
    this.name = 'Lamp';
    this.wattage = 20;
    this.brightness = 100
    this.powered = false;
    this.dim = function() {
      this.brightness = this.brightness - 5;
    }
    this.brighten = function() {
      this.brightness = this.brightness + 5;
    }
  }
}



const computer = new Computer();
const computer2 = new Computer();
computer2.cpu = 'Intel';
const tablelamp = new Lamp();
console.log(computer.name);
computer.turnoff();
console.log(computer.powered);
console.log(computer.cpufrequency);
computer.overclock();
computer.overclock();
console.log(computer.cpufrequency);
console.log(computer);
computer.turnon();
computer.revertoverclock();
console.log(computer.cpufrequency);
console.log(tablelamp.name);
tablelamp.dim();
console.log(tablelamp.brightness);
tablelamp.turnoff();
console.log(computer.cpu);
console.log(computer2.cpu);