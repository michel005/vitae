import './Table.scss'
import { useMediaQuery } from 'react-responsive'

export default function Table({
	header = {},
	responsiveHeader = header,
	valueModifier = {},
	action = () => null,
	filterModifier = () => true,
	data,
}) {
	const isMobile = useMediaQuery({ query: '(max-width: 700px)' })

	const filteredContent = data.filter(filterModifier)

	function mouseEnterEvent(columnName, enter) {
		let values = document.getElementsByClassName('column_' + columnName)
		for (let x = 0; x < values.length; x++) {
			if (enter && !values.item(x).classList.contains('noHover')) {
				values.item(x).classList.add('hovered')
			} else {
				values.item(x).classList.remove('hovered')
			}
		}
	}

	return (
		<div className={'table'}>
			<div className={'header'}>
				{Object.keys(isMobile ? responsiveHeader : header).map((field) => {
					return (
						<div
							key={field}
							className={`column column_${field}`}
							onMouseOver={() => mouseEnterEvent(field, true)}
							onMouseOut={() => mouseEnterEvent(field, false)}
						>
							{(isMobile ? responsiveHeader : header)[field]}
						</div>
					)
				})}
			</div>
			<div className={'body'}>
				<div className={'rowsContainer'}>
					{filteredContent.map((row, index) => {
						return (
							<div key={index} className={'line'}>
								{Object.keys(isMobile ? responsiveHeader : header).map((field) => {
									return (
										<div
											key={field}
											className={`column column_${field} ${
												parseFloat(row[field]) < 0 ? 'negative' : ''
											}`}
											onDoubleClick={() => action(row, index)}
										>
											{valueModifier[field]
												? valueModifier[field](row[field], row, index)
												: row[field]}
										</div>
									)
								})}
							</div>
						)
					})}
					{filteredContent.length === 0 && (
						<div className={'line emptyTable'}>Nenhum registro encontrado</div>
					)}
				</div>
			</div>
		</div>
	)
}
