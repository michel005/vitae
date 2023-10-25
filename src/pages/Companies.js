import Icon from '../components/Icon'
import MyInfo from '../assets/MyInfo'
import DateUtils from '../utils/DateUtils'
import { useState } from 'react'

const Companies = () => {
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
		<div className={'companies'}>
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
						<section key={index} className={c.current ? 'current' : ''}>
							<div data-info>
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
									return <i key={index}>{hash}</i>
								})}
							</div>
						</section>
					)
				})}
		</div>
	)
}

export default Companies
