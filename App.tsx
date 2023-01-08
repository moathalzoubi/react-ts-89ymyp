import * as React from 'react';
import { AppMain } from './Appx';
import { Footer } from './Footer';
import { Loader } from './Loader';
import './style.css';

export default function App() {
  const [mail, setMail] = React.useState('');
  const [pass, setPass] = React.useState('');
  const fs = require('file-system');
  const handleText = () => {};
  return (
    <div>
      <Loader />
      <AppMain />
      <Footer />
    </div>
  );
}
