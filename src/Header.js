import ProfilePicture from './assets/profile.jpg'
import MyInfo from './assets/MyInfo'
import Logos from './assets/Logos'
import DateUtils from './utils/DateUtils'
import { useMediaQuery } from 'react-responsive'
import './Header.scss'

const Header = () => {
	const isMobile = useMediaQuery({ query: '(max-width: 700px)' })

	return (
		<div className={'mainHeader'}>
			<div className={'profilePicture'}>
				<img src={ProfilePicture} alt={MyInfo.name} />
				<div className={'socialMedias'}>
					<a rel="noreferrer" href={MyInfo.linkedin} target={'_blank'}>
						<Logos.LinkedIn />
					</a>
					<a rel="noreferrer" href={MyInfo.facebook} target={'_blank'}>
						<Logos.Facebook />
					</a>
					<a rel="noreferrer" href={MyInfo.instagram} target={'_blank'}>
						<Logos.Instagram />
					</a>
					<a rel="noreferrer" href={MyInfo.github} target={'_blank'}>
						<Logos.Github />
					</a>
				</div>
			</div>
			<div className={'info'}>
				{isMobile ? <h1>{MyInfo.nameReduced}</h1> : <h1>{MyInfo.name}</h1>}
				<div className={'infoGroup'}>
					<label>E-mail:</label> <a href={`mailto:${MyInfo.email}`}>{MyInfo.email}</a>
				</div>
				<div className={'infoGroup'}>
					<label>Telefone:</label> <a href={`tel:${MyInfo.phone}`}>{MyInfo.phone}</a>
				</div>
				<div className={'infoGroup'}>
					<label>Aniversário:</label>
					<span>{`${MyInfo.birthday} (${DateUtils.birthday(MyInfo.birthday)} anos)`}</span>
				</div>
				<div className={'infoGroup'}>
					<label>Localização:</label>
					<span>{`${MyInfo.city}, ${MyInfo.state}, ${MyInfo.country}`}</span>
				</div>
				<div className={'infoGroup'}>
					<label>Linguas:</label>
					<span>{MyInfo.languages}</span>
				</div>
			</div>
		</div>
	)
}

export default Header
