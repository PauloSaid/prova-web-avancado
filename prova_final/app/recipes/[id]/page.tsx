import { promises as fs } from 'fs';

interface Recipe {
  id: string;
  name: string;
  ingredients: string[];
  instructions: string[];
  image: string;
}

export default async function Home({ params }: { params: { id: string } }) {
  const data = await getData(params.id);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div className="bg-white rounded-lg shadow-md overflow-hidden" key={data?.id}>
    <img className="w-full h-auto" src={data?.image} alt={data?.name} />
    <div className="p-6">
      <h1 className="text-xl font-bold mb-2">{data?.name}</h1>
      <h2 className="text-lg font-semibold mb-2">Ingredientes:</h2>
      <ul className="list-disc pl-5 mb-4">
        {data?.ingredients.map((ingredient, index) => ( 
          <li key={index} className="mb-1">{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-lg font-semibold mb-2">Instruções:</h2>
      <ol className="list-decimal pl-5">
        {data?.instructions.map((instruction, index) => (
          <li key={index} className="mb-1">{instruction}</li>
        ))}
      </ol>
    </div>
  </div>
</div>


  );
}

async function getData(id: string): Promise<Recipe | null> {
    const path = process.cwd() + "/app/data/recipes.json";
    const file = await fs.readFile(path, "utf8");
    const data: Recipe[] = JSON.parse(file);
    const recipe = data.find(recipe => recipe.id === id);
    return recipe || null;
  }

