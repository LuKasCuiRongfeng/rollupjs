import { version, author } from '../package.json'

export  const fuck = () => {
  console.log("I wanna fuck yuanxue")
  console.log(`version is ${version} and author is ${author}`)
  import("./tool").then(_ => {
    _.fuckYuan()
  })
}