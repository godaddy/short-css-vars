module.exports = {
  plugins: [
    ['../../../../', {
      ignore: name => name.includes('two')
    }]
  ]
}
