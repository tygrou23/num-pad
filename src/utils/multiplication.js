const generateRandomNumb = () => {
    //define min number
    const min = 1;
    //define max number
    const max = 9;
    //use math function => generate random from max and min
    return Math.floor(Math.random()* (+max - +min)) + +min;
};

export const multiplicationalgo = ()=>{

    //define number to call generaterandom number
    const number1 = generateRandomNumb();
    const number2 = generateRandomNumb();

    return {
        //set the question with the number1 X number 2
        question : `${number1} X ${number2} =`,
        //define the answer with the result of number1*number2
        answer : number1*number2
    }
};