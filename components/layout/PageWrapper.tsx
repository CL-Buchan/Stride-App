import { ReactNode } from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

type Props = {
    children: ReactNode
    backgroundColour?: string
}

export default function PageWrapper({ children, backgroundColour }: Props) {
    return (
        <SafeAreaView
            style={{
                backgroundColor: backgroundColour,
            }}
        >
            <View
                style={{
                    paddingVertical: 50,
                    paddingHorizontal: 50,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: backgroundColour,
                }}
            >
                {children}
            </View>
        </SafeAreaView>
    )
}
