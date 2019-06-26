const router = require('express').Router();

const Artist = require('../artist/artist-model.js');
const restricted = require('../auth/restricted-middleware.js');

// router.get('/', async (req, res) => {
//     try {
//       const allUsers = await Artist.findAll();
//       res.status(200).json(allUsers);
//     } catch(error) {
//       res.status(500).json({ error: "There was an error getting users from the database" })
//     }
//   });
//   get artist by ID working
//   router.get('/:id', async (req, res) => {
//     const id = req.params.id
//     try {
//       const user = await Artist.findById(id);
//       if (user.length > 0) {
//         res.status(200).json(user[0]);
//       } else {
//         res.status(404).json({ error: `User with id ${id} does not exist`})
//       }
//     } catch(error) {
//       res.status(500).json({ error: "There was an error info from the database" })
//     }
//   });
  

// [GET] Artist  and its restricted to the logged in artist
// removed the restricted on every end point

router.get('/artist', (req, res) => {
  Artist.findAll('artist')
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
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const changes = req.body;
  Artist.update(id, changes)
      .then(changes => {
          if (changes) {
              res.status(200).json({ message: 'Artist successfully updated.' });
          } else {
              res.status(404).json({ message: 'Artist does not exist.' });
          }
      })
      .catch(err => {
          res.status(500).json(err.message);
      });
});
// [DELETE] /api/artistid - delete artist
router.delete('/:id', (req, res) => {
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
