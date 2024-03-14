// App.js
import React from 'react';
import Main from './src/components/Main';
import { MyProvider } from './src/components/hook/useContext-Request';
export default function App() {
  return (
    <MyProvider>
    <Main/>
    </MyProvider>
  );
}