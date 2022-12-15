import Card from "../../components/Card";
import Navbar from "../../components/Navbar";

const Operators = () => {
  const operators = [
    {
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
    },
    {
      _id: 350535335,
      operator: "maestro",
      name: "Adriano Martello",
      affiliation: "G.I.S",
      birthDate: "1973-04-13",
      birthPlace: "Rome",
      height: 1.85,
      weight: 87,
      released: "Para Bellum (2018-06-07)",
      armor: 3,
      speed: 1,
      difficulty: "medium",
      team: "defense",
      imageUrl:
        "https://ik.imagekit.io/yohan/r6/MAESTRO.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671122297239",
      iconUrl: "",
    },

    {
      _id: 350535335,
      operator: "ash",
      name: "Eliza Cohen",
      affiliation: "SWAT",
      birthDate: "1983-12-24",
      birthPlace: "Jerusalem",
      height: 1.7,
      weight: 63,
      released: "Launch (2015-12-01)",
      armor: 1,
      speed: 3,
      difficulty: "easy",
      team: "attack",
      imageUrl:
        "https://ik.imagekit.io/yohan/r6/ASH.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671141827892",
      iconUrl: "",
    },
    {
      _id: 350535335,
      operator: "castle",
      name: "Miles Campbell",
      affiliation: "SWAT",
      birthDate: "1980-09-20",
      birthPlace: "Los Angeles, California",
      height: 1.85,
      weight: 86,
      released: "Launch (2015-12-01)",
      armor: 2,
      speed: 2,
      difficulty: "medium",
      team: "defense",
      imageUrl:
        "https://ik.imagekit.io/yohan/r6/CASTLE.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671144453839",
      iconUrl: "",
    },
    {
      _id: 350535335,
      operator: "bandit",
      name: "Dominic Brunsmeier",
      affiliation: "GSG 9",
      birthDate: "1974-08-13",
      birthPlace: "Berlim",
      height: 1.8,
      weight: 68,
      released: "Launch (2015-12-01)",
      armor: 1,
      speed: 3,
      difficulty: "easy",
      team: "defense",
      imageUrl:
        "https://ik.imagekit.io/yohan/r6/BANDIT.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671141879431",
      iconUrl: "",
    },
    {
      _id: 350535335,
      operator: "blackbeard",
      name: "Craig Jenson",
      affiliation: "Navy Seal",
      birthDate: "1985-03-12",
      birthPlace: "Bellevue (E.U.A)",
      height: 1.8,
      weight: 68,
      released: "Dust Line (2016-05-10)",
      armor: 2,
      speed: 2,
      difficulty: "medium",
      team: "attack",
      imageUrl:
        "https://ik.imagekit.io/yohan/r6/BLACKBEARD.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671141946986",
      iconUrl: "",
    },
  ];

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
