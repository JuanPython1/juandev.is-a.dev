import IconsContainer from "@/components/IconsContainer";
import trayectoriaData from "@data/Trajectory.json";
import '@pages/start/styles/Trayectory.css';

export default function Trajectory() {
    const events = trayectoriaData.events;

    return (
        <div className="relative flex flex-col items-center w-full ">
            {/* Línea de tiempo central */}
            <div className="absolute left-1/2 w-0.5 h-full bg-zinc-500 dark:bg-[#d95a5a] transform -translate-x-1/2"></div>

            {/* Punto en la línea de tiempo */}
            <div className="triangle animation"></div>

            {events.map((event, index) => (
                <div key={index} className={`relative flex  md:w-3/4 py-5 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>


                    {/* Tarjeta de evento */}
                    <div
                        className="flex flex-col gap-2  h-32 bg-zinc-800 dark:bg-[#c04b4b]  transition-colors duration-500 justify-center items-center my-3 md:my-5 p-3 w-[250px] min-h-[250px] min-w-[250px]"
                    >
                        <div className="flex h-1/2 items-center">
                            <p className="font_juan_text_trajectory">{event.description}</p>
                        </div>
                        <div className="flex flex-col h-1/2 items-center gap-2">
                            <p className="font_juan_framework_trajectory">{event.toolTitle}</p>
                            <div className="flex flex-row gap-1 w-full justify-center items-center">
                                {Object.keys(event.framework).map((key) => (
                                    <IconsContainer
                                        key={key}
                                        url={event.framework[key].icon}
                                        alt={event.framework[key].alt}
                                    />
                                ))}
                            </div>

                            <h1 className="text-2xl font_juan_tittle_trajectory">{event.year}</h1>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
