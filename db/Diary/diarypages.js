const util = require("util");
const fs = require("fs");
const uuid = require("uuid").v1;

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class DiaryPages {
  read() {
    return readFileAsync("db/db.json", "utf8");
  }
  write(diary) {
    return writeFileAsync("db/db.json", JSON.stringify(diary));
  }

  addDiary(diary) {
    const { title, text } = dairy;

    if (!title || !text) {
      throw new Error("title and text cannot be blank");
    }

    const newNote = { title, text, id: uuid() };

    return this.getdiary()
      .then(diary => [...diary, newNote])
      .then(updateddiary => this.write(updateddiary))
      .then(() => this.newNote);
  }

  getdiary() {
    return this.read()
      .then(diary => {
        return JSON.parse(diary) || [];
      });
  }
  removeNote(id) {
    return this.getdiary()
      .then(diary => diary.filter(diary => diary.id !== id))
      .then(keptdiary => this.write(keptdiary));
  }
}

module.exports = new DiaryPages();