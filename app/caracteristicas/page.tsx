import React from "react";
import Caracteristica from "@/components/Caracteristica";


const caracteristicas = [
"JSX, sintaxe que mistura HTML e JS.",
"Componentes, funções que retornam JSX.",
"Componentes Reutilizáveis e Modulares.",
"Roteamento Automático e APIs.",
"Hooks: useState, useEffect e useSWR.",
"Renderização Rápida e SEO Friendly.",
"TypeScript Seguro e Escalável.",
"Comunidade Ativa e Popularidade.",
];


export default function Page() {
return (
<>
<h2 className="text-2xl font-bold mb-4">Características do React e Next.js</h2>
<ul className="space-y-2">
{caracteristicas.map((c, i) => (
<Caracteristica key={i} caracteristica={c} />
))}
</ul>
</>
);
}


