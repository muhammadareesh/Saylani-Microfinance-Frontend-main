import style from "./Home.module.css";
import airplane from "../assets/airplane.png";
import ceo from "../assets/ceo.png";

const Home = () => {
  return (
    <div>
      <div className={`${style.landingPage}`}>
        <div className={`${style.main} container mx-auto`}>
          <div
            className={`${style.content} h-full w-[45%] flex flex-col items-start justify-between`}
          >
            <span></span>
            <div>
              <h1 className="text-6xl/19 font-extrabold">
                Welcome To Saylani Microfinance
              </h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the loan.
              </p>
              <button>Take Your Loan</button>
            </div>

            <div className="ceo flex items-center gap-2 mb-5">
              <img
                className="w-12 rounded-full border-2 border-dark-imperial-blue"
                src={ceo}
                alt=""
              />
              <div className="details">
                <h3 className="name font-semibold">Bashir Ahmed Farooqui</h3>
                <p className="position text-sm">Chairman and Founder</p>
              </div>
            </div>
          </div>
          <div className="sideImage w-[50%]">
            <img src={airplane} alt="error to load image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
