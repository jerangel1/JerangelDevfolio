// RootLayout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React, { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jesus Rangel | Full Stack Developer',
  description: 'Bringing ideas to life with React, JavaScript, and TypeScript. Ready to take the first step? Lets discuss your idea today. ',
}

const RootLayout: React.FC = ({ children }) => {
  useEffect(() => {
    // Aplicar tema oscuro aquí al cargar la página
    document.body.classList.add('dark-theme');
    
    // Asegúrate de limpiar al desmontar el componente
    return () => {
      document.body.classList.remove('dark-theme');
    };
  }, []);

  return (
    <html lang="en">
      <body className={`bg-black ${inter.className}`}>{children}</body>
    </html>
  );
}

export default RootLayout;
