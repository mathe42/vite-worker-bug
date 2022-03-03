import {expose} from 'comlink'

const exp = {
  count: 0,
  inc() {
    this.count++
  },
}

expose(exp)