//Give me an input string that outputs a SHA-256 hash that starts with 00000
const crypto = require("crypto");
for (i = 200000; i < 2000000; i++) {
  const input = i.toString(); //converts number to string
  const hash = crypto.createHash("sha256").update(input).digest("hex");
  if (hash.slice(0, 5) == "00000") console.log(input, hash);
}
