import './loading-screen.css';

function LoadingScreen(): JSX.Element {
  return (
    <div className="loader-page">
      <div className="loader">
        <h2 className="loader-title">loading</h2>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default LoadingScreen;
