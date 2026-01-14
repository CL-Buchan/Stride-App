import PageWrapper from '@/components/layout/PageWrapper'
import ProfileBar from '@/components/ProfileBar'
import AppText from '@/components/ui/AppText'
import { useFocusEffect } from 'expo-router';
import { useCallback } from 'react';
import * as Haptics from "expo-haptics"
import { View } from 'react-native'

export default function Settings() {
    // Fire when screen focused
    useFocusEffect(
        useCallback(() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        }, [])
    );

    return (
        <PageWrapper>
            <View className='flex flex-col gap-[30px]'>
                <View>
                    <AppText
                        text='Settings'
                        size='text-lg'
                    />
                </View>

                <View>
                    <ProfileBar />
                </View>
            </View>
        </PageWrapper>
    )
}
