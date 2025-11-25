export default function TecnologiaDetailsCard({ tecnologia }: any) {
return (
<div className="border rounded-xl p-4 space-y-3 shadow">
<h2 className="text-xl font-bold">{tecnologia.nome}</h2>
<p className="text-gray-600">{tecnologia.descricao}</p>
<p className="font-semibold">Rating: {tecnologia.rating}</p>
</div>
);
}