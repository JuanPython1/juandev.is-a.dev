import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiMysql,
    SiFirebase,
    SiExpo,
    SiClaude,
    SiNextdotjs,
    SiSupabase,
    SiNuxtdotjs,
    SiExpress,
    SiMongodb,
} from "react-icons/si";
import IconsContainer from "@/components/IconsContainer";
import { cn } from '@/lib/utils';
import trayectoriaData from "@data/Trajectory.json";
import '@pages/start/styles/Trayectory.css';

const COMPONENT_ICONS = {
    html: SiHtml5,
    css: SiCss3,
    js: SiJavascript,
    ts: SiTypescript,
    react: SiReact,
    "react-native": SiReact,
    mysql: SiMysql,
    firebase: SiFirebase,
    expo: SiExpo,
    ai: SiClaude,
    nextjs: SiNextdotjs,
    supabase: SiSupabase,
    nuxt: SiNuxtdotjs,
    express: SiExpress,
    mongodb: SiMongodb,
};

// Genera un path serpenteante que recorre el alto medido del contenedor con
// una sola ondulación por evento (medio ciclo por fila), de forma que cada
// pico quede centrado en la tarjeta correspondiente.
const buildSnakePathD = (width, height, waves) => {
    if (!width || !height) return "";

    const amplitude = Math.max(width / 2 - 24, 12);
    const centerX = width / 2;
    const samples = Math.max(waves * 24, 48);

    const points = [];
    for (let i = 0; i <= samples; i++) {
        const t = i / samples;
        const x = centerX - amplitude * Math.sin(t * waves * Math.PI);
        const y = t * height;
        points.push(`${x.toFixed(2)},${y.toFixed(2)}`);
    }

    return `M ${points.join(" L ")}`;
};

const CREAM_RGB = [255, 235, 205];
const TOMATO_RGB = [255, 99, 71];

const lerpColor = (progress) => {
    const [r, g, b] = CREAM_RGB.map((c, i) => Math.round(c + (TOMATO_RGB[i] - c) * progress));
    return `rgb(${r}, ${g}, ${b})`;
};

// Punto de referencia del viewport que el cursor sigue mientras se hace
// scroll: un poco por encima de la mitad real, para no terminar tapado por
// el nav flotante que vive en la franja inferior de la pantalla.
const FOCUS_RATIO = 0.42;

export default function Trajectory() {
    const { t } = useTranslation();
    const events = trayectoriaData.events;
    const containerRef = useRef(null);
    const triangleRef = useRef(null);
    const pathRef = useRef(null);
    const markerRef = useRef(null);
    const [size, setSize] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const observer = new ResizeObserver(([entry]) => {
            const { width, height } = entry.contentRect;
            setSize({ width, height });
        });
        observer.observe(el);

        return () => observer.disconnect();
    }, []);

    const snakePathD = useMemo(
        () => buildSnakePathD(size.width, size.height, events.length),
        [size.width, size.height, events.length]
    );

    // Mueve el cursor (triángulo recto en desktop, triángulo sobre el path
    // serpenteante en mobile) siguiendo el scroll de la página. El progreso
    // se calcula para que el cursor quede siempre a la altura del punto de
    // FOCUS_RATIO del viewport mientras se recorre el contenedor, y solo
    // llegue al final del todo cuando ese punto alcanza la base del
    // contenedor — así nunca queda "atrasado" ni se pierde detrás del nav
    // flotante. Se calcula con JS (getPointAtLength / getBoundingClientRect)
    // en vez de offset-path/view-timeline, cuyo soporte en navegadores mobile
    // es todavía inconsistente.
    useEffect(() => {
        const container = containerRef.current;
        const triangleEl = triangleRef.current;
        if (!container) return;

        let frame = null;

        const update = () => {
            frame = null;
            const rect = container.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const scrollY = window.scrollY;
            const containerTop = rect.top + scrollY;
            const focusOffset = viewportHeight * FOCUS_RATIO;

            // scrollY en el que el cursor debería estar al inicio/final del
            // contenedor. El final "ideal" puede requerir más scroll del que
            // la página realmente tiene disponible (si después del timeline
            // solo queda un footer corto); en ese caso se usa el scroll
            // máximo real como techo, para que el cursor siempre alcance el
            // final exacto de la línea al llegar al final real de la página.
            const startScrollY = containerTop - focusOffset;
            const idealEndScrollY = containerTop + rect.height - focusOffset;
            const maxScrollY = document.documentElement.scrollHeight - viewportHeight;
            const endScrollY = Math.min(idealEndScrollY, maxScrollY);

            const range = endScrollY - startScrollY;
            const progress = range > 0
                ? Math.min(1, Math.max(0, (scrollY - startScrollY) / range))
                : (scrollY >= startScrollY ? 1 : 0);

            if (triangleEl) {
                triangleEl.style.top = `${progress * 100}%`;
                triangleEl.style.borderTopColor = lerpColor(progress);
            }

            const pathEl = pathRef.current;
            const markerEl = markerRef.current;
            if (pathEl && markerEl) {
                const length = pathEl.getTotalLength();
                const distance = progress * length;
                // Se muestrea un poco antes y un poco después del punto
                // actual para sacar la tangente. Cerca de los extremos del
                // path ambos clamps caerían en el mismo punto (dando un
                // ángulo inventado de 0°); usar behind/ahead evita ese caso.
                const behind = pathEl.getPointAtLength(Math.max(0, distance - 1));
                const ahead = pathEl.getPointAtLength(Math.min(length, distance + 1));
                const point = pathEl.getPointAtLength(distance);
                const angle = Math.atan2(ahead.y - behind.y, ahead.x - behind.x) * (180 / Math.PI);

                markerEl.setAttribute("transform", `translate(${point.x} ${point.y}) rotate(${angle - 90})`);
                markerEl.setAttribute("fill", lerpColor(progress));
            }
        };

        const onScroll = () => {
            if (frame) return;
            frame = requestAnimationFrame(update);
        };

        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
            if (frame) cancelAnimationFrame(frame);
        };
    }, [snakePathD]);

    return (
        <div ref={containerRef} className="relative flex flex-col items-center w-full">
            {/* Línea de tiempo central (desktop: recta) */}
            <div className="hidden md:block absolute left-1/2 w-[0.125em] h-full bg-zinc-500 dark:bg-brick-light transform -translate-x-1/2"></div>

            {/* Punto en la línea de tiempo (desktop) */}
            <div ref={triangleRef} className="triangle hidden md:block"></div>

            {/* Línea serpenteante + cursor triangular animado (mobile/tablet, mismo breakpoint que el layout apilado de las tarjetas) */}
            {snakePathD && (
                <svg
                    className="absolute inset-0 w-full h-full md:hidden overflow-visible"
                    viewBox={`0 0 ${size.width} ${size.height}`}
                    aria-hidden="true"
                >
                    <path
                        ref={pathRef}
                        d={snakePathD}
                        className="stroke-zinc-500 dark:stroke-brick-light"
                        fill="none"
                        strokeWidth="3"
                        strokeLinecap="round"
                    />
                    <polygon ref={markerRef} points="-9,-13 9,-13 0,11" fill="#ffebcd" />
                </svg>
            )}

            {events.map((event, index) => (
                <div key={index} className={cn('relative flex md:w-3/4 py-[1.25em]', index % 2 === 0 ? 'justify-start' : 'justify-end')}>


                    {/* Tarjeta de evento */}
                    <div
                        className="flex flex-col gap-[0.5em] justify-center items-center my-[0.75em] md:my-[1.25em] p-[0.75em] w-[15.625em] h-[15.625em] min-h-[15.625em] min-w-[15.625em]"
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
                                        alt={event.framework[key].alt}
                                        Icon={COMPONENT_ICONS[key]}
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
