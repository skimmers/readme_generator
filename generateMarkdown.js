//this is what formats and initializes the Readme
const generateMarkdown = (response) => {
  return `
  
  #${response.title}\n

  ## Description:\n
  ${response.description}\n

  ## Table of Contents:\n
  ${response.contents}\n

  ## Installation:\n
  ${response.installation}\n

  ## Usage:\n
  ${response.usage}\n

  ## License:\n
  ![${response.license}](https://img.shields.io/apm/l/atomic-design-ui.svg?)\n

  ## Contributing:\n
  ${response.contribution}\n

  ## Tests:\n
  ${response.tests}\n

  ## Questions:\n
  ${response.questions}\n

  `;
};

module.exports = generateMarkdown;




