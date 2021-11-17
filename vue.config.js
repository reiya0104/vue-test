module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/vue-test-app/'   //任意
        : '/',
    outputDir: 'dist'
}
