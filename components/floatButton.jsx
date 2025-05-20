'use client';

import React, { useState } from 'react';

const contactOptions = [
  {
    label: 'Gọi ngay',
    icon: <img src="/phone.svg" alt="Gọi ngay" />,
    onClick: () => window.open('tel:123456789'),
  },
  {
    label: 'Wechat',
    icon: <img src="/wechat.svg" alt="Wechat" />,
    onClick: () => window.open('https://m.me/yourpage'),
  },
  {
    label: 'Email',
    icon: <img src="/telegram.svg" alt="Telegram" />,
    onClick: () => window.open('https://t.me/Star21368?start=hello!'),
  },
  {
    label: 'KakaoTalk',
    icon: <img src="/kakaotalk.svg" alt="KakaoTalk" />,
    onClick: () => window.open('https://m.me/yourpage'),
  },
];

const optionStyle = (index, open) => ({
  position: 'fixed',
  bottom: `${24 + (open ? (index + 1) * 64 : 0)}px`,
  right: '24px',
  zIndex: 999,
  opacity: open ? 1 : 0,
  pointerEvents: open ? 'auto' : 'none',
  transition: 'bottom 0.3s, opacity 0.3s',
  border: 'none',
  borderRadius: '50%',
  width: '48px',
  height: '48px',
  background: '#fff',
  color: '#1976d2',
  fontSize: '22px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const FloatButton = () => {
  const [open, setOpen] = useState(false);

  const buttonStyle = {
    animation: open ? 'bounce 1s infinite' : 'none',
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    zIndex: 1000,
    border: 'none',
    borderRadius: '50%',
    width: '56px',
    height: '56px',
    background: '#1976d2',
    color: '#fff',
    fontSize: '28px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
    cursor: 'pointer',
    transition: 'background 0.2s',
  };

  return (
    <>
      {contactOptions.map((option, idx) => (
        <button
          key={option.label}
          style={optionStyle(idx, open)}
          title={option.label}
          onClick={option.onClick}
          type="button"
        >
          {option.icon}
        </button>
      ))}
      <button
        style={buttonStyle}
        onClick={() => setOpen((o) => !o)}
        aria-label="Contact Us"
        type="button"
      >
        {open ? '×' : '✆'}
      </button>
    </>
  );
};

export default FloatButton;
