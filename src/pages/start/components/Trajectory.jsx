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
            <div className="absolute left-1/2 w-[0.125em] h-full bg-zinc-500 dark:bg-brick-light transform -translate-x-1/2"></div>

            {/* Punto en la línea de tiempo */}
            <div className="triangle animation"></div>

            {events.map((event, index) => (
                <div key={index} className={cn('relative flex md:w-3/4 py-[1.25em]', index % 2 === 0 ? 'justify-start' : 'justify-end')}>


                    {/* Tarjeta de evento */}
                    <div
                        className="flex flex-col gap-[0.5em] surface-panel bg-dot-grid justify-center items-center my-[0.75em] md:my-[1.25em] p-[0.75em] w-[15.625em] h-[15.625em] min-h-[15.625em] min-w-[15.625em]"
                    >
                        <h1 className="font_juan_tittle_trajectory">{event.year}</h1>
                        <div className="flex h-1/2 items-center">
                            <p className="font_juan_text_trajectory">{t(`trajectory.${event.year}.description`)}</p>
                        </div>
                        <div className="flex flex-col h-1/2 items-center gap-[0.5em]">
                            <p className="font_juan_framework_trajectory">{t(`trajectory.${event.year}.toolTitle`)}</p>
                            <div className="flex flex-row gap-[0.5em] w-full justify-center items-center">
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
