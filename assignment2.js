//The input string should start with "100xdevs" and the output must start with "00000", what should be the nonce
const crypto = require("crypto");
for (i = 200000; i < 20000000; i++) {
  const input = "100xdevs" + i.toString();
  const hash = crypto.createHash("sha256").update(input).digest("hex");
  if (hash.slice(0, 5) == "00000") console.log(input, hash);
}
