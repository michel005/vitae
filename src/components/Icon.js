const Icon = ({ icon, ...props }) => {
	return (
		<span {...props} className={`icon material-symbols-outlined  ${props.className}`}>
			{icon}
		</span>
	)
}

export default Icon
