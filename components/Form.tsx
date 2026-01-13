import { Pressable, StyleSheet, TextInput, View } from 'react-native'
import AppText from './ui/AppText'
import { useEffect, useState } from 'react'

interface InputProps {
    label: string
    placeholder: string
    key: string
}

export default function Form() {
    const [formData, setFormData] = useState<Record<string, string>>({
        username: '',
        email: '',
        password: '',
    })
    const [isLoading, setIsLoading] = useState(false)

    const inputs: InputProps[] = [
        { key: 'username', label: 'Username', placeholder: 'Enter username' },
        { key: 'email', label: 'Email', placeholder: 'Enter email' },
        { key: 'password', label: 'Password', placeholder: 'Enter password' },
    ]

    const handleChange = (key: string, value: string) => {
        setFormData((prev) => ({ ...prev, [key]: value }))
    }

    return (
        <View>
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

                <Pressable>
                    <AppText
                        text={isLoading ? 'Loading...' : 'Login'}
                        size='text-base'
                    />
                </Pressable>
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
