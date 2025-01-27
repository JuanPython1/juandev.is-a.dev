import { IoLanguageOutline } from "react-icons/io5";
import './buttonlanguage.css';

export default function ButtonLanguage() {
    return (
        <button className="relative group">
            <IoLanguageOutline className="text-[#c04b4b] dark:text-[#622f2f] dark:hover:text-red-400 hover:text-red-300" size={20} />
            <span className="absolute z-20 bottom-0 left-1/2 transform -translate-x-1/2 mb-6 hidden group-hover:block bg-zinc-700 text-[#ffebcd] font_tooltip text-xs rounded py-1 px-2 transition-all opacity-0 group-hover:opacity-100 group-hover:mb-8 hover: w-28 animate-tooltip">
                Coming Soon...
            </span>
        </button>
    );
}
