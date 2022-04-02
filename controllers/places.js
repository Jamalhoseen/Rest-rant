const router = require('express').Router()
const places = require ('../models/places.js')


// get places new
router.get('/new', (req, res) => {
  res.render('places/new')
})

router.post('/', (req, res) => {
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Frestaurant%2F&psig=AOvVaw3RmTeuvfIUqQP9KjjfytqJ&ust=1648945735777000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPCJ6NiP9PYCFQAAAAAdAAAAABAD'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})

// GET /places
router.get('/', (req, res) => {
    res.render('places/index', {places})
  })


module.exports = router