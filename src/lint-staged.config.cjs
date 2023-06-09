/* eslint-env node */

const eslintCommand = 'npm run lint'
const formatCommand = 'prettier --write'
module.exports = {
    '*.{js,jsx,ts,tsx}': [formatCommand, eslintCommand],
    '*.{css,scss,sass,less}': [formatCommand],
}
