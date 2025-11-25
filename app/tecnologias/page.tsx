import tecnologias from '@/app/tecnologias/tecnologias.json';
import Image from 'next/image';

// Tipagem para os dados de tecnologia para uso em TypeScript
interface Tecnologia {
  title: string;
  image: string;
  description: string;
  rating: number;
}

// RFC - React Functional Component
const TecnologiasPage = () => {
  // Converte o JSON importado para um Array de objetos JS
  const tecnologiasArray: Tecnologia[] = JSON.parse(JSON.stringify(tecnologias));

  // Função auxiliar para renderizar estrelas com base no rating
  const renderRating = (rating: number) => {
    const totalStars = 5;
    const filledStar = '★'; // Estrela preenchida
    const emptyStar = '☆';  // Estrela vazia
    
    // Cria uma string com 'rating' estrelas preenchidas e o resto vazias
    return (
      <span className="text-yellow-400 text-xl" aria-label={`Rating: ${rating} de ${totalStars}`}>
        {filledStar.repeat(rating)}
        {emptyStar.repeat(totalStars - rating)}
      </span>
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center border-b-2 border-indigo-600 pb-2">
         Tecnologias Exploradas
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {tecnologiasArray.map((tecnologia) => (
          // Card semelhante ao de produto
          <div 
            key={tecnologia.title} 
            className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition duration-300 border border-gray-100 flex flex-col"
          >
            {/* Secção da Imagem/Logo */}
            <div className="p-4 bg-gray-50 flex justify-center items-center h-40">
              {/* Usa o componente Image do Next.js para otimização */}
              <Image
                src={`/tecnologias/${tecnologia.image}`}
                alt={`Logo de ${tecnologia.title}`}
                width={100}
                height={100}
                className="object-contain max-h-full"
              />
            </div>

            {/* Secção do Conteúdo */}
            <div className="p-5 flex flex-col flex-grow">
              {/* Título da Tecnologia */}
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">{tecnologia.title}</h3>

              {/* Descrição */}
              <p className="text-gray-700 text-sm mb-4 flex-grow">
                {tecnologia.description}
              </p>

              {/* Rating */}
              <div className="mt-auto pt-3 border-t border-gray-100">
                <span className="text-sm font-medium text-gray-500 block mb-1">Preferência:</span>
                {renderRating(tecnologia.rating)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TecnologiasPage;

