import {wrap} from 'comlink'

const worker = new Worker(new URL('./worker1.js', import.meta.url), {type: 'module'})
const worker2 = new Worker(new URL('./worker2.js', import.meta.url), {type: 'module'})

const api1 = wrap(worker)
const api2 = wrap(worker2)

console.log(api1, api2)