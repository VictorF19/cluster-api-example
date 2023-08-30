import http from 'http'
const processId = process.pid

const server = http.createServer((request, response) => {
  // 1e7 stands for: 1 followed by 7 zero's
  for (let index=0; index < 1e7; index++);
  response.end(`handled by pid ${processId}`)
});

server.listen(3000)
  .once('listening', () => {
    console.log('Server started on process', processId)
  })

// wait for the connections to be closed to shutdown process
process.on('SIGTERM', () => {
  console.log('Server ending', new Date().toISOString())
  server.close(() => process.exit())
})

// simulate errors occurring in a randomic interval
setTimeout(()=> {
  process.exit(1)
}, Math.random() * 1e4) 