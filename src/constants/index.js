import * as Icon from '../components/icons'
import React from 'react'

export default {
  MOBILE_SIZE: 640,
}

export const MENU = [
  {
    title: 'Home',
    path: '/',
    icon: <Icon.Home />,
    iconSelected: <Icon.HomeActive />
  },
  {
    title: 'Search',
    path: '/search',
    icon: <Icon.Search />,
    iconSelected: <Icon.SearchActive />
  },
  {
    title: 'Library',
    path: '/library',
    icon: <Icon.Library />,
    iconSelected: <Icon.LibraryActive />
  }
]

export const PLAYLISTBTN = [
    {
      title: 'Create Playlist',
      path: '/',
      ImgName: 'createPlaylist',
    },
    {
      title: 'Liked Songs',
      path: '/',
      ImgName: 'popularSong',
    }
]

export const LIBRARYTABS = [
  {
    title: 'Library',
    path: '/library'
  },
  {
    title: 'Podcast',
    path: '/library/podcasts'
  },
  {
    title: 'Albums',
    path: '/library/albums'
  }
]