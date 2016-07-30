import $ from 'jquery'

fetch('/api/icons')
    .then(res => res.json())
    .then(res => {
        $('.icons').append(res.join(''))
    })
