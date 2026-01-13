import { createContext, ReactNode, useState } from 'react'

type AppContextProps = {
    fields: string[]
}

const AppContext = createContext<AppContextProps | null>(null)

export default function AppContextProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const [fields, setFields] = useState<string[]>([])

    return (
        <AppContext.Provider value={{ fields }}>{children}</AppContext.Provider>
    )
}
