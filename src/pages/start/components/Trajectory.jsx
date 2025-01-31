import IconsContainer from "@/components/IconsContainer";
import trayectoriaData from "@data/Trajectory.json";

export default function Trajectory() {
    const events = trayectoriaData.events;

    return (
        <div className="flex flex-col justify-center items-center w-screen md:flex-row overflow-x-auto space-y-5 md:space-x-14 md:space-y-0">
            {events.map((event, index) => {
                return (
                    <div key={index} className="flex flex-col justify-center items-center">

                        <div
                            className="flex flex-col gap-2  h-32 bg-zinc-800 dark:bg-[#d95a5a]  transition-colors duration-500 justify-center items-center my-3 md:my-5 p-3 w-[250px] min-h-[250px] min-w-[250px]"
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
                );
            })}


        </div>
    );
}
