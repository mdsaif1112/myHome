"use client";
import { ThemeProvider } from "@mui/material";
import Header from "./(pages)/shared/Header/Header";
import "./globals.css";
import { Roboto } from "next/font/google";
import theme from "./theme";
import { QueryClient, QueryClientProvider } from "react-query";
import AuthProvider from "@/providers/AuthProvider";
import LoginProvider from "@/providers/LoginProvider";
import { Login } from "@mui/icons-material";
import Register from "./(pages)/(register)/Register";
import Footer from "./(pages)/shared/Footer/Footer";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });
const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <LoginProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <html lang="en">
              <body
                className={roboto.className}
                suppressHydrationWarning={true}
              >
                <Header />
                {children}
                <Footer />
                <Login />
                <Register />
              </body>
            </html>
          </ThemeProvider>
        </QueryClientProvider>
      </LoginProvider>
    </AuthProvider>
  );
}
