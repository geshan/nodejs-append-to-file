const fs = require('fs');

try {
  const fileName = 'file-sync.txt'
  fs.appendFileSync(fileName, 'First line added!', 'utf-8');
  fs.appendFileSync(fileName, '\nSecond line appended.', 'utf-8');
  console.log('Added 2 lines to file in sync mode.');
} catch(err) {
  console.log('Error appending data to file in sync mode', err);
}
