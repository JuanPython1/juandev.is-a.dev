import '@components/cssComponents/iconsContainerCss.css';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function IconsContainer(props) {
    const { url, alt } = props;
    const [isAnimating, setIsAnimating] = useState(false);

    const handleMouseEnter = () => {
        setIsAnimating(true);

        setTimeout(() => {
            setIsAnimating(false);
        }, 1100);
    };

    return (
        <div
            className="flex w-[3em] h-[3em] border-[0.0625em] border-zinc-700 rounded-full justify-center items-center"
            onMouseEnter={handleMouseEnter}
        >
            <img
                src={url}
                alt={alt}
                className={cn('w-[1.75em] h-[1.75em] transform', isAnimating && 'animate-jump')}
            />
        </div>
    );
}
