import MyInfo from '../assets/MyInfo'
import DateUtils from '../utils/DateUtils'

const Biography = () => {
	return (
		<div>
			{MyInfo.biography.description.map((x, index) => {
				return (
					<p key={index}>
						{x
							.replaceAll('@#DATE@#', DateUtils.stringJustDate(new Date()))
							.replaceAll('@#YEAR@#', DateUtils.birthday(MyInfo.startOnTI))}
					</p>
				)
			})}
			<h1>Objetivos</h1>
			{MyInfo.biography.objectives.map((x, index) => {
				return <p key={index}>{x}</p>
			})}
		</div>
	)
}

export default Biography
