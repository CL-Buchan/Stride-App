import { Pressable, View } from "react-native";
import AppText from "./AppText";

interface ButtonProps {
    onPress: () => void
}

export default function Button({ onPress }: ButtonProps) {
    return(
        <View className='mt-5 items-center'>
            <Pressable
                onPress={onPress}
            >
                <AppText 
                    text='Signout'
                    size='text-base'
                />
            </Pressable>
        </View>
    );
}