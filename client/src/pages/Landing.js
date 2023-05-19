import main from "../assets/images/main.svg";
import {Logo} from "../components";
import {Link} from 'react-router-dom'

const Landing = () => {
  return (
    <main>
      <nav>
        <Logo/>

      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            aperiam sint explicabo cum iste expedita accusantium, soluta nulla
            esse laboriosam odit laborum veritatis mollitia delectus molestiae?
            Corporis nihil voluptate nam?
          </p>
          <Link to="/register" className="btn btn-hero">
            Login / Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img"/>
      </div>
    </main>
  );
};

export default Landing;
