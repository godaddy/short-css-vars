module.exports = {
  plugins: [
    ['../../../../', {
      formatter: name => name.split('').reverse().join('')
    }]
  ]
}
