import { ReactNode } from "react"

//é necessário tipar o childrem com o ReactNode
//preciso falar que meu componente recebe um children para receber o conteúdo de outra página
export function Container({ children }: { children: ReactNode }) {
    return (
        <div className="w-full max-w-7xl mx-auto px-2">
            {children}
        </div>
    )
}