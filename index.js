// -*- mode: react -*-

import React from 'react'
import { render } from 'react-dom'
import Sitemap from './sitemap.js'


import $ from 'jquery'

fetch('/api/icons')
    .then(res => res.json())
    .then(res => {
        $('.icons').append(res.join(''))
    })


render(Sitemap, document.getElementById('main'))
