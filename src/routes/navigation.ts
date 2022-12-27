export interface Navigation {
    name: string;
    href: string;
}

export const navigation: Navigation[] = [
    { name: 'Anasayfa', href: '/'},
    { name: 'Takımlar', href: '/teams'},
    { name: 'Futbolcular', href: '/players'},
    { name: 'Stadyumlar', href: '/stadiums'},
    { name: 'Örnek Componentler', href: '/sample'}
];