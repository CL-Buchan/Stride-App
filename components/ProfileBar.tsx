import { Image, Pressable, View } from 'react-native'
import AppText from './ui/AppText'

type Props = {
    uri?: string
    direction?: 'column' | 'row'
}

const now = new Date().getHours()
const gretting =
    now < 12 ? 'Good morning' : now < 18 ? 'Good afternoon' : 'Good evening'

export default function ProfileBar({ uri, direction }: Props) {
    return (
        <View
            className='flex justify-start items-center gap-5'
            style={{
                flexDirection: direction ?? 'column',
            }}
        >
            {uri ? (
                <Image
                    style={{
                        height: 50,
                        width: 50,
                    }}
                />
            ) : (
                <View className='w-[60px] h-[60px] bg-[black]/20 rounded-full' />
            )}

            <View>
                <AppText
                    text={`${gretting}, Callam.`}
                    size='text-base'
                />
            </View>
        </View>
    )
}
