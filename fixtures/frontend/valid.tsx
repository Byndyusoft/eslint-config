import type { FC } from 'react';

export const Button: FC<{ label: string }> = ({ label }) => {
    return <button type="button">{label}</button>;
};
