import { useAppDispatch } from '../../hooks';
import { showMoreCards } from '../../store/action';

function ShowMoreButton(): JSX.Element {
  const dispatch = useAppDispatch();

  const onShowMoreBtnClickHandler = () => {
    dispatch(showMoreCards());
  };

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={ onShowMoreBtnClickHandler }>Show more</button>
    </div>
  );
}

export default ShowMoreButton;
