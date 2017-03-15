export default options => {
  class TrainCarriage {
    constructor(rules) {
      this.rules = rules
    }

    toString() {
      return this.rules.filter(v => v !== undefined && v !== null).map(v => `${v};`).join('\n')
    }
  }

  Object.keys(options).forEach(option => {
    Object.defineProperty(TrainCarriage.prototype, option, {
      get() {
        return new TrainCarriage(this.rules.concat(options[option]))
      }
    })
  })

  return new TrainCarriage([options.default])
}
