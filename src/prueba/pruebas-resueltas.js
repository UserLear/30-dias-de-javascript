//escoge el gato mas famoso
function findFamousCats(cats) {

    let famousStats = {
      catNames: [],
      maxNumOfFollowers: 0,
    };
  
    for (let i = 0; i < cats.length; i++) {
      const cat = cats[i];
      const totalFollowers = cat.followers.reduce(
        (acum, currentVal) => acum + currentVal, 0
      );
   
      if (totalFollowers === famousStats.maxNumOfFollowers) {
        famousStats.catNames.push(cat.name);
      }
  
      if (totalFollowers > famousStats.maxNumOfFollowers) {
        famousStats.catNames = [];
        famousStats.catNames.push(cat.name);
        famousStats.maxNumOfFollowers = totalFollowers;
      }
    }
    return famousStats.catNames;
  }

  //forma un tiangulo isosceles
  export function printTriangle(size, character) {
    let triangle = "";
    let newSize = Number(size);
  
    while (newSize > 0) {
      let line = "";
      let lineSize = Number(size);
  
      while (lineSize > 0) {
        let char = lineSize > newSize
          ? ' '
          : character;
        line = line + char;
        lineSize--;
      }
  
      triangle = triangle.length
        ? `${line}\n${triangle}`
        : line;
  
      newSize--;
    }
  
    return triangle;
  }