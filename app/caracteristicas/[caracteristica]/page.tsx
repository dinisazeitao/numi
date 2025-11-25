import React from "react";
import Link from "next/link";


interface Props {
params: {
caracteristica: string;
};
}


export default function CaracteristicaPage({ params }: Props) {
return (
<div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
<h1 className="text-3xl font-bold mb-6">{decodeURIComponent(params.caracteristica)}</h1>


<Link
href="/caracteristicas"
className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
>
Voltar às características
</Link>
</div>
);
}