import { Button, ButtonGoogle } from './Button.styled';
import { CenterArticle, CenterProfile } from './CenterArticle.styled';
import { GlobalStyle } from './GlobalStyles';
import { Input, Label } from './Form.styled';
import { Logo } from './Logo.styled';
import { MainApp, MainDash, MainHome, MainModal, MainSign } from './Main.styled';
import { TextAccount, TextColor, TextTerms, TermColor, TextRemember, TitleSign, TitleH2, TitleP, ResponseMessage } from './Text.styled';
import { MainNav, NavContent, AvatarContent, Avatar, ButtonAvatar, GreenDot } from './Avatar.styled';
import { PopCoverItems, PopItems, PopMenu } from './PopMenu.styled';
import { PlaylistColumn, PlaylistCoverSm, PlaylistContainer, PlaylistSong, PlaylistColumnSongs, PlaylistArticle, PopoverPlaylistStyled, PlaylistBigHeader } from './Playlist.styled';
import { MainFlex, CategoryRow, SongsRow, PlaylistRow } from './Grid.styled';
import { CurrentSongMbl, MusicBar, MusicControls, MusicVolume, PlayerMain, ProgressTime } from './PlayerMain.styled';
import { MainControl, ShuffleBtn, RepeatBtn, PlayBtn, ChangeSongBtn } from './PlayerControls.styled';
import { ProgressBar } from './ProgressBar.styled';
import { SidebarMain, UploadBtn, CurrentSong, CurrentPlaying } from './SidebarMain';
import { CategoryDash, GenDashMain, PlaylistDash, RecommendedDash, SongsDash } from './GeneralDashboardGrid.styled';
import { CoverMenuIcon, CoverSong } from './DashboardImg.styled';
import { CoverSongTitle, CoverSongArtist, SongsH2, SongTimer, PopoverArticle } from './DashboardText.styled';
import { CoverCategoryMain, CoverPlaylistMain, CoverSongMain, PlaylistTitle, PlaylistInfo, CoverCategoryImg, CategorySwiper, CategorySwiperItem } from './DashboardItems.styled';
import { SideMenu, SideMenuItems } from './MenuItems.styled';
import { NavOutlet, SideOutlet, PlayerOutlet, MainOutlet } from './GridOutlet.styled';
import { IconHome, IconFavorites, IconPlaylist, IconCategories, IconUpload } from './Icons.styled';
import { UploadButton } from './UploadButton.syled';



// Upload modal
export {
  MainModal
}

// Dashboard Home
export {
  MainFlex, 
  CategoryRow, 
  SongsRow, 
  PlaylistRow, 
  // SpecialRow
}

//Icons
export {
  IconHome,
  IconFavorites,
  IconPlaylist,
  IconCategories,
  IconUpload
}

//Upload Song Button
export {
  UploadButton
}

// Outlet from React router
export {
  NavOutlet, 
  SideOutlet, 
  PlayerOutlet, 
  MainOutlet
}

// General Dashboard - Playlist covers
export {
  CoverPlaylistMain,
  PlaylistTitle,
  PlaylistInfo
}

// General Dashboard - Category covers
export {
  CoverCategoryMain,
  CoverCategoryImg
}

// General Dashboard - Your Songs covers
export {
  CoverSong,
  CoverSongTitle,
  CoverSongArtist,
  CoverSongMain,
  SongsH2,
  CoverMenuIcon,
  PopCoverItems,
  PopItems,
  PopoverArticle,
  
}

//General Dashboard
export {
  CategoryDash,
  GenDashMain,
  PlaylistDash,
  RecommendedDash,
  SongsDash,
}

//sidebar
export {
  SidebarMain,
  SideMenu,
  UploadBtn,
  CurrentSong,
  SideMenuItems,
  CurrentPlaying
}

// Track music bar
export { ProgressBar }

// music player controls
export{
  PlayerMain,
  MainControl,
  MusicControls,
  MusicBar,
  MusicVolume,
  ShuffleBtn,
  RepeatBtn,
  PlayBtn,
  ChangeSongBtn,
  CurrentSongMbl,
  ProgressTime,
  SongTimer
}

export{
  MainHome,
  MainSign,
  MainDash,
  MainApp,
  CenterArticle,
  CenterProfile
}

// Login, Sign up & Log in / buttons
export {
  Logo,
  GlobalStyle,
  Button,
  ButtonGoogle,
  Input,
  Label
};

// Texts
export {   
  TextAccount,
  TextColor,
  TextTerms,
  TermColor,
  TextRemember,
  TitleSign,
  TitleH2,
  TitleP,
  ResponseMessage,
}

  // Navbar
  export {
    MainNav,
    NavContent,
    Avatar,
    ButtonAvatar,
    GreenDot,
    AvatarContent,
    PopMenu
  }

  // Grid to Dashboard
  // export {
  //   GridMainContainer,
  //   GridMainItem, 
  //   GridPlayerItem, 
  //   GridSideItem
  // }

// Playlists
export {
  PlaylistColumn,
  PlaylistCoverSm,
  PlaylistContainer,
  PlaylistSong,
  PlaylistColumnSongs,
  CategorySwiper,
  CategorySwiperItem,
  PlaylistArticle,
  PopoverPlaylistStyled,
  PlaylistBigHeader
}