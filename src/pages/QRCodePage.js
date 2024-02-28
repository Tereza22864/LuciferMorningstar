import React, { useState } from 'react';
import './QRCodePage.css';

const QRCodePage = () => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const qrCodeURL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputText}`;

  return (
    <div className="container">
      <div className="input-section">
        <h1>Vložte URL nebo text</h1>
        <input
          type="text"
          placeholder="Vaši URL nebo text"
          value={inputText}
          onChange={handleInputChange}
        />
        <button onClick={() => setInputText(inputText)}>Generovat QR kód!</button>
      </div>
      <div className="qr-section">
        <h1>Váš QR kód</h1>
        {inputText && <img src={qrCodeURL} alt="QR Code" />}
      </div>
    </div>
  );
};

export default QRCodePage;


