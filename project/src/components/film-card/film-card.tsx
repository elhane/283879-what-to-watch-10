import { Link } from 'react-router-dom';

type FilmCardProps = {
  id: number,
  previewImage: string,
  name: string,
  isActive: boolean,
  makeCardActive: (id: number) => void
};

function FilmCard(props: FilmCardProps): JSX.Element {
  const { id, previewImage, name, isActive, makeCardActive } = props;
  return (
    <article className={`small-film-card catalog__films-card ${ isActive ? 'active' : ''}` } onMouseOver={() => makeCardActive(id)}>
      <div className="small-film-card__image">
        <img src={ previewImage } alt={ name } width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{ name }</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
