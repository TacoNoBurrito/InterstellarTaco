// Key
var eventKey = localStorage.getItem('eventKey') || '`'
var pLink = localStorage.getItem('pLink') || 'https://classroom.google.com/'

document.addEventListener('keydown', function (event) {
  if (event.key === eventKey) {
    if (window.self !== window.top) {
      window.parent.location.href = encodeURIComponent(pLink)
    } else {
      window.location.href = encodeURIComponent(pLink)
    }
  }
})

var eventKeyInput = document.getElementById('eventKeyInput')
eventKeyInput.addEventListener('input', function () {
  eventKey = eventKeyInput.value
})

var linkInput = document.getElementById('linkInput')
linkInput.addEventListener('input', function () {
  pLink = linkInput.value
})

function saveEventKey() {
  eventKey = eventKeyInput.value
  localStorage.setItem('eventKey', eventKey)
  localStorage.setItem('pLink', pLink)
}

// Tab Cloaker
function saveName() {
  const name = document.getElementById('name').value
  localStorage.setItem('name', name)
}

function saveIcon() {
  const icon = document.getElementById('icon').value
  localStorage.setItem('icon', icon)
}

// Function to update favicon and title based on selected option
function updateHeadSection(selectedValue) {
  const icon = document.getElementById('tab-favicon')
  const name = document.getElementById('tab-title')

  if (selectedValue === 'Google') {
    icon.setAttribute('href', '/assets/media/favicon/google.png')
    name.textContent = 'Google'
    localStorage.setItem('name', 'Google')
    localStorage.setItem('icon', '/assets/media/favicon/google.png')
  } else if (selectedValue === 'Drive') {
    icon.setAttribute('href', '/assets/media/favicon/drive.png')
    name.textContent = 'My Drive - Google Drive'
    localStorage.setItem('name', 'My Drive - Google Drive')
    localStorage.setItem('icon', '/assets/media/favicon/drive.png')
  } else if (selectedValue === 'Classroom') {
    icon.setAttribute('href', '/assets/media/favicon/classroom.png')
    name.textContent = 'Home'
    localStorage.setItem('name', 'Home')
    localStorage.setItem('icon', '/assets/media/favicon/classroom.png')
  }
}

// Redirect
function handleDropdownChange(selectElement) {
  var selectedValue = selectElement.value
  redirectToMainDomain(selectedValue)
}

function redirectToMainDomain(selectedValue) {
  var currentUrl = window.location.href
  var mainDomainUrl = currentUrl.replace(/\/[^\/]*$/, '')

  if (window != top) {
    top.location.href = mainDomainUrl
  } else {
    window.location.href = mainDomainUrl
  }
}

// Dropdown event listener
const dropdown = document.getElementById('dropdown')
dropdown.addEventListener('change', function () {
  const selectedValue = dropdown.value
  updateHeadSection(selectedValue)

  // Save selected option to localStorage
  localStorage.setItem('selectedOption', selectedValue)
})

const switches = document.getElementById('2')

if (window.localStorage.getItem('v4Particles') != '') {
  if (window.localStorage.getItem('v4Particles') == 'true') {
    switches.checked = true
  } else {
    switches.checked = false
  }
}

switches.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    window.localStorage.setItem('v4Particles', 'true')
  } else {
    window.localStorage.setItem('v4Particles', 'false')
  }
})

var themeId = localStorage.getItem('theme')
if (themeId == '') {
  themeId = 'd'
}

document.getElementsByClassName('td')[0].value = themeId

const themeDropdown = document.getElementsByClassName('td')
dropdown.addEventListener('change', function () {
  const selectedValue = dropdown.value

  localStorage.setItem('theme', selectedValue)

  window.location = window.location
})

function themeChange(ele) {
  const selTheme = ele.value

  localStorage.setItem('theme', selTheme)

  window.location = window.location
}

function AB() {
 
}

function toggleAB() {
  ab = localStorage.getItem('ab')
  if (ab == null) {
    localStorage.setItem('ab', 'false')
  } else if (ab == 'true') {
    localStorage.setItem('ab', 'false')
  } else {
    localStorage.setItem('ab', 'true')
  }
}
