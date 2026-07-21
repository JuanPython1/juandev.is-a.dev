import { useTranslation } from "react-i18next";
import IconsContainer from "@/components/IconsContainer";
import { cn } from '@/lib/utils';
import trayectoriaData from "@data/Trajectory.json";
import '@pages/start/styles/Trayectory.css';

export default function Trajectory() {
    const { t } = useTranslation();
    const events = trayectoriaData.events;

    return (
        <div className="relative flex flex-col items-center w-full ">
            {/* Línea de tiempo central */}
            <div className="absolute left-1/2 w-0.5 h-full bg-zinc-500 dark:bg-brick-light transform -translate-x-1/2"></div>

            {/* Punto en la línea de tiempo */}
            <div className="triangle animation"></div>

            {events.map((event, index) => (
                <div key={index} className={cn('relative flex md:w-3/4 py-5', index % 2 === 0 ? 'justify-start' : 'justify-end')}>


                    {/* Tarjeta de evento */}
                    <div
                        className="flex flex-col gap-2 surface-panel bg-dot-grid justify-center items-center my-3 md:my-5 p-3 w-[250px] h-[250px] min-h-[250px] min-w-[250px]"
                    >
                        <h1 className="text-2xl font_juan_tittle_trajectory">{event.year}</h1>
                        <div className="flex h-1/2 items-center">
                            <p className="font_juan_text_trajectory">{t(`trajectory.${event.year}.description`)}</p>
                        </div>
                        <div className="flex flex-col h-1/2 items-center gap-2">
                            <p className="font_juan_framework_trajectory">{t(`trajectory.${event.year}.toolTitle`)}</p>
                            <div className="flex flex-row gap-2 w-full justify-center items-center">
                                {Object.keys(event.framework).map((key) => (
                                    <IconsContainer
                                        key={key}
                                        url={event.framework[key].icon}
                                        alt={event.framework[key].alt}
                                    />
                                ))}
                            </div>


                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
