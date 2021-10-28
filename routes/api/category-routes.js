const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const result = await Category.findAll({
      include: [{ model: Product }]
    });
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: 'No information found' });
      return;
    }
  } catch (error) {
    res.status(500).json(error);
  }
  
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const result = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: 'No information found' })
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const result = await Category.create(req.body);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: 'No information found' });
      return;
    }
  } catch (error) {
    res.status(500).json(error);
  }
  
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const result = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: 'No information found' });
      return;
    }
  } catch (error) {
    res.status(500).json(error)
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const result = await Category.destroy({
      where: {
        id: req.params.id
      }
    })
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: 'No information found' });
      return;
    }
  } catch (error) {
    res.status(500).json(error)
  }
});

module.exports = router;
