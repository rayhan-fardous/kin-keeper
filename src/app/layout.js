import "./globals.css";

export const metadata = {
  title: "KinKeeper",
  description: "Family Management Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}