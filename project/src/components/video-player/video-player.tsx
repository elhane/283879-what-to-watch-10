import { useEffect, useRef, useState } from 'react';

type VideoPlayerProps = {
  src: string,
  isMute: boolean,
  videoPosterImage: string,
  isShowVideo: boolean
}

function VideoPlayer(props: VideoPlayerProps): JSX.Element {
  const { src, isMute, videoPosterImage, isShowVideo } = props;
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
    <video
      height="175"
      src={ src }
      muted={ isMute }
      poster={ videoPosterImage }
      ref={ videoRef }
    >
    </video>
  );
}

export default VideoPlayer;
