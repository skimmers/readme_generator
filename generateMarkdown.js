//this is what formats and initializes the Readme
//![${response.license}](https://img.shields.io/apm/l/atomic-design-ui.svg?)\n

const generateMarkdown = (response) => {
  return `
  
  ##${response.title}\n

  ## Description:\n
  ${response.description}\n

  ## Table of Contents:\n
  ${response.contents}\n

  ## Installation:\n
  ${response.installation}\n

  ## Usage:\n
  ${response.usage}\n

  ## License:\n
  I was not able to display the badge. Any tips would help!
  ![License](https://img.shields.io/badge/license${response.license}blue.svg "License Badge")\n

  ## Contributing:\n
  ${response.contribution}\n

  ## Tests:\n
  ${response.tests}\n

  ## Questions:\n
  Please see my GitHub page here:
  - [GitHub](https://github.com/${response.username})
  
  You can also ask me questions by sending an email to: ${response.email},

  `;
};

module.exports = generateMarkdown;




