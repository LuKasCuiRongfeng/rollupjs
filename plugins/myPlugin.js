export default function myPlugin() {
  return {
    name: "my-plugin",
    options(inputOptions) {
      console.log(inputOptions)
    },
    resolveId(source) {
      console.log(111, source)
    },
    outputOptions(outPut) {
      console.log(222, outPut)
    }
  }
}