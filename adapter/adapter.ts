interface Iphone {
  useLightning();
}
interface Android {
  useMicroUSB();
}

class Iphone7 {
  useLightning() {
    console.log("Using lightning port...");
  }
}

class GooglePixel {
  useMicroUSB() {
    console.log("Using micro USB...");
  }
}

class lightningToMicroUSBAdapter implements Android {
  iphoneDevice: Iphone;

  constructor(iphone: Iphone) {
    this.iphoneDevice = iphone;
  }
  useMicroUSB() {
    console.log("Want to use micro USB, converting to Lightning...");
    this.iphoneDevice.useLightning();
  }
}

let iphone = new Iphone7();
let chargeAdapter = new lightningToMicroUSBAdapter(iphone);

chargeAdapter.useMicroUSB();
