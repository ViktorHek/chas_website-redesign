import "../style/poaig.css"

function Box({title, icon}) {
  return (
    <div className="poaig-box">
    <div className="center">
      <img src={icon} alt=":)"/>
    </div>
    <p>{title}</p>
  </div>
);
}

export default Box;
