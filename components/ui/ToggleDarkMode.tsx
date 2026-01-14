import clsx from 'clsx'
import { useState, useRef, useEffect } from 'react'
import { Pressable, View, Animated, Image } from 'react-native'

export default function ToggleDarkMode() {
    const [toggle, setToggle] = useState(false)
    const animation = useRef(new Animated.Value(0)).current

    // Animate when toggle changes
    useEffect(() => {
        Animated.timing(animation, {
            toValue: toggle ? 1 : 0,
            duration: 250,
            useNativeDriver: true,
        }).start()
    }, [toggle])

    const translateX = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 40],
    })

    const rotate = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    })

    return (
        <View className='w-full items-center'>
            <View className='w-[100px] h-[40px] border rounded-full overflow-hidden justify-center'>
                <Pressable onPress={() => setToggle(!toggle)}>
                    <Animated.View
                        style={{
                            width: 60,
                            height: 40,
                            borderRadius: 9999,
                            backgroundColor: toggle ? '#ffd900' : 'black',
                            transform: [{ translateX }],
                        }}
                        className='justify-center items-center'
                    >
                        <Animated.Image
                            source={
                                toggle
                                    ? require('../../assets/images/sun-icon.png')
                                    : require('../../assets/images/moon-icon.png')
                            }
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: toggle ? 'black' : 'white',
                                transform: [{ rotate }],
                            }}
                        />
                    </Animated.View>
                </Pressable>
            </View>
        </View>
    )
}
