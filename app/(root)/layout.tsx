import React, { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import Page from "./page";

const RootLayout = ({children}:{children : ReactNode}) => {
    return (
        <div className="root-layout">
            <nav>
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/logo.svg" alt="Logo" width={38} height={32} />
                    <h2 className="text-primary-400">Prepwise</h2>
                </Link>
            </nav>
            <Page/>
        </div>
    )
}

export default RootLayout;