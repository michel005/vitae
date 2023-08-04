import Icon from '../components/Icon'
import MyInfo from '../assets/MyInfo'

const Projects = () => {
	return (
		<>
			<div className={'projects'}>
				{MyInfo.projects.map((project, index) => {
					return (
						<div key={index} className={'section'}>
							<div className={'info'}>
								{project.title}
								<p>{project.description}</p>
								<i>{project.tecnology}</i>
								<a href={project.url} target={'_blank'} rel="noreferrer">
									Acessar
								</a>
							</div>
							<img src={project.image} alt={project.title} />
						</div>
					)
				})}
			</div>
		</>
	)
}

export default Projects
