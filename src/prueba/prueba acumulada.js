function printTriangle(size, character) {
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

  console.log(printTriangle(5, "8"));






