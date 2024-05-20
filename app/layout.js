
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Alegreya&display=swap" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
