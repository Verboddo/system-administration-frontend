function Button({onClick, children, className, type}) {
    return(
        <button
            type={type}
            className={className}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button