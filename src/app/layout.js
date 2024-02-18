import './globals.css';
import Navbar from '@/components/Navbar/Navbar';
import { ReduxProvider } from './StoreProvider';
export const metadata = {
  title: 'MetaGamer',
  description: 'Gaming and streaming website',
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Navbar />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
