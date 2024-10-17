import './globals.css'
import '@mantine/core/styles.css';

export const metadata = {
  title: 'Izaz Ahmad',
  description: 'Izaz Ahmad Protfolio',
}

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <body className='saira-condensed-regular'>{children}</body>
    </html>
  )
}
