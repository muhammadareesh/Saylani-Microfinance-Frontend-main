import { useEffect, useState } from "react";
import apiFetch from "../hooks/apiFetch";
import { useLoader } from "../context/LoaderContext";
const LoanPage = () => {
  const [data, setData] = useState([]);
  const { setShowLoader } = useLoader();
  useEffect(() => {
    const fetchData = async () => {
      setShowLoader(true);
      try {
        const loanData = await apiFetch("api/auth/loans");
        setData(loanData);
      } catch (error) {
        console.log(error);
      }
      setShowLoader(false);
    };

    fetchData();
  }, []);

  return (
    <div className="container h-screen m-auto rounded-3xl flex flex-col justify-center items-center gap-10">
      <h2 className="font-extrabold text-4xl">Available Loan Categories</h2>
      <div className="cardGroup w-[90%] flex justify-center gap-5">
        {/* data map */}
        {data.length > 0 ? (
          // ERROR
          data.map((loan) => {
            return (
              <>
                <a
                  key={loan.id}
                  className="card group border-2 border-dark-imperial-blue w-[23%] p-4 rounded-2xl bg-ufo-green flex flex-col hover:-translate-y-4 hover:bg-white duration-700 cursor-pointer"
                >
                  <div className="cardImage border border-dark-imperial-blue rounded-lg overflow-hidden mb-5 h-[12rem]">
                    <img
                      className="h-full w-full object-cover"
                      src={loan.img}
                      alt="not founded"
                    />
                    {console.log({ checking: loan.img })}
                  </div>
                  <div className="cardContent flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-xl">{loan.name}</h3>
                      <p className="mb-3 text-[0.9rem] opacity-80">
                        {loan.description}
                      </p>

                      <p className="text-sm">
                        <strong>Maximum Amount:</strong> 5 Lakh
                      </p>
                      <p className="text-sm">
                        <strong>Loan Period:</strong> 3 years
                      </p>
                    </div>
                    <div className="">
                      <h4 className="text-center text-white font-semibold mt-2 mb-2 text-md group-hover:text-dark-imperial-blue duration-300">
                        Subcategories
                      </h4>
                      <ul className="flex flex-wrap justify-center gap-x-2 gap-y-1">
                        {loan.subCategories.map((subs) => {
                          return (
                            <li
                              key={subs.id}
                              className="bg-white border-2 border-dark-imperial-blue px-3 py-1 text-[0.7rem] rounded-full"
                            >
                              {subs.name}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </a>
              </>
            );
          })
        ) : (
          <div className="card border-2 border-dark-imperial-blue w-1/4 p-4 rounded-2xl bg-ufo-green text-center">
            <p className="font-semibold text-xl">Loading...</p>
          </div>
        )}

        {/* Hard Code */}
        {/* <div className="card border-2 border-dark-imperial-blue w-1/4 p-4 rounded-2xl bg-ufo-green">
          <div className="cardImage border-2 border-dark-imperial-blue rounded-lg overflow-hidden mb-5">
            <img src={weddingImg} alt="" />
          </div>
          <h3 className="font-semibold text-2xl mb-2">Wedding Loan</h3>
          <p>Maximum Amount: 5 Lakh</p>
          <p>Loan Period: 3 years</p>
          <h4 className="text-center text-white font-semibold mt-10 mb-2 text-md">
            Subcategories
          </h4>
          <ul className="flex">
            <li className="bg-white border-2 border-dark-imperial-blue px-4 py-1 text-sm rounded-full">
              Valima
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default LoanPage;
