import './ProgressIndicator.scss'

export default function ProgressIndicator({ label, value, maximum = 1, percent = false }) {
	return (
		<div
			className={
				'progressIndicator progress' +
				(value < 0.0
					? 'negative'
					: parseInt(value) >= maximum
					? parseInt(value) === 0
						? ' noData'
						: ''
					: '')
			}
		>
			{!!label && <div className={'label'}>{label}</div>}
			<div className={'background'}></div>
			<div className={'progresso'} style={{ maxWidth: `${(value * 100) / maximum}%` }}></div>
			<div className={'value'}></div>
		</div>
	)
}
