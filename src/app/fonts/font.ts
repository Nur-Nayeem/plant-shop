import localFont from 'next/font/local'

export const gilroy = localFont({
    src: [
        { path: './gilroy/Gilroy-Regular.ttf', weight: '400' },
        { path: './gilroy/Gilroy-Medium.ttf', weight: '500' },
        { path: './gilroy/Gilroy-SemiBold.ttf', weight: '600' },
        { path: './gilroy/Gilroy-Bold.ttf', weight: '700' },
    ],
    variable: '--font-gilroy',
    display: 'swap',
})

export const fredoka_one = localFont({
    src: [{ path: './Fredoka_One1/FredokaOne-Regular.ttf', weight: '400' }],
    variable: '--font-fredoka',
    display: 'swap',
})