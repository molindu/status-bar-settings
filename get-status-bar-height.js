// import { useEffect, useState } from 'react';
// import { StatusBar, StatusBarManager } from 'react-native';

// function YourComponent() {
//   const [statusBarHeight, setStatusBarHeight] = useState(0);

//   useEffect(() => {
//     StatusBarManager.getHeight((statusBarHeight) => {
//       setStatusBarHeight(statusBarHeight.height);
//     });
//   }, []);

//   return (
//     // Your component code
//   );
// }
import { StatusBar } from 'react-native';

// Get the status bar height
const statusBarHeight = StatusBar.currentHeight;

console.log("Status Bar Height:", statusBarHeight);

