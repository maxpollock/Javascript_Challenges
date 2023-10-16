let arrNums = [];
let targNum;
let indexNums = [];

function findTarget(arrNums, targNum) {
  for (let i = 0; i < arrNums.length; i++) {
    let arrNum1 = arrNums[i];

    for (let j = 0; j < arrNums.length; j++) {
      let arrNum2 = arrNums[j];
      if (arrNum1 + arrNum2 === targNum) {
        indexNums.push(arrNums.indexOf(arrNum1));
        indexNums.push(arrNums.indexOf(arrNum2));
        console.log(indexNums);
        break;
      }
    }
  }
}

findTarget([1, 4, 6, 7, 20, 6, 7, 8, 11, 23, 67, 5], 16);
