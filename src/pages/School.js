import Icon from '../components/Icon'
import MyInfo from '../assets/MyInfo'

const School = () => {
	return (
		<>
			<div className={'school'}>
				{MyInfo.school.map((school, index) => {
					return (
						<div key={index} className={'section'}>
							<h3>{school.name}</h3>
							<small>{school.location}</small>
							<span>{school.timeRange}</span>
							<p>{school.description}</p>
						</div>
					)
				})}
			</div>
		</>
	)
}

export default School
