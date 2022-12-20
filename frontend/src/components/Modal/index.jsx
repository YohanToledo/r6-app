import "./Modal.css";

const Modal = ({ show, onClose, info }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="custom-modal" onClick={onClose}>
      <div className="custom-modal-content" onClick={(e) => e.stopPropagation}>
        <img className="op-image" src={info.imageUrl} alt=""></img>
        <div className="custom-modal-container">
          <div className="custom-modal-header">
            <h4 className="custom-modal-title">
              <b>{info.operator.toUpperCase()}</b>
            </h4>
          </div>
          <div className="custom-modal-body">
            <div>
              <p>
                <b>Name: </b>
                {info.name}
              </p>
            </div>
            <div>
              <p>
                <b>Affiliation:</b> {info.affiliation}
              </p>
            </div>
            <div>
              <p>
                <b>Birth Date: </b>
                {info.birthDate}
              </p>
            </div>
            <div>
              <p>
                <b>Birth Place: </b>
                {info.birthPlace}
              </p>
            </div>
            <div>
              <p>
                <b>Height: </b>
                {info.height}
              </p>
            </div>
            <div>
              <p>
                <b>Weight: </b>
                {info.weight}
              </p>
            </div>
            <div>
              <p>
                <b>Released:</b> {info.released}
              </p>
            </div>
            <div>
              <p>
                <b>Armor:</b> {info.armor}
              </p>
            </div>
            <div>
              <p>
                <b>Speed: </b> {info.speed}
              </p>
            </div>
            <div>
              <p>
                <b>Difficulty:</b> {info.difficulty}
              </p>
            </div>
            <div>
              <p>
                <b>Team: </b>
                {info.team}
              </p>
            </div>
          </div>
          <div className="custom-modal-footer">
            <button onClick={onClose} className="button">
              <b>Close</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
