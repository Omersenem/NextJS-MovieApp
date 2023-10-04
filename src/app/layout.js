import "./glabals.css"
import Header from "@/components/Header";
import Tabs from "@/components/Tabs";
import Providers from "@/app/Providers";

export default function RootLayout({children}) {
    return (
        <html>
        <body>
        <Providers>
            <Header/>
            <Tabs/>
            {children}
        </Providers>

        </body>

        </html>
    )
}
