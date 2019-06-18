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
  if (value === '') return
  searchInput.value = '' // reset field

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => { return response.json() })
    .then(data => {
      const array = filterData(data, value)
      console.log(array)
    })
    .catch(err => console.error(err))
}

function filterData (data, value) {
  return data.filter(obj => {
    return obj['name'].toLowerCase().includes(value) // includes is case sensitive
  })
}
