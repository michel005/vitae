import style from './App.module.scss'
import MyInfo from './assets/MyInfo'
import DateUtils from './utils/DateUtils'
import { FacebookLogo, GithubLogo, InstagramLogo, LinkedInLogo } from './assets/Logos'
import Icon from './components/Icon'

const App = () => {
	return (
		<div className={style.app}>
			<div className={style.page}>
				<div className={style.sidebar}>
					<div className={style.pictureAndLinks}>
						<img
							src="https://lh3.googleusercontent.com/a/ACg8ocLpqXqbHUIx0fLsW1Qr_ZZTj_SoIzmRx3lvA2bmlAFZBw82=s288-c-no"
							alt={MyInfo.name}
						/>
						<div className={style.logos}>
							<a href={MyInfo.linkedin} target="_blank" rel="noreferrer">
								<LinkedInLogo />
							</a>
							<a href={MyInfo.instagram} target="_blank" rel="noreferrer">
								<InstagramLogo />
							</a>
							<a href={MyInfo.facebook} target="_blank" rel="noreferrer">
								<FacebookLogo />
							</a>
							<a href={MyInfo.github} target="_blank" rel="noreferrer">
								<GithubLogo />
							</a>
						</div>
					</div>
					<div className={style.userInfo}>
						<h2>{MyInfo.name}</h2>
						<a href={`mailto: ${MyInfo.email}`} target="_blank" rel="noreferrer">
							<Icon icon="mail" /> {MyInfo.email}
						</a>
						<a href={`tel: ${MyInfo.phone}`} target="_blank" rel="noreferrer">
							<Icon icon="phone" /> {MyInfo.phone}
						</a>
						<p>
							<Icon icon="map" /> {`${MyInfo.city}, ${MyInfo.state}, ${MyInfo.country}`}
						</p>
						<p>
							<Icon icon="translate" /> {MyInfo.languages}
						</p>
					</div>
				</div>
				<div className={style.content}>
					<div className={style.companies}>
						<h1>Biografia</h1>
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
						<h1>Empresas</h1>
						{MyInfo.companies
							.filter((x) => !x.hide)
							.sort((x, y) => {
								let xDate = DateUtils.stringToDate('01/' + x.yearRange.start)
								let yDate = DateUtils.stringToDate('01/' + y.yearRange.start)
								if (xDate.getTime() > yDate.getTime()) {
									return 1
								}
								if (xDate.getTime() < yDate.getTime()) {
									return -1
								}
								return 0
							})
							.map((c, index) => {
								let startDate = DateUtils.stringToDate('01/' + c.yearRange.start)
								let endDate = DateUtils.stringToDate('01/' + c.yearRange.end)

								let months = 0
								let years = 0
								while (startDate.getTime() < endDate.getTime()) {
									months++
									if (months === 12) {
										months = 0
										years++
									}
									startDate = DateUtils.dateAddMonth(startDate, 1)
								}

								let birthdayYear = `${years} anos`
								if (years === 0) {
									birthdayYear = ''
								}
								if (years === 1) {
									birthdayYear = '1 ano'
								}

								let birthdayMonth = `${months < 0 ? months * -1 : months} meses`
								if (months === 0) {
									birthdayMonth = ''
								}
								if (months === 1) {
									birthdayMonth = '1 mês'
								}

								let finalRange = `${birthdayYear} e ${birthdayMonth}`
								if (birthdayYear === '' && birthdayMonth !== '') {
									finalRange = `${birthdayMonth}`
								}
								if (birthdayYear !== '' && birthdayMonth === '') {
									finalRange = `${birthdayYear}`
								}
								if (birthdayYear === '' && birthdayMonth === '') {
									finalRange = '1 mês'
								}
								return (
									<section key={index} className={c.current ? style.current : ''}>
										<div className={style.companyInfo}>
											<h3>{c.company}</h3>
											<span>{`${c.yearRange.start} - ${
												c.current ? 'HOJE' : c.yearRange.end
											} (${finalRange})`}</span>
											<small>{c.location}</small>
										</div>
										<b>{c.job}</b>
										{c.description.map((x, i) => {
											return <p key={i}>{x}</p>
										})}
										<div className={style.companyHashtags}>
											{c.hashtag.split(' ').map((hash, index) => {
												return <i key={index}>{hash}</i>
											})}
										</div>
									</section>
								)
							})}
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
