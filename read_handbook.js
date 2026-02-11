
const fs = require('fs');

try {
  const content = fs.readFileSync('Business School Handbook.txt', 'utf8');
  console.log(content.substring(0, 2000));
} catch (err) {
  console.error('Error reading file:', err);
}
