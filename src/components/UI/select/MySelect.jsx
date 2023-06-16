const MySelect = ({ options, defaultValue, value, onChange, className }) => {
	return (
		<select
			value={value}
			className={className}
			onChange={event => onChange(event.target.value)}
		>
			<option value="default">{defaultValue}</option>
			{options.map(option =>
				<option
					key={option.value}
					value={option.value}
				>{option.name}</option>
			)}
		</select>
	)
}

export default MySelect