const Canvas = ({ content }) => {
  return (
    <div className="canvas-content">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

export default Canvas;