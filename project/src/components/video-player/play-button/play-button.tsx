import { useEffect, useState } from 'react';

type PlayButtonProps = {
  isPaused: boolean,
  onPlayAndPauseBtnClick: () => void
}

function PlayButton({isPaused, onPlayAndPauseBtnClick}: PlayButtonProps): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false);


  useEffect(() => {
    setIsPlaying(!isPaused);
  },[isPaused]);

  return (
    <button type="button" className="player__play" onClick={ onPlayAndPauseBtnClick }>
      { !isPlaying ?
        (
          <>
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </>
        ) :
        (
          <>
            <svg viewBox="0 0 14 21" width="14" height="21">
              <use xlinkHref="#pause"></use>
            </svg>
            <span>Pause</span>
          </>
        )};
    </button>
  );
}

export default PlayButton;
