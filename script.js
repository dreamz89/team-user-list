const searchInput = document.getElementById('search')
const searchButton = document.getElementById('button')
const container = document.querySelector('.container')
const noResults = document.querySelector('.empty')

// Trigger button click when the user presses enter
searchInput.addEventListener('keyup', e => {
  if (e.keyCode === 13) {
    e.preventDefault()
    searchButton.click()
  }
})

function doSearch () {
  const value = searchInput.value
  if (value === '') return

  clearFields()

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => { return response.json() })
    .then(data => {
      const array = filterData(data, value)
      if (array.length !== 0) {
        array.forEach(result => {
          const paraName = document.createElement('p')
          const nodeName = document.createTextNode('Name: ' + result.name)
          paraName.appendChild(nodeName)

          const paraEmail = document.createElement('p')
          const nodeEmail = document.createTextNode('Email: ' + result.email)
          paraEmail.appendChild(nodeEmail)

          const element = document.createElement('div')
          element.className = 'result'
          container.appendChild(element)
          element.appendChild(paraName)
          element.appendChild(paraEmail)
        })
      } else {
        noResults.style.display = 'block'
      }
    })
    .catch(err => console.error(err))
}

function filterData (data, value) {
  return data.filter(obj => {
    return obj['name'].toLowerCase().includes(value) // includes is case sensitive
  })
}

function clearFields () {
  searchInput.value = '' // reset field
  noResults.style.display = 'none' // reset field
  const results = document.querySelectorAll('.result')
  results.forEach(result => result.remove())
}
