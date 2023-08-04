const Icon = ({ icon, ...props }) => {
	return (
		<span {...props} className="icon material-symbols-outlined">
			{icon}
		</span>
	)
}

export default Icon
