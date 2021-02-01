import React from 'react'

import { Gallery } from 'wombat-ui2'
import 'wombat-ui2/dist/index.css'

const App = () => {
  const images = [
    {
        index: 0,
        title: 'Project 1',
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/400/300/',
        link: 'https://unsplash.com'
    },
    {
        index: 1,
        title: 'Project 2',
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/400/300/',
        link: 'https://unsplash.com'
    },
    {
        index: 2,
        title: 'Project 3',
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/400/300/',
        link: 'https://unsplash.com'
    },
    {
        index: 3,
        title: 'Project 4',
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/400/300/',
        link: 'https://unsplash.com'
    },
    {
        index: 4,
        title: 'Project 5',
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/400/300/',
        link: 'https://unsplash.com'
    },
  ]

  return <Gallery images={images} columns="4" gap="8" />
}

export default App
