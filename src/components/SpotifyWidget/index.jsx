import './SpotifyWidget.css'

import { useEffect, useState } from 'react'
import { Music } from '../Icon'
import SpotifyCover from './SpotifyCover'
import { useSpotifyNowPlaying } from '../../hooks/useSpotifyNowPlaying'

const IMG_SIZE = 64

const SpotifyWidget = () => {
  const { isLoading, spotifyNowPlaying } = useSpotifyNowPlaying()

  console.log({ isLoading, spotifyNowPlaying })

  return (
    <aside className='SpotifyWidget'>
      <SpotifyCover album={spotifyNowPlaying.data.album} />
      {spotifyNowPlaying.isPlaying ? (
        /* is playing */
/* TODO validatee eee */
      <>
        <img
          className='SpotifyWidget__Cover'
          src={spotifyNowPlaying.data.album.cover.small.url}
          alt={spotifyNowPlaying.data.album.name}
          width={IMG_SIZE}
          height={IMG_SIZE}
        />
        <div>
          <a
            href={spotifyNowPlaying.data.song.url}
            target='_blank'
            rel='noreferrer'
          >{spotifyNowPlaying.data.song.name}</a>

          <div>
            {spotifyNowPlaying.data.artists.map((artist, i) => (
              <>
                {i !== spotifyNowPlaying.data.artists.length - 1 ? <span>,</span> : <></>}
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
