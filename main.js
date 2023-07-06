const inchInput = document.querySelector('#inch > input');
const centimeterInput = document.querySelector('#centimeter > input');
const meterInput = document.querySelector('#meter > input');

// const  = (num) => {
//   return num.toFixed(2);
// };


const inchToCmAndM = () => {
  const inch = parseFloat(inchInput.value);
  const centimeter = inch * 2.54;
  const meter = inch * 0.0254;

  centimeterInput.value = centimeter;
  meterInput.value = meter;
};


const centimeterToInAndM = () => {
  const centimeter = parseFloat(centimeterInput.value);
  const inch = centimeter * 0.393701;
  const meter = centimeter * 0.01;

  inchInput.value = inch;
  meterInput.value = meter;
};

const meterToInAndCm = () => {
  const meter = parseFloat(meterInput.value);
  const inch = meter * 39.3701;
  const centimeter =  meter * 100;

  inchInput.value = inch;
  centimeterInput.value = centimeter;
};


const main = () => {
  inchInput.addEventListener('input', inchToCmAndM);
  centimeterInput.addEventListener('input', centimeterToInAndM);
  meterInput.addEventListener('input', meterToInAndCm);
};

main();
