import "./Projet.css"

// eslint-disable-next-line react/prop-types
export default function ModalContent({closeModal}) {
  return (
    <div
    className="item"
    onClick={closeModal}
    >
      <div
      className="modal-brain"
      onClick={e => e.stopPropagation()}>
        <button
        className="btn"
        onClick={closeModal}
        >X</button>
        <p>Content</p>
      </div>
    </div>
  )
}
  