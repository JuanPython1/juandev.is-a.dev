import { useTranslation } from "react-i18next";
import { IoLockClosed } from "react-icons/io5";

const ButtonProject = ({ children, url }) => {
    const { t } = useTranslation();
    const isPrivate = url === "private";

    if (isPrivate) {
        return (
            <div className="relative group">
                <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    aria-label={t("projects.private")}
                    className="flex justify-center items-center w-[1.875em] h-[1.875em] rounded-[0.5em] bg-brick/50 dark:bg-red-300/50 opacity-60 cursor-not-allowed"
                >
                    {children}
                </button>
                <span className="pointer-events-none absolute -top-[0.25em] -right-[0.25em] flex items-center justify-center w-[0.875em] h-[0.875em] rounded-full bg-red-500 dark:bg-red-400 text-white">
                    <IoLockClosed size="0.5em" />
                </span>
                <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-[0.375em] whitespace-nowrap rounded-[0.375em] bg-brick dark:bg-red-300 px-[0.5em] py-[0.25em] text-[0.75em] text-white opacity-0 scale-95 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100">
                    {t("projects.private")}
                </span>
            </div>
        );
    }

    return (
        <a href={url} target="_blank"
        rel="noopener noreferrer"  className="flex justify-center items-center w-[1.875em] h-[1.875em] rounded-[0.5em] bg-brick hover:bg-red-400 dark:bg-red-300 dark:hover:bg-red-400" >
            {children}
        </a>
    )
}

export default ButtonProject
