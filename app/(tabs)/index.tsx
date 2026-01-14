import * as Haptics from "expo-haptics"
import PageWrapper from '@/components/layout/PageWrapper'
import AppText from '@/components/ui/AppText'
import clsx from 'clsx'
import { useFocusEffect, useRouter } from 'expo-router'
import { useCallback, useEffect, useState } from 'react'
import { Pressable, View } from 'react-native'

export default function Index() {
    const [pressed, setPressed] = useState(false)

    const router = useRouter()

    // Redirect to login page
    const direct = () => {
        setTimeout(() => {
            router.push('/login')
        }, 100)
    }

    // Fire when screen focused
    useFocusEffect(
        useCallback(() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        }, [])
    );

    return (
        <PageWrapper>
            <View className='h-full flex flex-col justify-center gap-[40px]'>
                <View className='flex flex-col gap-5'>
                    <AppText
                        text='Welcome to, Stride.'
                        size='text-xl'
                        className='font-semibold tracking-tighter leading-[40px]'
                    />

                    <AppText
                        text='Level up your life, track, reimagine, assess, and progress your way to success.'
                        size='text-base'
                        className='font-light'
                    />
                </View>

                <View className='w-full items-center'>
                    <Pressable
                        onPressIn={() => setPressed(true)}
                        onPressOut={() => setPressed(false)}
                        onPress={direct}
                        className={clsx(
                            `w-[150px] min-h-[40px] justify-center items-center rounded-[10px] ${
                                pressed ? 'bg-green-700' : 'bg-green-500'
                            }`
                        )}
                    >
                        <AppText
                            text='Get Started'
                            size='text-base'
                        />
                    </Pressable>
                </View>
            </View>
        </PageWrapper>
    )
}
