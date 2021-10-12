const { Marp } = require('@marp-team/marp-core')
const markdownItContainer = require('markdown-it-container')
const markdownItPlantuml = require('markdown-it-plantuml')

const umlOptions = {
    imageFormat: 'svg'
  }

module.exports = (opts) => new Marp(opts)
.use(markdownItContainer, 'column-area')
.use(markdownItContainer, 'column-halfSlide')
.use(markdownItPlantuml, umlOptions)