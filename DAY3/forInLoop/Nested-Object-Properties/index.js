const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    details: {
      pages: 180,
      language: "English"
    }
  };
  
  for (let key in book) {
    if (typeof book[key] === "object") {
      for (let subKey in book[key]) {
        console.log(key + "." + subKey + ": " + book[key][subKey]);
      }
    } else {
      console.log(key + ": " + book[key]);
    }
  }
  
 