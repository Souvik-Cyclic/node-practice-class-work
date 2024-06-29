const fs = require('fs');

// To Read a file
fs.readFile('file.txt', (err,data) => {
    if(err) throw err;
    console.log(data.toString());
})

// To append in a file
fs.appendFile('file.txt', " ! ", (err) => {
    if(err){
        console.log(err);
    }
    else{
        fs.readFile("file.txt", (err, data) => {
            if(err) throw err;
            console.log(data.toString());
        });
    }
})

// To Write to a file
fs.writeFile('file.txt', "Hello World", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File written successfully!");
    }
  });
  