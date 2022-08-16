import { Link } from 'react-router-dom';
import VideoPlayer from '../video-player/video-player';
import { useState, useRef } from 'react';
import { AppRoute, Timeout } from '../../const';

type FilmCardProps = {
  id: number,
  previewImage: string,
  name: string,
  previewVideoLink: string
};

function FilmCard(props: FilmCardProps): JSX.Element {
  const { id, previewImage, name, previewVideoLink } = props;
  const [ isShowTrailer, setIsShowTrailer ] = useState(false);
  const [ isCardActive, setIsCardActive ] = useState(false);
  const timerRef = useRef(0);

  const handleCardMouseOver = () => {
    setIsCardActive(true);
    timerRef.current = window.setTimeout(() => setIsShowTrailer(true),
      Timeout.ShowTrailer );
  };

  const handleCardMouseOut = () => {
    setIsCardActive(false);
    setIsShowTrailer(false);
    clearTimeout(timerRef.current);
  };

  return (
    <article
      className={ `small-film-card catalog__films-card ${ isCardActive ? 'active' : ''}` }
      onMouseOver={ handleCardMouseOver }
      onMouseOut={ handleCardMouseOut }
    >
      <Link className="small-film-card__image small-film-card__link" to={ `${AppRoute.Films}${id}` } >
        {
          <VideoPlayer
            src={ previewVideoLink }
            videoPosterImage={ previewImage }
            isShowTrailer={ isCardActive && isShowTrailer }
            isMute
            isPreview
          />
        }
        <h3 className="small-film-card__title">{ name }</h3>
      </Link>
    </article>
  );
}

export default FilmCard;
