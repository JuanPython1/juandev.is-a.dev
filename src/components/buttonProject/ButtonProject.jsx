

const ButtonProject = ({ children, url }) => {
    return (
        <a href={url} target="_blank" 
        rel="noopener noreferrer"  className="flex justify-center items-center w-[30px] h-[30px] rounded-lg bg-[#c04b4b] hover:bg-red-400 dark:bg-red-300 dark:hover:bg-red-400" >
            {children}
        </a>
    )
}

export default ButtonProject
