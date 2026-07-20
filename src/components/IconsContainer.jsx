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
            className="flex w-12 h-12 border border-zinc-700 rounded-full justify-center items-center"
            onMouseEnter={handleMouseEnter}
        >
            <img
                src={url}
                alt={alt}
                className={cn('w-7 h-7 transform', isAnimating && 'animate-jump')}
            />
        </div>
    );
}
