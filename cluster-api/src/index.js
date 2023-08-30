import os from 'os'
import cluster from 'cluster'

const runPrimaryProcess = () => {
  const processCount = os.cpus().length
  console.log(`Primary process ${process.pid} is running`)
  console.log(`Forking server with ${processCount} servers`)

  for (let i=0; i < processCount; i++) {
    cluster.fork()
  }

  cluster.on('exit', (worker, code) => {
    if (code !== 0 && !worker.exitedAfterDisconnect) {
      console.log(`Worker ${worker.process.pid} died... scheduling another one!`)
      cluster.fork()
    }
  })
}

const runWorkerProcess = async () => {
  await import('./server.js')
}

cluster.isPrimary ? runPrimaryProcess() : runWorkerProcess()