const func = () => {
  const sum = (a, b) => a + b;
  const test = 100;
  let x = 10;
  let y = 20;

  console.log(sum(x, y)); // 30

  debugger;

  x = 20;
  y = 30;

  console.log(sum(x, y)); // 50
};

func();
