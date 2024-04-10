export type HeroProps = {
    colorDeep: string,
    mobileDropdownOpen: boolean,
    text: string,
    shadow: string,
    mobileShadow: string,
    tagline: string,
    setDropdownOpen: (value: React.SetStateAction<boolean>) => void,
    img: string,
}

export type headerDataType = {
    id: number,
    colorDeep: string
    colorLight: string
    tagline: string
    text: string,
    shadow: string,
    mobileShadow: string
    img: string,
}