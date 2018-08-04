const { argv } = require('yargs')
    .options({
        address: {
            alias: 'a',
            desc: 'Address to view current weather',
            demand: true,
            default: 'Madrid España'
        }
    })
    .help();


module.exports = { argv };