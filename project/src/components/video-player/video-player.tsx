import { useEffect, useRef, useState } from 'react';

type VideoPlayerProps = {
  src: string,
  isMute: boolean,
  videoPosterImage: string,
  isShowVideo: boolean,
  className?: string,
  hasControls?: boolean,
}

function VideoPlayer(props: VideoPlayerProps): JSX.Element {
  const { src, isMute, videoPosterImage, isShowVideo, className, hasControls = false } = props;
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    setIsPlaying(isShowVideo);
  }, [isShowVideo]);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    videoRef.current.load();

  }, [isPlaying]);

  return (
    <>
      <video
        height="175"
        src={ src }
        muted={ isMute }
        poster={ videoPosterImage }
        ref={ videoRef }
        className={className}
      >
      </video>

      { hasControls ? (
        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value="30" max="100"></progress>
              <div className="player__toggler" style={{ left: '30%' }}>Toggler</div>
            </div>
            <div className="player__time-value">1:30:29</div>
          </div>

          <div className="player__controls-row">
            <button type="button" className="player__play">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <div className="player__name">Transpotting</div>

            <button type="button" className="player__full-screen">
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      ) : ''}
    </>

  );
}

export default VideoPlayer;
