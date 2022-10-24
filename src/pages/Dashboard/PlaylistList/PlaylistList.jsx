import { song_item_test } from '../../../dbtest';
import { PlaylistDash } from '../../../ui';
import PlaylistItem from '../PlaylistItem';



const PlaylistList = () => {
  return (
    <main>
          <PlaylistDash>
      {song_item_test.map(({id, tracks, title}) => {
        return (
            <PlaylistItem key={id} tracks={tracks} title={title} />
        )
      })}
          </PlaylistDash>
    </main>
  )
}

export default PlaylistList