//Find a nonce for the following input "harkirat => Raman | Rs 100  Ram => Ankit | Rs 10"
const crypto = require("crypto");
for (i = 0; i < 2000000; i++) {
  const input =
    "harkirat => Raman | Rs 100 Ram => Ankit | Rs 10" + i.toString();
  const hash = crypto.createHash("sha256").update(input).digest("hex");
  if (hash.slice(0, 5) == "00000") console.log(input, hash);
}
