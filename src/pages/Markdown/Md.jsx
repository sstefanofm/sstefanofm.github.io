import './Md.css'

import { useEffect, useState } from 'react'
import MarkdownIt from 'markdown-it'
import DOMPurify from 'dompurify'

const mdit = MarkdownIt('commonmark')

const Md = ({ repoName = 'test' }) => {
  const [md, setMd] = useState('')

  const getMd = async (url = '') => {
    const response = await fetch(url)
    setMd(mdit.render(await response.text()))
  }

  useEffect(() => {
    getMd(`https://raw.githubusercontent.com/sstefanofm/${repoName}/master/README.md`)
  }, [])

  return (
    <div
      className='Md'
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(md) }}
    />
  )
}

export default Md
