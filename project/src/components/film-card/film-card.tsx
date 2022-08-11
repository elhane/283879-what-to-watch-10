import { Link } from 'react-router-dom';
import VideoPlayer from '../video-player/video-player';
import { useState, useRef } from 'react';
import { AppRoute } from '../../const';

type FilmCardProps = {
  id: number,
  previewImage: string,
  name: string,
  previewVideoLink: string
};

function FilmCard(props: FilmCardProps): JSX.Element {
  const { id, previewImage, name, previewVideoLink } = props;
  const [isShowVideo, setIsShowVideo] = useState(false);
  const timerRef = useRef(0);
  const [isCardActive, setIsCardActive] = useState(false);

  const onMouseOverHandle = () => {
    setIsCardActive(true);
    timerRef.current = window.setTimeout(() => setIsShowVideo(true),
      1000);
  };

  const onMouseOutHandle = () => {
    setIsCardActive(false);
    setIsShowVideo(false);
    clearTimeout(timerRef.current);
  };

  return (
    <article
      className={`small-film-card catalog__films-card ${ isCardActive ? 'active' : ''}` }
      onMouseOver={ onMouseOverHandle }
      onMouseOut={ onMouseOutHandle }
    >
      <Link className="small-film-card__image small-film-card__link" to={`${AppRoute.Films}${id}`} >
        {
          <VideoPlayer
            src={ previewVideoLink }
            videoPosterImage={ previewImage }
            isShowVideo={ isCardActive && isShowVideo }
            isMute
          />
        }
        <h3 className="small-film-card__title">{ name }</h3>
      </Link>
    </article>
  );
}

export default FilmCard;
