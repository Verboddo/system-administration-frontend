function Button({onClick, children, className, type, disabled}) {
    return(
        <button
            type={type}
            className={className}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button