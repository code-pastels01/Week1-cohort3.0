//Node.js code for generating SHA-256
const crypto = require("crypto");
const input = "100xdevs";
const hash = crypto.createHash("sha256").update(input).digest("hex");
//sha256 --> algorithm to perform hashing on a given input
//hex --> output format must be hexadecimal
console.log(hash);
//output --> 55711980d50fd24989409a7a7d4e15fcd206556eec1245c94a6e60910dc4e41d
//sha256 generates a 256 bits output, to convert it to hexadecimal, 4 bits are compiled together to a hex character hence the final string has 64 characters
