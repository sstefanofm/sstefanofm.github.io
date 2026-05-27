import './SpotifyWidget.css'

import { useEffect, useState } from 'react'
import { Music } from '../Icon'
import SpotifyCover from './SpotifyCover'

const IMG_SIZE = 64

const SpotifyWidget = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    const get = async () => await (await fetch('https://sstefanofm-spotify-now-playing.vercel.app/api/now-playing'))
      .json()

    get().then(d => setData(d))
  }, [])

  console.log(data)

  return (
    <aside className='SpotifyWidget'>
      <SpotifyCover album={data.data?.album} />
      {data?.isPlaying ? (
        /* is playing */
/* TODO validatee eee */
      <>
        <img
          className='SpotifyWidget__Cover'
          src={data.data.album.cover.small.url}
          alt={data.data.album.name}
          width={IMG_SIZE}
          height={IMG_SIZE}
        />
        <div>
          <a
            href={data.data.song.url}
            target='_blank'
            rel='noreferrer'
          >{data.data.song.name}</a>

          <div>
            {data.data.artists.map((artist, i) => (
              <>
                {i !== data.data.artists.length - 1 ? <span>,</span> : <></>}
                <a
                  key={artist.name}
                  href={artist.url}
                >{artist.name}</a>
              </>
            ))}
          </div>
        </div>
      </>
      )
        :
        /* is not playing */
      (
        <>
          <div className='SpotifyWidget__Cover'>
            <Music width={24} height={24} />
          </div>
          <div>Not listening to anything</div>
        </>
      )}
    </aside>
  )
}

export default SpotifyWidget
