import './globals.css'
import '@mantine/core/styles.css';
import { MantineProvider, createTheme } from '@mantine/core';

export const metadata = {
  title: 'Izaz Ahmad',
  description: 'Izaz Ahmad Protfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-green-400'>{children}</body>
    </html>
  )
}
