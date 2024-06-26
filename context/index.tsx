
"use client"
import { FC, ReactNode } from "react";

import { QueryClient, QueryClientProvider } from "react-query";

interface QueryContextProviderProps {
    children: ReactNode;
}
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});

const QueryContextProvider: FC<QueryContextProviderProps> = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};

export default QueryContextProvider;