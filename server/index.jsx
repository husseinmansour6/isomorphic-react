import express from "express"
import yields from "express-yields"
import fs from "fs-extra"

const port = process.env.PORT || 3000
const app = express()

app.get(["/"], function*(req, res) {
  let index = yield fs.readFile("./public/index.html", "utf-8")
  res.send(index)
})

app.listen(port, () => console.log(`listening on port: ${port}`))
