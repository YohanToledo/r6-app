import { useState } from "react";
import Modal from "../Modal";
import "./Card.css";

const Card = ({ operatorInfo }) => {
  const [show, setShow] = useState(false);

  return (
    <div className={`card-container ${operatorInfo.team}`}>
      <img
        onClick={() => setShow(true)}
        className="operator-iamge"
        src={operatorInfo.imageUrl}
        alt=""
      />
      <h3 className="op-name">
        <b>{operatorInfo.operator.toUpperCase()}</b>
      </h3>
      <Modal info={operatorInfo} onClose={() => setShow(false)} show={show} />
    </div>
  );
};

export default Card;
