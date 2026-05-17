let nextSpecimenNum = 1;
// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};
const createUniqueSpecimenNum = () => {
  return nextSpecimenNum++;
};
const pAequorFactory = (num, arr) => {
  return {
    specimenNum: num,
    dna: arr,
    mutate() {
      const randomDnaIndex = Math.floor(Math.random() * this.dna.length);
      console.log(
        `random dna index is ${randomDnaIndex} and the dna for this index is ${this.dna[randomDnaIndex]}`,
      );
      let newRandomBase;

      do {
        newRandomBase = returnRandBase();
      } while (newRandomBase === this.dna[randomDnaIndex]);
      this.dna[randomDnaIndex] = newRandomBase;
      // console.log(this.dna[randomDnaIndex]);
      return this.dna;
    },

    compareDNA(obj) {
      /*compare the current pAequor‘s .dna with the passed 
in pAequor‘s .dna and compute how many bases are identical and in the same locations. 
.compareDNA() does not return anything, but prints a message that states the 
percentage of DNA the two objects have in common — 
use the .specimenNum to identify which pAequor objects are being compared. */
      let commonCounter = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === obj.dna[i]) commonCounter++;
      }
      const percentage = ((commonCounter / this.dna.length) * 100).toFixed(2);
      //  console.log(`compared to pAequor dna is ${obj.dna}`);
      // console.log(
      //   `percentage is ${percentage} and common number is ${commonCounter}`,
      // );
      console.log(
        `specimen #${this.specimenNum} and specimen #${obj.specimenNum} have ${percentage}% DNA in common`,
      );
    },

    willLikelySurvive() {
      //returns true if the object’s .dna array contains at least
      // 60% 'C' or 'G' bases. Otherwise, .willLikelySurvive() returns false.
      let CGCounter = 0;

      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === "C" || this.dna[i] === "G") CGCounter++;
      }
      const percentage = (CGCounter / this.dna.length) * 100;
      if (percentage >= 60) return true;
      else return false;
    },
    complementStrand() {
      //The rules are that 'A's match with 'T's and vice versa. Also,
      // 'C's match with 'G's and vice versa.

      const complementStrandArr = [];
      for (let i = 0; i < this.dna.length; i++) {
        switch (this.dna[i]) {
          case "A":
            complementStrandArr.push("T");
            break;
          case "T":
            complementStrandArr.push("A");
            break;
          case "C":
            complementStrandArr.push("G");
            break;
          case "G":
            complementStrandArr.push("C");
            break;
          default:
            console.log(`something went wrong!`);
        }
      }
      return complementStrandArr;
    },
  };
};

const createpAequorArray = (number) => {
  const arr = [];
  for (let i = 1; i <= number; i++) {
    let obj = pAequorFactory(createUniqueSpecimenNum(), mockUpStrand());
    while (!obj.willLikelySurvive()) {
      obj = pAequorFactory(createUniqueSpecimenNum(), mockUpStrand());
    }

    arr.push(obj);
  }
  return arr;
};

// const test = pAequorFactory(createUniqueSpecimenNum(), mockUpStrand());
// console.log(test);
// test.mutate();
// console.log(test);
// const test2 = pAequorFactory(createSpecialSpecimenNum(), mockUpStrand());
// test.compareDNA(test2);
// console.log(test.willLikelySurvive());

/*
your team requests that you create 30 instances of pAequor that can survive in their natural environment. 
 Store these instances in an array for your team to study later.
*/
// const arr = createpAequorArray(30);
// console.log(arr);

// const test3 = pAequorFactory(
//   createUniqueSpecimenNum(),
//   test.complementStrand(),
// );
// console.log(test3);
// test.compareDNA(test3);
const survivingSpecimens = createpAequorArray(30);
console.log(survivingSpecimens);
console.log(
  survivingSpecimens.every((specimen) => specimen.willLikelySurvive()),
);
