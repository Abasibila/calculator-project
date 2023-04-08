
let calculation = localStorage.getItem('calculation') || '';

const upDateCalculation = (number) => {
      calculation += number;
    document.querySelector('.calc').innerHTML = calculation;
    localStorage.setItem('calculaton', calculation);
    }

   

    const result = () => {
      eval(calculation);
      calculation = eval(calculation);
      document.querySelector('.result').innerHTML = calculation;
     
    }
    function clear() {
      calculation = '';
      document.querySelector('.result').innerHTML = calculation;
      document.querySelector('.calc').innerHTML = calculation;
      localStorage.setItem('calculation', calculation);

    }