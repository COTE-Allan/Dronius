import "../styles/largebutton.scss";

const LargeButtonAnchor = (props) => {
  return (
    <a href={props.link} className="app-largebutton">
      {props.text}
    </a>
  );
};

export default LargeButtonAnchor;
