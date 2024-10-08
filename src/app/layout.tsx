import "~/styles/globals.css";

import { Roboto } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import { cn } from "~/lib/utils";
import { Toaster } from "~/components/ui/toaster";
import { AuthProvider } from "~/components/authProvider";

export const metadata = {
  title: "Praxis Consultoria Jr",
  description: "Site institucional da Praxis Consultoria Jr",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const font = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={cn(font.className, "antialiased")}>
      <body>
        <TRPCReactProvider>
          <AuthProvider>
            <div
              className="mx-auto"
              style={{
                width: "min(1400px,100%)",
              }}
            >
              {children}
            </div>
          </AuthProvider>
          <Toaster />
        </TRPCReactProvider>
      </body>
    </html>
  );
}