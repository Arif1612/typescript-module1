{
  // generic constraint with keyof operator

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "Ship"; // manually

  type Owner2 = keyof Vehicle;

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "Mr. persian",
    age: 26,
    address: "ctg",
  };
  const car = {
    model: "Toyota",
    year: 200,
  };

  const result1 = getPropertyValue(user, "name");
  const result2 = getPropertyValue(car, "model");

  //  obj['key']  26

  //
}
