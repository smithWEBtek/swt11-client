
const Prototypes = () => {
  const renderedPrototypes = data.map((project, index) => {
    return (
      <div>
        <h2>{project.title}</h2>
        <p>site: <a href={project.url} alt={`${project.title}-${project.url}`} /></p>
        <p>about: {project.about}</p>
        <p>techstack: {project.techstack}</p>
      </div>
    )
  })

  return (
    <div>
      <h1>prototypes page</h1>
      {renderedPrototypes}
    </div>
  )
}

export default Prototypes;