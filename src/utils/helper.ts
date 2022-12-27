import { Navigation, navigation } from '../routes/navigation';

export const isCurrentPath = (href: string, currentPath: string): boolean => {
    return href === currentPath || href === currentPath.slice(0, -1);
}

export const getCurrentNavData = (currentPath: string): Navigation => {
    return navigation.find((nav) => isCurrentPath(nav.href, currentPath)) as Navigation;
}