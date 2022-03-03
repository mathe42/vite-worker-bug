import {expose} from 'comlink'

const exp = {
  state: {
    count: 0
  },
  inc() {
    this.state.count++
  },
  add(a,b) {
    return a+b+this.state.count
  }
}

expose(exp)