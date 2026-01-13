import Form from '@/components/Form'
import PageWrapper from '@/components/layout/PageWrapper'
import AppText from '@/components/ui/AppText'
import { View } from 'react-native'

export default function Login() {
    return (
        <PageWrapper>
            <View className='flex flex-col gap-[30px]'>
                <AppText
                    text='Login'
                    size='text-lg'
                />

                <Form />
            </View>
        </PageWrapper>
    )
}
