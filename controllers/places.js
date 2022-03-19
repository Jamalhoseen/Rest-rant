const router = require('express').Router()


// get places new
router.get('/new', (req, res) => {
  res.render('places/new')
})



// GET /places
router.get('/', (req, res) => {
    let places = [{
        name: 'Sweet Place',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/first-restaurant.jpg'
      }, {
        name: 'Bake and Eat',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/secod.jpg'
      }]
    res.render('places/index', {places})
  })


module.exports = router