const fs = require("fs")
const path = require("path")

const sourceDir = path.join(__dirname, 'output', 'messyFiles')

const organizedDir = path.join(__dirname, "output", "organized")

const categories = {
  images: [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".svg"],
  documents: [".pdf", ".doc", ".docx", ".txt", ".rtf"],
  videos: [".mp4", ".avi", ".mkv", ".mov", ".wmv"],
  audio: [".mp3", ".wav", ".flac", ".aac", ".ogg"],
  code: [".js", ".py", ".java", ".cpp", ".html", ".css"],
  archives: [".zip", ".rar", ".tar", ".gz", ".7z"],
  spreadsheets: [".xls", ".xlsx", ".csv"],
  others: [],
};

const testFiles = [
  "vacation.jpg",
  "report.pdf",
  "presentation.pptx",
  "music.mp3",
  "video.mp4",
  "script.js",
  "data.csv",
  "archive.zip",
  "photo.png",
  "notes.txt",
  "app.py",
  "movie.avi",
  "song.wav",
  "backup.tar.gz",
  "random.xyz",
  "nodejs.zip",
];

function initializeDirectories() {
  if (!fs.existsSync(sourceDir)) {
    fs.mkdirSync(sourceDir, { recursive: true })
    testFiles.forEach((file) => {
      fs.writeFileSync(path.join(sourceDir, file), `content of ${file}`)
    })
  }
  console.log("messyFiles : ")



  if (!fs.existsSync(organizedDir)) {
    fs.mkdirSync(organizedDir, { recursive: true })
  }

  Object.keys(categories).forEach((category) => {
    const catPath = path.join(organizedDir, category)
    if (!fs.existsSync(catPath)) {
      fs.mkdirSync(catPath)
    }
  })
}

function getCategory(filename) {

  const ext = path.extname(filename).toLowerCase()

  for (const [category, extensions] of Object.entries(categories)) {
    if (extensions.includes(ext)) {
      return category
    }
  }
  return "others"

}

function organizerFiles() {
  console.log("File organizer : ")
  console.log("Source: ", sourceDir)
  console.log("Destination: ", organizedDir)
  console.log("\n" + "-".repeat(50) + "\n")

  const files = fs.readdirSync(sourceDir)

  if(files.length === 0){
    console.log("no files to work on!!")
  }
}

initializeDirectories()