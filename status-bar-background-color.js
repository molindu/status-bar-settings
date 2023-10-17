import { ImageBackground, StyleSheet, Text, View, Dimensions, StatusBar } from 'react-native'; // Import StatusBar from react-native

// ... Rest of your imports and code ...

export default function Login({ navigation }) {
    const [eyeToggle, setEyeToggle] = useState(true);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    // Set the status bar background color
    StatusBar.setBackgroundColor('blue'); // You can replace 'blue' with any color of your choice

    // Rest of your component code...
}
