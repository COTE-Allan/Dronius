import "../styles/largebutton.scss";
import { Link } from "react-router-dom";

const LargeButtonRouter = (props) => {
  return (
    <Link to={props.link} className="app-largebutton">
      {props.text}
    </Link>
  );
};

export default LargeButtonRouter;
