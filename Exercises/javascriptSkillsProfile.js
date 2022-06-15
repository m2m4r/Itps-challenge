
const isAnEmptyObject = (obj) => {
    return Object.keys(obj).length === 0;
}

const isAnEmptyArray = (array) => {
    return array.length === 0;
}

// exercise 1

module.exports= calculteSquare = (array) => {
    if (isAnEmptyArray(array))  return 0;
  return array.map((num) => num * num);
};

//exercise 2

module.exports=  sumCounters = (arrayOfObjects) => {
    if (isAnEmptyArray(arrayOfObjects)) return 0;
  return arrayOfObjects.reduce((acc, object) => acc + object.count, 0);
};

//exercise 3
module.exports=  actorInMovies = (movies, nameActor) => {
    if (isAnEmptyArray(movies)) {
        return 0;
        }
     if (nameActor === undefined) {
            
        return 0;   
        }

  Object.keys(movies).forEach((movie) => {
    movies[movie].actors.includes(nameActor)
      ? null
      : movies[movie].actors.push(nameActor);
  });
};

//exercise 4

const printActors = (actors) => {
  return actors.map((actor) => `<li>${actor}</li>`).join("");
};

const listActors = (movies) => {
    if (isAnEmptyObject(movies)) return 0;
  let actors = [];
  Object.keys(movies).forEach((movie) => {
    movies[movie].actors.forEach((actor) => {
      actors.includes(actor) ? null : actors.push(actor);
    });
  });
  const $actors = document.getElementById("actors");
  console.log($actors);
  return ($actors.innerHTML = `<ul>${printActors(actors.sort())}</ul>`);
};

//exercise 5

const post = async () => {
  const API = "https://jsonplaceholder.typicode.com/posts";

  try {
    const response = await fetch(API);
    const posts = await response.json();
    posts.map((post) => {
      post.title.startsWith("e") && post.userId === 7
        ? console.log(post.body)
        : undefined;
    });
    console.log(posts);
  } catch (error) {
    console.error(error);
  }
};
