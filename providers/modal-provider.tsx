"use client";

import { useEffect, useState} from "react";

import { RenameModal } from "@/components/modals/rename-modal";

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    // useEffect can only be called when client side rendering is completed
    // ensure component is only ever rendered on server side
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <RenameModal />
        </>
    )
}