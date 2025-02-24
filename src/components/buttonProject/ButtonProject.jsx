

const ButtonProject = ({ children }) => {
    return (
        <button className="flex justify-center items-center w-[40px] h-[40px] rounded-lg bg-[#c04b4b] hover:bg-red-400 dark:bg-red-300 dark:hover:bg-red-400">
            {children}
        </button>
    )
}

export default ButtonProject
