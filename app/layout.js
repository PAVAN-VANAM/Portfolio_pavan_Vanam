import {JetBrains_Mono} from 'next/font/google'
import "./globals.css";
import Header from '@/components/Header';
import PageTransition from '@/components/PageTransition';
import StairEffect from '@/components/StairEffect';

const jetbrainsMono = JetBrains_Mono({
  subsets:['latin'],
  weight:['100','200','300','400','500','600','700','800'],
  variable:"--font-jetbrainsMono",
});

export const metadata = {
  title: "Portfolio_pavan",
  description: "An effective portfolio description, it helps to highlight your key skills, experiences, and current projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}
      >
        <Header/>
        <StairEffect/>
        <PageTransition>
        {children}

        </PageTransition>
      </body>
    </html>
  );
}
