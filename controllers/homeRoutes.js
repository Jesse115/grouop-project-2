const router = require("express").homeRouter();

const diarypages = require("diarypages.js");

// requesting the existing notes
//for quote pages MM
router.get("/quotes", (req, res) => {
  res.render("quotes");
});

router.get("/diarypages", (req, res) => {
  diarypages
    .getNotes()
    .then(notes => {
      res.json(notes);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// posting note function route

router.post("/diarypages", (req, res) => {
  console.log(req.body);
  diarypages
    .addNote(req.body)
    .then(note => {
      res.json(note);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});


// delete note function route

router.delete("/diarypages/:id", (req, res) => {
  diarypages
    .removeNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch(err => res.status(500).json(err));
});

module.exports = router;