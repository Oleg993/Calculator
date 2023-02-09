const operations = {
  sum: '+',
  subtract: '-',
  division: '/',
  multiply: '*',
};

const calculate = ({ a, b, operation }) => {
  let result = null;

  switch (operation) {
    case operations.sum:
      return (result = a + b);
      break;

    case operations.subtract:
      return (result = a - b);
      break;

    case operations.division:
      return (result = a / b);
      break;

    case operations.multiply:
      return (result = a * b);
      break;

    default:
      break;
  }
  return result;
};
