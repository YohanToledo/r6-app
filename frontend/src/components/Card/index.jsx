import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Modal from "../Modal";
import "./Card.css";
import { BiLoaderAlt } from "react-icons/bi";

const Card = ({ operatorInfo }) => {
  const [show, setShow] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = operatorInfo.imageUrl;
    img.onprogress = () => setLoading(true);
    img.onload = () => {
      setLoading(false);
    };
  }, [operatorInfo.imageUrl]);

  return (
    <div className={`card-container ${operatorInfo.team}`}>
      {loading ? (
        <div className="image-load">
          <BiLoaderAlt className="load-icon" />
        </div>
      ) : (
        <LazyLoadImage
          className="operator-iamge"
          onClick={() => setShow(true)}
          src={operatorInfo.imageUrl}
          width={120}
          height={220}
          effect="blur"
        />
      )}
      <h3 className="op-name">
        <b>{operatorInfo.operator.toUpperCase()}</b>
      </h3>
      <Modal info={operatorInfo} onClose={() => setShow(false)} show={show} />
    </div>
  );
};

export default Card;
