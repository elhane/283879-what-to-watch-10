type FullScreenButtonProps = {
  onFullScreenButtonClick: () => void
}

function FullScreenButton({ onFullScreenButtonClick }: FullScreenButtonProps): JSX.Element {

  return (
    <button type="button" className="player__full-screen" onClick={ onFullScreenButtonClick }>
      <svg viewBox="0 0 27 27" width="27" height="27">
        <use xlinkHref="#full-screen"></use>
      </svg>
      <span>Full screen</span>
    </button>
  );
}

export default FullScreenButton;
