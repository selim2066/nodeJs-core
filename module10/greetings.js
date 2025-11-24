console.log("version node: ", process.version)
console.log("platform : ", process.platform)

const args = process.argv

// process.arg[0]= node path
// process.arg[1]= file path
// process.arg[2]= first actual path


const name = args[2] || "guest"
const time = new Date().getHours()

if (time > 18) {
  console.log(`good afternoon ${name}`)

} else if (time < 12) {
  console.log(`good morning ${name}`)
} else {
  console.log(`good evening ${name}`)
}