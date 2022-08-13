type FullScreenButtonProps = {
  onFullScreenBtnClick: () => void
}

function FullScreenButton({onFullScreenBtnClick}: FullScreenButtonProps): JSX.Element {

  return (
    <button type="button" className="player__full-screen" onClick={ onFullScreenBtnClick }>
      <svg viewBox="0 0 27 27" width="27" height="27">
        <use xlinkHref="#full-screen"></use>
      </svg>
      <span>Full screen</span>
    </button>
  );
}

export default FullScreenButton;
