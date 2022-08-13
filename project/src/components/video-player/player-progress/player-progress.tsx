import { formatTime } from '../../../utils';
import { ChangeEvent } from 'react';

type PlayerProgressProps = {
  onVideoProgressChange: (evt: ChangeEvent<HTMLInputElement>) => void,
  videoProgress: number,
  videoDuration: number
}

function PlayerProgress({ onVideoProgressChange, videoDuration, videoProgress }: PlayerProgressProps): JSX.Element {
  return (
    <>
      <div className="player__time">
        <progress className="player__progress" value={videoProgress} max="100"></progress>
        <input
          className="player__range"
          type="range"
          min="0"
          max="100"
          value={ videoProgress }
          onChange={(evt) => onVideoProgressChange(evt)}
        />
      </div>
      <div className="player__time-value">{ formatTime(videoDuration) }</div>
    </>
  );
}

export default PlayerProgress;
