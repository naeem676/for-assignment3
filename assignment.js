

////////start feetToMile function////////////


function feetToMile(feet){
          const mile = feet / 5280;
          return mile;

}
const myMile = feetToMile(10560);
console.log(myMile);


/////End feetToMile function////////////////////




/////start woodCalculator function /////////////


function woodCalculator(chair, table, bed){
    const result = (chair*14) + (table*30) + (bed*45);
    return result;

}
const cubicFeet = woodCalculator(4, 6, 8);

console.log(cubicFeet);

///End woodCalculator function///////////////


////start brickCalculator function///////////


function brickCalculator(floor) {
    if(floor <= 10) {
        const result = 15*1000;
        return result;
    } 
    else if(floor <= 20){
        const result = 12*1000;
        return result;
    } 
    else{
        const result = 10*1000;
        return result;
    }

    
}
const myFloor = brickCalculator(2);
console.log(myFloor);

////End brickCalculator function/////////////


/////start tinyfriend function///////////

const arr = [14, 58, 20, 77, 66, 82, 42, 67, 42]

function tinyFriend(arr){
          const min = Math.min.apply(Math, arr);
    return min;
}

const myTinyFriend = tinyFriend(arr); 

console.log(myTinyFriend);



//////End tiny friend function//////