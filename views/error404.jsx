const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
          <link rel="stylesheet" href="/css/style.css"/>
          <h1>404: PAGE NOT FOUND</h1>
          <p>Oops, sorry, we can't find this page!</p>
          <img src="/images/fail.jpg" alt="oops" />
          <div>Photo by <a href="https://unsplash.com/@alenin99?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alvin Lenin</a> on <a href="https://unsplash.com/s/photos/free?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></div>
              
          </main>
      </Def>
    )
  }

module.exports = error404