export const TOPIC = 'thing-update/StartIoT/#'
export const SENSORS = {
  '00001310': {
    name: 'REALF'
  },
  '00001312': {
    name: 'REALF2'
  },
  '00001313': {
    name: 'REALF3'
  },
  '00001314': {
    name: 'REALF4 (A112)'
  }
};

export const COLORS = ['#6ee86e', '#ff9900', '#ff0000', '#990099']
export const THRESHOLDS = {
  pm25: {
    day:  [15, 25, 75],  // > 75
    hour: [25, 40, 150]  // > 150
  },
  pm10: {
    day:  [30, 50, 150], // > 150
    hour: [50, 80, 400]  // > 400
  }
};
