const InputField = ({className, htmlFor, children, type, placeholder, registerName, register, required}) => {
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
                })}
            />
        </label>
    )
}

export default InputField