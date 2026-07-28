

const ButtonProject = ({ children, url }) => {
    return (
        <a href={url} target="_blank" 
        rel="noopener noreferrer"  className="flex justify-center items-center w-[1.875em] h-[1.875em] rounded-[0.5em] bg-brick hover:bg-red-400 dark:bg-red-300 dark:hover:bg-red-400" >
            {children}
        </a>
    )
}

export default ButtonProject
