import { Pressable, StyleSheet, TextInput, View } from 'react-native'
import AppText from './ui/AppText'
import { useEffect, useState } from 'react'
import { clsx } from 'clsx'

type Props = {
    margin?: string
    success?: string
    error?: string
}

interface InputProps {
    label: string
    placeholder: string
    key: string
}

export default function Form({ margin, success, error }: Props) {
    const [formData, setFormData] = useState<Record<string, string>>({
        username: '',
        email: '',
        password: '',
    })
    const [isLoading, setIsLoading] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [pressed, setPressed] = useState(false)

    const inputs: InputProps[] = [
        { key: 'username', label: 'Username', placeholder: 'Enter username' },
        { key: 'email', label: 'Email', placeholder: 'Enter email' },
        { key: 'password', label: 'Password', placeholder: 'Enter password' },
    ]

    const handleChange = (key: string, value: string) => {
        setFormData((prev) => ({ ...prev, [key]: value }))
    }

    return (
        <View className={clsx(margin ? `my-[${margin}]` : 'my-[100px]')}>
            <View className='flex flex-col gap-5 rounded-[15px]'>
                {inputs.map((input) => (
                    <View
                        key={input.key}
                        style={styles.containers}
                    >
                        <AppText
                            text={input.label}
                            size='text-base'
                        />

                        <TextInput
                            placeholder={input.placeholder}
                            value={formData[input.key]}
                            onChangeText={(text) =>
                                handleChange(input.key, text)
                            }
                            className='text-[18px]'
                            style={styles.input}
                        />
                    </View>
                ))}

                <View className='mt-5 items-center'>
                    <Pressable
                        onPressIn={() => setPressed(true)}
                        onPressOut={() => setPressed(false)}
                        className={clsx(
                            `w-[150px] min-h-[40px] justify-center items-center rounded-[10px] ${
                                pressed ? 'bg-green-700' : 'bg-green-500'
                            }`
                        )}
                    >
                        <AppText
                            text={isLoading ? 'Loading...' : 'Login'}
                            size='text-base'
                        />
                    </Pressable>
                </View>

                {submitted && (
                    <AppText
                        text={success! || error!}
                        size='text-base'
                        colour={success ? 'green' : error ? 'red' : 'black'}
                    />
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containers: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
    },
    input: {
        paddingVertical: 6.25,
        paddingHorizontal: 12.5,
        backgroundColor: 'lightgray',
        borderRadius: 20,
    },
})
