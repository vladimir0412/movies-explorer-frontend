import './Preloader.css'

function Preloader({isLoad}) {
  return (
    <div className={"preloader" + (isLoad?" preloader_visible":"")}>
      <div className="preloader__container">
        <div className="preloader__round"></div>
      </div>
    </div>
  )
};

export default Preloader;
