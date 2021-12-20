function DeleteButton({onClick, children, className, type}) {
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

export default DeleteButton