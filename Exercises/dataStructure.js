const calculteSquare = require('./javascriptSkillsProfile.js');
const sumCounters = require('./javascriptSkillsProfile.js');
const actorInMovies = require('./javascriptSkillsProfile.js');

//Exercise 1

const squares = nums => {
    if (nums === undefined) return 0;
    if (nums.length === 0) return 0;
    return calculteSquare(num)
}


//Exercise 2

const sum = counters => {
    if (counters === undefined) return 0;
    if (counters.length === 0) return 0;
    return sumCounters(counters);

}


//Exercicise 3

const moviesWithActor = (movies, actor) => {
    if (movies === undefined) return 0;
    if (actor === undefined) return 0;
    if (Object.keys(movies).length === 0) return 0;
    return actorInMovies(movies, actor);


}



//Exercise 4

//Depth-first algotrithm, pre-order

const treesAreEqual = (tree1, tree2) => {
  if (tree1 === null && tree2 === null) return true;
  if (tree1 === null || tree2 === null) return false;
  if (tree1.value !== tree2.value) return false;

 
  return (
    treesAreEqual(tree1.left, tree2.left) &&
    treesAreEqual(tree1.right, tree2.right)
  );
    }



//Exercise 5

const formatted = (str, n) => {
  if(str.length === 0)  return 0;      
  if (n === undefined) return str;
  
  let newStr = str.split("-").join("");

  const posInitial =
    newStr.length % n === 0 ? newStr.length % n : newStr.length % n;

  let newStr2 = [];

  for (let i = posInitial; i <= newStr.length - n; i += n) {
    newStr2 = newStr2 + "-" + newStr.slice(i, i + n);
  }

  if (posInitial === 0) {
    console.log(newStr.slice(0, posInitial) + newStr2.slice(1, newStr2.length));
    return newStr.slice(0, posInitial) + newStr2.slice(1, newStr2.length);
  }
  console.log(newStr.slice(0, posInitial).concat(newStr2));
  return newStr.slice(0, posInitial).concat(newStr2);
};