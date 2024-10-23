const Projects = (() => {
  const projects = [{
    title: 'BWEL',
    company: 'Dana-Farber Cancer Institute',
    url: '<img src="/images/bwel.png" alt="DanaFarber BWEL site" />',
    description: 'Breast cancer study, wellness coaches interactive platform, legacy Rails migrated to v6'
  },
  {
    title: 'Math180',
    company: 'Houghton-Mifflin Harcourt',
    url: "https://tinyurl.com/3bt27bea",
    description: 'Math 180 for Grades 3–12 delivers evidence-based instruction and assessments to propel students to grade-level proficiency.'
  },
  {
    title: 'MetroCommon',
    company: 'MAPC: Metropolitan Area Planning Council',
    url: 'https://metrocommon.mapc.org/',
    description: 'MetroCommon 2050 is Greater Boston’s regional land use and policy plan.'
  },
  ]


  return (
    <div>
      <h3 className="canvas-right-grid-title">Projects grid</h3>
      <p className="canvas-right-grid-item">{projects[0].title}</p>
      <p className="canvas-right-grid-item">{projects[1].title}</p>
      <p className="canvas-right-grid-item">{projects[2].title}</p>
    </div>)

})

export default Projects;