const router = require('express').Router();
const Posts = require('./post-model.js');

router.get("/", (req, res) => {
    Posts.get()
      .then((posts) => res.json(posts))
      .catch((posts) =>
        res.status(500).json({
          errorMessage: "The Posts could not be retrieved."
        })
      );
  });

router.get('/:id', (req, res) => {
  Posts.getById(req.params.id)
    .then((posts) => res.json(posts))
    .catch((posts) =>
      res.status(500).json({
        errorMessage: 'The Post could not be retrieved..'
      })
    );
});

router.post('/', (req, res) => {
  const text = req.body;
  Posts.insert(text)
    .then((posts) => {
      Posts.get().then((posts) => res.status(201).json(posts));
    })
    .catch((error) =>
      res.status(500).json({
        errorMessage: 'Reload the ting'
      })
    );
});

// update()
router.put('/:id', (req, res) => {
  const { id } = req.params;
  if (id) {
    Posts.update(id, {
      text: req.body.text
    })
      .then((posts) => {
        if (posts) {
          Posts.get().then((posts) => res.json(posts));
        } else {
          res.status(404).json({
            errorMessage: 'ID not found'
          });
        }
      })
      .catch((err) => {
        res.status(500).json({
          errorMessage: 'Error'
        });
      });
  }
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Posts.remove(id)
    .then((post) => {
      if (post) {
        res.status(200).json(post);
      } else {
        res.status(404).json({ errorMessage: 'Post Not Deleted' });
      }
    })
    .catch((err) =>
      res.status(500).json({
        errorMessage: 'Error'
      })
    );
});

module.exports = router;