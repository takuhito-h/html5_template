const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
    plugins: [
        purgecss.default({
            content: ['./src/**/*.html', './src/**/*.njk']
        })
    ]
}
