const https = require('https')
const processJenkinsData = (jenkinsData, database) => {
  const reportData = []
  const issuesData = []
  const newDatabaseState = {}

  return {
    reportData,
    issuesData,
    newDatabaseState
  }
}

const generateReport = reportData => {
  return 'THIS IS A PLACE HOLDER'
}

const downloadCurrentState = async ({
  jenkinsUsername,
  jenkinsToken,
  jenkinsDomain
}) => {
  const jenkinsUrl = `https://${jenkinsUsername}:${jenkinsToken}@${jenkinsDomain}/computer/api/json?token=TOKEN`

  https
    .get(jenkinsUrl, resp => {
      let data = ''

      // A chunk of data has been received.
      resp.on('data', chunk => {
        data += chunk
      })

      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        Promise.resolve(JSON.parse(data))
      })
    })
    .on('error', Promise.reject)
}

module.exports = {
  processJenkinsData,
  generateReport,
  downloadCurrentState
}
