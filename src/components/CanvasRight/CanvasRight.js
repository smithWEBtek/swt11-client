
const CanvasRight = ({ content }) => {
  return (
    <div className="canvasright-container">
      <div className="canvasright-content" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

export default CanvasRight