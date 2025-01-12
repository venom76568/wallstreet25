import './globals.css'
import Providers from './providers'

export const metadata = {
  title: 'Wallstreet',
  description: 'E-Cell present Wallstreet',
}

import { Montserrat } from "next/font/google";
import { classNames } from '@/components/utils/helper';
const montserrat = Montserrat({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width" initial-scale="1" interactive-widget="resizes-content" />
      <link rel='icon' href='/assets/logo.png' />
      <body className={classNames("flex flex-col", montserrat.className)}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
