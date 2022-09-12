// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license.toLowerCase() === 'none') {
    return ' '
  }

  switch (license.toLowerCase(license)) {
    case "mit":
      return '(https://img.shields.io/badge/License-MIT-yellow.svg)'
      break;

    case "gplv3":
      return '(https://img.shields.io/badge/License-GPL%20v3-yellow.svg)'
      break;

    case "apache 2.0":
      return '(https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
      break;

    default:
      console.log(`No matched License found for  ${license}.`);
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  function renderLicenseLink(license) {

    if (license.toLowerCase() === 'none') {
      return ' '
    }
  
    switch (license.toLowerCase(license)) {
      case "mit":
        return '(https://choosealicense.com/licenses/mit/)'
        break;
  
      case "gplv3":
        return '(https://choosealicense.com/licenses/gpl-3.0/)'
        break;
  
      case "apache 2.0":
        return '(https://choosealicense.com/licenses/apache-2.0/)'
        break;
  
      default:
        console.log(`No matched License found for  ${license}.`);
    }
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
