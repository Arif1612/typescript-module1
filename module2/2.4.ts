{
  // start

  //interface - generic

  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };

    smartWatch: T;
    bike?: X;
  }

  type EmilabWatch = {
    brand: string;
    model: string;
    display: string;
  };

  interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  interface YamahaBike {
    model: string;
    engineCapacity: string;
  }

  const poorDeveloper: Developer<EmilabWatch> = {
    name: "Persi",
    computer: {
      brand: "Asus",
      model: "X-2564",
      releaseYear: 2013,
    },
    smartWatch: {
      brand: "Emilab",
      model: "X-25",
      display: "OLED",
    },
  };

  const richDeveloper: Developer<AppleWatch, YamahaBike> = {
    name: "rich dev",
    computer: {
      brand: "HP",
      model: "Y-2564",
      releaseYear: 2017,
    },
    smartWatch: {
      brand: "Apple",
      model: "Y-25",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "Yamaha",
      engineCapacity: "100cc",
    },
  };
  //end
}
