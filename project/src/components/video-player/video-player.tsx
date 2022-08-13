import './video-player.css';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import PlayButton from './play-button/play-button';
import FullScreenButton from './full-screen-button/full-screen-button';
import PlayerProgress from './player-progress/player-progress';
import LoadingScreen from '../../pages/loading-screen/loading-screen';

type VideoPlayerProps = {
  src: string,
  isMute: boolean,
  videoPosterImage: string,
  isShowTrailer: boolean,
  className?: string,
  hasControls?: boolean,
  filmName?: string
}

function VideoPlayer(props: VideoPlayerProps): JSX.Element {
  const {
    src,
    filmName,
    isMute,
    videoPosterImage,
    isShowTrailer,
    className,
    hasControls = false
  } = props;
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoPlayerState, setVideoPlayerState] = useState({
    duration: 0,
    progress: 0,
    isPlaying: false,
    isLoaded: false
  });

  const handlePlayAndPauseBtnClick = () => {
    setVideoPlayerState({
      ...videoPlayerState,
      isPlaying: !videoPlayerState.isPlaying
    });
  };

  const handleVideoLoaded = (filmDuration: number) => {
    setVideoPlayerState({
      ...videoPlayerState,
      duration: filmDuration,
      isLoaded: true
    });
  };

  const handleTimeUpdate = () => {
    if (videoRef.current !== null) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      const timeLeft = videoRef.current.duration - videoRef.current.currentTime;

      setVideoPlayerState({
        ...videoPlayerState,
        progress,
        duration: timeLeft
      });
    }
  };

  const handleVideoProgressChange = (evt: ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      const newProgressValue = +evt.target.value;
      videoRef.current.currentTime = (videoRef.current.duration / 100) * newProgressValue;

      setVideoPlayerState({
        ...videoPlayerState,
        progress: newProgressValue
      });
    }
  };

  const handleFullScreenBtnClick = () => {
    if (videoRef.current) {
      videoRef.current?.requestFullscreen();
    }
  };

  useEffect(() => {
    setVideoPlayerState({
      ...videoPlayerState,
      isPlaying: isShowTrailer
    });
  }, [isShowTrailer]);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    if (videoPlayerState.isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();

      if (!isShowTrailer) {
        videoRef.current.currentTime = 0;
        videoRef.current.load();
      }
    }

  }, [videoPlayerState.isPlaying]);

  return (
    <>
      { !videoPlayerState.isLoaded ? <LoadingScreen /> : '' }
      <video
        height="175"
        src={ src }
        muted={ isMute }
        poster={ videoPosterImage }
        ref={ videoRef }
        className={className}
        onLoadedData={() => { if (videoRef.current?.duration) {
          handleVideoLoaded(videoRef.current?.duration);
        }}}
        onTimeUpdate={ handleTimeUpdate }
      >
      </video>

      { hasControls ? (
        <div className="player__controls">
          <div className="player__controls-row">
            <PlayerProgress
              onVideoProgressChange={ handleVideoProgressChange }
              videoProgress={ videoPlayerState.progress }
              videoDuration={ videoPlayerState.duration }
            />
          </div>

          <div className="player__controls-row">
            <PlayButton
              isPaused={ !videoPlayerState.isPlaying }
              onPlayAndPauseBtnClick={ handlePlayAndPauseBtnClick }
            />

            <div className="player__name">{ filmName }</div>

            <FullScreenButton onFullScreenBtnClick={ handleFullScreenBtnClick }/>
          </div>
        </div>
      ) : ''}
    </>

  );
}

export default VideoPlayer;
