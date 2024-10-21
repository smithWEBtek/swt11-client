const Canvas = ({ title, body }) => {
  return (
    <main className="flex-1 bg-gray-100 p-6 canvas">
      <div className="max-w-7xl mx-auto">
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </main>
  )
}

export default Canvas;