import Icon from '../components/Icon'
import MyInfo from '../assets/MyInfo'
import DateUtils from '../utils/DateUtils'
import { useState } from 'react'

const Companies = () => {
	const [hashtagFilter, setHashtagFilter] = useState([])

	let allHashtags = []
	MyInfo.companies.forEach((x) => {
		x.hashtag.split(' ').forEach((hash) => {
			const label = hash.replaceAll('#', '').toUpperCase()
			if (allHashtags.indexOf(label) === -1) {
				allHashtags.push(label)
			}
		})
	})

	return (
		<>
			<div className={'companies'}>
				<div className={'hashtagFilter'}>
					{allHashtags
						.filter((x) => hashtagFilter.indexOf(x) === -1)
						.sort()
						.map((x, i) => {
							return (
								<div
									key={i}
									className={'label'}
									onClick={() => {
										setHashtagFilter((hf) => {
											if (hf.indexOf(x) === -1) {
												hf.push(x)
											}
											return [...hf]
										})
									}}
								>
									{x}
								</div>
							)
						})}
				</div>
				{hashtagFilter.length > 0 && (
					<>
						<h5>Filtros</h5>
						<div className={'hashtagFilter filter'}>
							{hashtagFilter.map((x, i) => {
								return (
									<div key={i} className={'label'}>
										{x}{' '}
										<Icon
											onClick={() => {
												setHashtagFilter((hf) => {
													if (hf.indexOf(x) !== -1) {
														hf.splice(hf.indexOf(x), 1)
													}
													return [...hf]
												})
											}}
											icon={'close'}
										/>
									</div>
								)
							})}
						</div>
					</>
				)}
				{MyInfo.companies
					.filter((x) => !x.hide)
					.sort((x, y) => {
						let xDate = DateUtils.stringToDate('01/' + x.yearRange.start)
						let yDate = DateUtils.stringToDate('01/' + y.yearRange.start)
						if (xDate.getTime() > yDate.getTime()) {
							return -1
						}
						if (xDate.getTime() < yDate.getTime()) {
							return 1
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
							console.log(months)
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
							<div key={index} className={`section ${c.current ? 'current' : ''}`}>
								<div>
									<h3>{c.company}</h3>
									<small>{c.location}</small>
									<span>{`${c.yearRange.start} - ${c.yearRange.end} (${finalRange})`}</span>
								</div>
								<b>{c.job}</b>
								{c.description.map((x, i) => {
									return <p key={i}>{x}</p>
								})}
								<div className={'hashtags'}>
									{c.hashtag.split(' ').map((hash, index) => {
										return (
											<i
												key={index}
												className={
													hashtagFilter.indexOf(hash.toUpperCase().replaceAll('#', '')) !== -1
														? 'exists'
														: ''
												}
											>
												{hash}
											</i>
										)
									})}
								</div>
							</div>
						)
					})}
			</div>
		</>
	)
}

export default Companies
