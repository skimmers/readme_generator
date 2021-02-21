//this is what formats the README

const generateMarkdown = (response) => {
  return `
  
  ## Title:\n
  ${response.title}\n
  ![License](https://img.shields.io/badge/License-${response.license}-blue)\n

  ## Description:\n
  ${response.description}\n

  ## Table of Contents:\n
  - [Description](#description)
  - [Table of Contents](#contents)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contribution)
  - [Tests](#tests)
  - [Questions](#username)

  ## Installation:\n
  ${response.installation}\n

  ## Usage:\n
  ${response.usage}\n

  ## License:\n
  Please see which license the project is covered:
  ![License](https://img.shields.io/badge/License-${response.license}-blue)\n

  ## Contributing:\n
  ${response.contribution}\n

  ## Tests:\n
  ${response.tests}\n

  ## Questions:\n
  Please see my GitHub page here:
  - [GitHub](https://github.com/${response.username})
  
  You can also ask me questions by sending an email to: ${response.email}.

  `;
};

module.exports = generateMarkdown;




