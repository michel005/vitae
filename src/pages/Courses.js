import Icon from '../components/Icon'
import MyInfo from '../assets/MyInfo'
import ProgressIndicator from '../components/ProgressIndicator'

const Courses = () => {
	return (
		<>
			<div className={'courses'}>
				{MyInfo.courses.map((course, index) => {
					return (
						<div key={index} className={'section'}>
							{course.title}
							<ProgressIndicator value={course.progress} maximum={1} />
						</div>
					)
				})}
			</div>
		</>
	)
}

export default Courses
