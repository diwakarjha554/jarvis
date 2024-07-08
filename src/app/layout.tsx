import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/stylesheets/globals.css";
import { Providers } from "@/app/components/theme/providers";
import NextTopLoader from "nextjs-toploader";
import getCurrentUser from "@/actions/getCurrentUser";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Travel Trail Holidays",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const currentUser = await getCurrentUser();

  return (
    <html lang="en" className={montserrat.className} suppressHydrationWarning>
      <body className="bg-white dark:bg-neutral-950">
        <NextTopLoader color="#FF5956" height={3} showSpinner={false}/>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
