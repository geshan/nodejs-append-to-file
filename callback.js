const fs = require('fs');

fs.appendFile('file.txt', 'First line added!', 'utf-8', err => {
    if (err) {
        throw err;
    }
    console.log('First line written.');
    fs.appendFile('file.txt', '\nSecond line appended.', err => {
      if (err) {
        throw err;
      }

      console.log('Second line appended.');
    });
});
