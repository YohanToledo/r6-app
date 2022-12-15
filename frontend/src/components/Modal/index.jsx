import "./Modal.css";

const Modal = ({ show, onClose, info }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="custom-modal" onClick={onClose}>
      <div className="custom-modal-content" onClick={(e) => e.stopPropagation}>
        <div className="custom-modal-container">
          <div className="custom-modal-header">
            <h4 className="custom-modal-title">
              <b>{info.operator.toUpperCase()}</b>
            </h4>
          </div>
          <div className="custom-modal-body">
            <div>
              <b>Name: </b>
              {info.name}
            </div>
            <div>
              <b>Affiliation:</b> {info.affiliation}
            </div>
            <div>
              <b>Birth Date: </b>
              {info.birthDate}
            </div>
            <div>
              <b>Birth Place: </b>
              {info.birthPlace}
            </div>
            <div>
              <b>Height: </b>
              {info.height}
            </div>
            <div>
              <b>Weight: </b>
              {info.weight}
            </div>
            <div>
              <b>Released:</b> {info.released}
            </div>
            <div>
              <b>Armor:</b> {info.armor}
            </div>
            <div>
              <b>Speed: </b> {info.speed}
            </div>
            <div>
              <b>Difficulty:</b> {info.difficulty}
            </div>
            <div>
              <b>Team: </b>
              {info.team}
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
