import { Poppins } from 'next/font/google'
import "./style.css";

const poppins = Poppins({
    subsets: ['latin'],
    weight: [ "400", "700"]
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <h2>Top info</h2>
        {children}
      </body>
    </html>
  );
}
