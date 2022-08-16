import { useAppDispatch } from '../../hooks';
import { showMoreCards } from '../../store/film-process/film-process';

function ShowMoreButton(): JSX.Element {
  const dispatch = useAppDispatch();

  const handleShowMoreButtonClick = () => {
    dispatch(showMoreCards());
  };

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={ handleShowMoreButtonClick }>Show more</button>
    </div>
  );
}

export default ShowMoreButton;
