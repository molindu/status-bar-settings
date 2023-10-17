import { useEffect, useState } from 'react';
import { StatusBar, StatusBarManager } from 'react-native';

function YourComponent() {
  const [statusBarHeight, setStatusBarHeight] = useState(0);

  useEffect(() => {
    StatusBarManager.getHeight((statusBarHeight) => {
      setStatusBarHeight(statusBarHeight.height);
    });
  }, []);

  return (
    // Your component code
  );
}
