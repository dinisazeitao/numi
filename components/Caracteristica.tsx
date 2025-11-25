import React from "react";
import Link from "next/link";


export interface CaracteristicaProps {
caracteristica: string;
}


export default function Caracteristica({ caracteristica }: CaracteristicaProps) {
return (
<li className="p-2 border-b">
<Link href={`/caracteristicas/${encodeURIComponent(caracteristica)}`} className="text-blue-600 hover:underline">
{caracteristica}
</Link>
</li>
);
}