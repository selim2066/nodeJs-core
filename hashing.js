const crypto = require("crypto")

const sha256 = crypto.createHash("sha256").update("selim").digest("hex")
const sha512 = crypto.createHash("sha512").update("selim").digest("hex")
const sha512d = crypto.createHash("sha512").update("selim").digest("binary")

console.log(sha256, sha512, sha512d)