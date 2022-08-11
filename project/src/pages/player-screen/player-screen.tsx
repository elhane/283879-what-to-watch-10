import {useNavigate, useParams} from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { getFilms } from '../../store/films-data/selectors';
import { Film} from '../../types/films';
import VideoPlayer from '../../components/video-player/video-player';

function PlayerScreen(): JSX.Element {
  const navigate = useNavigate();
  const params = useParams();
  const movies = useAppSelector(getFilms);
  const film = movies.find((movie) => movie.id === Number(params?.id)) as Film;
  const { videoLink, previewImage, id } = film;

  const onExitBtnClickHandler = () => {
    navigate(`/films/${id}`);
  };

  return (
    <div className="player">
      <VideoPlayer src={videoLink} isMute videoPosterImage={previewImage} isShowVideo className={'player__video'} hasControls/>

      <button type="button" className="player__exit" onClick={ onExitBtnClickHandler }>Exit</button>

    </div>
  );
}

export default PlayerScreen;
