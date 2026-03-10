import "./globals.css";

export const metadata = {
  title: "Hello world"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
