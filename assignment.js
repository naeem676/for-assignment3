////////start feetToMile function////////////


function feetToMile(feet){
          const mile = feet / 5280;
          return mile;

}
const myMile = feetToMile();
console.log(myMile);


/////End feetToMile function////////////////////


/////start woodCalculator function /////////////




///End woodCalculator function///////////////


/////start tinyfriend function///////////

var arr = [14, 58, 20, 77, 66, 82, 42, 67, 42]

function tinyFriend(arr){
          var min = Math.min.apply(Math, arr);
    return min;
}



console.log(tinyFriend(arr));

//////End tiny friend function//////