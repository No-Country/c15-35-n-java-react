import {
    Links,
    Meta,
    Outlet,

} from "@remix-run/react";

import styles from './styles/index.css'

import Header from "~/components/header";
import Footer from "~/components/footer";

export function links() {
    return (
        [
            {
                rel: 'stylesheet',
                href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
            },
            {
                rel: 'stylesheet',
                href: styles
            },
            {
                rel: 'preconnect',
                href: "https://fonts.googleapis.com"
            },
            {
                rel: 'preconnect',
                href: "https://fonts.gstatic.com",
                crossOrigin: 'true'
            },
            {
                rel: 'stylesheet',
                href: "https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;700&display=swap"
            },
            {
                rel: 'stylesheet',
                href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css",
                integrity: "sha512-Avb2QiuDEEvB4bZJYdft2mNjVShBftLdPG8FJ0V7irTLQ8Uo0qcPxh4Plq7G5tGm0rU+1SPhVotteLpBERwTkw==",
                crossorigin: "anonymous",
                referrerpolicy: 'no-referrer'
            }


        ]
    )
}

export function meta() {
    return (
        [
            { charset: 'utf-8' },
            { title: 'Gimnasio | Online' },
            { viewport: "width=device-width,initial-scale=1" }
        ]
    )
};

export default function App() {
    return (
        <Document>
            <Outlet />
        </Document>
    )
}

function Document({ children }) {
    return (
        <html lang="es">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}