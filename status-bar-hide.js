import { ImageBackground, StyleSheet, Text, View, Dimensions, StatusBar } from 'react-native'; // Import StatusBar from react-native

// ... Rest of your imports and code ...

export default function Login({ navigation }) {
    const [eyeToggle, setEyeToggle] = useState(true);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    // Hide the status bar
    StatusBar.setHidden(true);

    // Rest of your component code...
}
