//this is what formats the README

const generateMarkdown = (response) => {
  return `
  
  ## Title:\n
  ${response.title}\n

  ## Description:\n
  ${response.description}\n

  ## Table of Contents:\n
  ${response.contents}\n
  -[Description](#description)

  ## Installation:\n
  ${response.installation}\n

  ## Usage:\n
  ${response.usage}\n

  ## License:\n
  I was not able to display the badge. Any tips would help!
  ![License](https://img.shields.io/badge/License-${response.license}-blue)\n

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




