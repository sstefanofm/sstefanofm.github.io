import './Md.css'
import { ThemeContext } from '../../context/ThemeProvider'
import { projects } from '../../data/projects'

import { useContext, useEffect, useState } from 'react'
import MarkdownIt from 'markdown-it'
import DOMPurify from 'dompurify'

const mdit = MarkdownIt('commonmark')

const Md = ({ repoName = 'test' }) => {
  const [md, setMd] = useState('')
  const { theme } = useContext(ThemeContext)
  let imgFullSize = ''

  if (repoName === projects.DOTFILES.name)
    imgFullSize += 'Md__Img--FullSize'

  const getMd = async (url = '') => {
    const response = await fetch(url)
    setMd(mdit.render(await response.text()))
  }

  useEffect(() => {
    getMd(`https://raw.githubusercontent.com/sstefanofm/${repoName}/master/README.md`)
  }, [])

  return (
    <div
      className={`Md Md--${theme} ${imgFullSize}`}
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(md) }}
    />
  )
}

export default Md
