fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => { return response.json() })
  .then(data => { searchData(data) })
  .catch(err => console.error(err))

function searchData (data) {
  return data
}

const searchInput = document.getElementById('search')
const searchButton = document.getElementById('button')

// Trigger button click when the user presses enter
searchInput.addEventListener('keyup', function (e) {
  if (e.keyCode === 13) {
    e.preventDefault()
    searchButton.click()
  }
})

function doSearch () {
  const value = searchInput.value
  searchInput.value = '' // reset field
}
