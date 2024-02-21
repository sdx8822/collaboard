"use client"

import { EmptyBoards } from "./empty-boards";
import { EmptyFavorites } from "./empty-favs";
import { EmptySearch } from "./empty-search";

interface BoardListProps {
    orgId: string;
    query: {
        search?: string;
        favorites?: string;
    };
};

export const BoardList = ({
    orgId,
    query,
}: BoardListProps) => {
    const data = []; // TODO: change to api call

    if (!data?.length && query.search) {
        return <EmptySearch/>
    }

    if (!data?.length && query.favorites) {
        return <EmptyFavorites />
    }

    if (!data?.length) {
        return <EmptyBoards />
    }

    return (
        <p>{JSON.stringify(query)}</p>
    );
};