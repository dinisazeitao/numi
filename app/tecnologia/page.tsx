import TecnologiaDetailsCard from '@/components/TecnologiaDetailsCard';
import { tecnologias } from '@/components/tecnologias';
import Link from 'next/link';


interface Props {
params: { id: string };
}


export default function TecnologiaPage({ params }: Props) {
const index = parseInt(params.id, 10);
const tecnologia = tecnologias[index];


if (!tecnologia) {
return <div className="p-4">Tecnologia não encontrada.</div>;
}


return (
<div className="p-6 space-y-4">
<TecnologiaDetailsCard tecnologia={tecnologia} />
<Link href="/tecnologias" className="text-blue-600 underline">Voltar</Link>
</div>
);
}


