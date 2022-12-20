import { useEffect } from "react";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { useState } from "react";
import ops from "../../static/operators.json";

const Operators = () => {
  const [operators, setOperators] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/operators`)
      .then((response) => {
        console.log(response.data);
        setOperators(response.data);
      })
      .catch((error) => {
        console.log(`\nError to find all operators: ${error}`);
        setOperators(ops);
      });
  }, []);

  operators.sort((a, b) => {
    let fa = a.operator.toLowerCase(),
      fb = b.operator.toLowerCase();

    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });

  return (
    <>
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            {operators.map((op) => (
              <div key={op._id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                <Card operatorInfo={op} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Operators;
