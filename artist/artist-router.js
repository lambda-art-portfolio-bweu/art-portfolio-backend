const router = require('express').Router();

const Artist = require('../artist/artist-model.js');
const restricted = require('../auth/restricted-middleware.js');

// get all artist by /artist
router.get('/', (req, res) => {
  Artist.find('artist')
      .then(artist => {
          res.status(200).json({ artist, decodedToken: req.decodedToken });
      })
      .catch(err => {
          res.send(err);
      });
});
// [GET] /api/artist - get artist by ID
router.get('/:id', (req, res) => {
  let id = req.params.id;
  Artist.findById(id)
      .then(artist => {
          if (artist) {
              res.status(200).json({ artist, decodedToken: req.decodedToken });
          } else {
              res.status(400).json({ message: 'Artist does not exist.' });
          }
      })
      .catch(err => {
          res.status(500).json(err.message);
      });
});
// [PUT] /api/artistid - udpate artist info
router.put('/:id', restricted, (req, res) => {
  const id = req.params.id;
  const changes = req.body;
  Artist.update(id, changes)
      .then(changes => {
          if (changes) {
              res.status(200).json({
                // return the artist  
                
                message: 'Artist successfully updated.' });
          } else {
              res.status(404).json({ message: 'Artist does not exist.' });
          }
      })
      .catch(err => {
          res.status(500).json(err.message);
      });
});
// [DELETE] /api/artistid - delete artist
router.delete('/:id', restricted, (req, res) => {
  const { id } = req.params;
  Artist.remove(id)
      .then((artist) => {
          if (artist) {
              res.status(200).json(artist);
          } else {
              res.status(404).json({ errorMessage: 'Artist not deleted' });
          }
      })
      .catch((err) => res.status(500).json({
          errorMessage: "Error"
      }));
});

module.exports = router;
