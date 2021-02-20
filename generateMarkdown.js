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

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }


