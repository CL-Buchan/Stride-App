import { NativeTabs, Icon, Label } from 'expo-router/unstable-native-tabs';

export default function TabLayout() {
    return (
        <NativeTabs>
            <NativeTabs.Trigger
                name="index"
            >
                <Icon 
                    sf="house.fill" 
                    drawable="ic_home" 
                />
        
                <Label>Home</Label>
            </NativeTabs.Trigger>

            <NativeTabs.Trigger
                name="login"
            >
                <Icon 
                    sf="person" 
                    drawable="ic_menu_edit" 
                />

                <Label>Login</Label>
            </NativeTabs.Trigger>

            <NativeTabs.Trigger
                name="settings"
            >
                <Icon 
                    sf="slider.horizontal.3" 
                />

                <Label>Settings</Label>
            </NativeTabs.Trigger>
    </NativeTabs>
  );
}
