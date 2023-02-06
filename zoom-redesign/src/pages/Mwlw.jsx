import "../style/mwlw.css";

function Mwlw() {
  return (
    <div className="mwlw-main-container">
      <div className="mwlw-img-container center">
        <img
          src="https://st2.zoom.us/static/6.3.11147/image/home2/zm-product-wheel.png"
          alt="img" style={{maxHeight: '200%'}}
        />
      </div>
      <div className="mwlw-text-container">
        <span className="mwlw-header">Make work less work</span>
        <span className="mwlw-subheader">
          Securely connect and collaborate so you can work better together.
          Simple to manage and delightful to use, Zoom powers the modern
          workforce.
        </span>
        <a className="mwlw-link" href="google.com">Discover the Possibilities <span></span></a>
      </div>
    </div>
  );
}

export default Mwlw;
