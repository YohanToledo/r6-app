import Card from "../../components/Card";
import Navbar from "../../components/Navbar";

const Operators = () => {
  const operators = [];
  for (let i = 0; i < 15; i++) {
    operators.push({
      _id: 350535335,
      operator: "sledge",
      name: "Seamus Cowden",
      affiliation: "United Kingdom S.A.S",
      birthDate: "1982-04-02",
      birthPlace: "Scotland John o Groats",
      height: 1.92,
      weight: 95,
      released: "Launch (2015-12-01)",
      armor: 3,
      speed: 1,
      difficulty: "easy",
      team: "attack",
      imageUrl:
        "https://ik.imagekit.io/yohan/r6/SLEDGE.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671139559774",
      iconUrl: "",
    });
    operators.push({
      _id: 350535335,
      operator: "maestro",
      name: "Seamus Cowden",
      affiliation: "United Kingdom S.A.S",
      birthDate: "1982-04-02",
      birthPlace: "Scotland John o Groats",
      height: 1.92,
      weight: 95,
      released: "Launch (2015-12-01)",
      armor: 3,
      speed: 1,
      difficulty: "easy",
      team: "defense",
      imageUrl:
        "https://ik.imagekit.io/yohan/r6/MAESTRO.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671122297239",
      iconUrl: "",
    });
  }

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
