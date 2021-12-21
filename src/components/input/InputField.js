const InputField = ({className, htmlFor, children, type, placeholder, registerName, register, required, errors, id, pattern, patternMessage}) => {
    return(
        <label
        className={className}
        htmlFor={htmlFor}>
            {children}
            <input
                type={type}
                placeholder={placeholder}
                {...register(registerName, {
                    required: required,
                    pattern: {
                        value: pattern,
                        message: patternMessage,
                    }
                })}
            />
            {errors[id] && <p>{errors[id].message}</p>}
        </label>
    )
}

export default InputField