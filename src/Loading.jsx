import { useTranslation } from 'react-i18next';

export default function Loading() {
    const { t } = useTranslation();

    return (
        <div role="status" className="flex h-screen items-center justify-center zoom-scale-root">
            <span
                aria-hidden="true"
                className="w-[2.5em] h-[2.5em] rounded-full border-[0.25em] border-red-300/25 border-t-red-300 motion-safe:animate-spin"
            />
            <span className="sr-only">{t('loading.label')}</span>
        </div>
    );
}
