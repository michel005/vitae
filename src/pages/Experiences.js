import Icon from '../components/Icon'
import MyInfo from '../assets/MyInfo'
import Table from '../components/Table'
import ProgressIndicator from '../components/ProgressIndicator'

const Experiences = () => {
	return (
		<>
			<div className={'experiences'}>
				<Table
					data={MyInfo.experiences.sort((x, y) => {
						if (x.name > y.name) return 1
						if (x.name < y.name) return -1
						return 0
					})}
					header={{
						name: 'Nome',
						version: 'Versão',
						level: 'Nível',
					}}
					valueModifier={{
						level: (value) => {
							return (
								<ProgressIndicator key={value} label={`Nível ${value}`} value={value} maximum={5} />
							)
						},
					}}
				/>
			</div>
		</>
	)
}

export default Experiences
