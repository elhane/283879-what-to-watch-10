import { Link } from 'react-router-dom';
import VideoPlayer from '../video-player/video-player';
import { useState } from 'react';

type FilmCardProps = {
  id: number,
  previewImage: string,
  name: string,
  isActive: boolean,
  makeCardActive: (id: number) => void,
  previewVideoLink: string
};

function FilmCard(props: FilmCardProps): JSX.Element {
  const { id, previewImage, name, isActive, makeCardActive, previewVideoLink } = props;
  const [isShowVideo, setIsShowVideo] = useState(false);

  const onMouseOverHandle = () => {
    makeCardActive(id);
    setTimeout(() => {
      setIsShowVideo(true);
    }, 1000);
  };

  const onMouseOutHandle = () => {
    setIsShowVideo(false);
  };

  return (
    <article
      className={`small-film-card catalog__films-card ${ isActive ? 'active' : ''}` }
      onMouseOver={ onMouseOverHandle }
      onMouseOut={ onMouseOutHandle }
    >
      <Link className="small-film-card__image small-film-card__link" to={`/films/${id}`}>
        {
          <VideoPlayer
            src={ previewVideoLink }
            videoPosterImage={ previewImage }
            isShowVideo={ isActive && isShowVideo }
            isMute
          />
        }
        <h3 className="small-film-card__title">{ name }</h3>
      </Link>
    </article>
  );
}

export default FilmCard;
