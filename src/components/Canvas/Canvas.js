const Canvas = ({ content }) => {
  return (
    <main className="flex-1 bg-gray-100 p-6 canvas">
      <div className="max-w-7xl mx-auto">
        <div className="canvas-content" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </main>
  )
}

export default Canvas;