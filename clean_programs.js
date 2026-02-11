
const fs = require('fs');
const path = require('path');

const filePath = path.join('src', 'data', 'programs.json');

try {
  const data = fs.readFileSync(filePath, 'utf8');
  const programs = JSON.parse(data);

  let modifiedCount = 0;

  programs.forEach(program => {
    if (program.modules) {
      program.modules.forEach(module => {
        if (module.name) {
          const originalName = module.name;
          // Regex to match "Module X:" or "Module X" at the start, case insensitive
          // Matches "Module 1: ", "Module 1 ", "Module 1. ", etc.
          const newName = originalName.replace(/^Module\s+\d+[:.]?\s*/i, '');
          
          if (originalName !== newName) {
            module.name = newName;
            modifiedCount++;
          }
        }
      });
    }
  });

  if (modifiedCount > 0) {
    fs.writeFileSync(filePath, JSON.stringify(programs, null, 2), 'utf8');
    console.log(`Successfully updated ${modifiedCount} module names.`);
  } else {
    console.log('No module names needed updating.');
  }

} catch (err) {
  console.error('Error processing file:', err);
  process.exit(1);
}
