export default function Tooltip3D({ label }) {
    return (
        <div className="tooltip absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full opacity-0 rotateX-90 group-hover:opacity-100 group-hover:rotateX-0 transition-all duration-500 pointer-events-none">
            <div className="bg-black text-white px-[1em] py-[0.5em] rounded-[0.5em] tooltip-shadow font_text_faces_cube">
                {label}
            </div>
        </div>
    );
}
