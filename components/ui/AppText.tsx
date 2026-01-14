import clsx from 'clsx'
import { Text, View } from 'react-native'

type Props = {
    text: string
    size?: FontSizeKeys
    colour?: string
    isLightText?: boolean
    className?: string
}

const fontSizes = {
    'text-xs': 10,
    'text-sm': 12.5,
    'text-base': 20,
    'text-md': 30,
    'text-lg': 32.5,
    'text-xl': 40,
} as const

type FontSizeKeys = keyof typeof fontSizes

export default function AppText({
    text,
    size,
    colour,
    isLightText,
    className,
}: Props) {
    return (
        <>
            <Text
                className={clsx(className)}
                style={{
                    fontSize: size ? fontSizes[size] : 12.5,
                    color: isLightText
                        ? colour
                            ? `text-[${colour}/50]`
                            : 'text-[black]/50'
                        : (colour ?? 'text-[black]'),
                }}
            >
                {text}
            </Text>
        </>
    )
}
