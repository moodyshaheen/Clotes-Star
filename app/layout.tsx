
import { Providers } from "./providers";
import { Shell } from "./Shell";
import "./globals.css";


export const metadata = {
  title: "Sh Shoping",
  description: "app for markting clothes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='relative'>
        <Providers>
          <Shell>{children}</Shell>
        </Providers>
      </body>
    </html>
  );
}
