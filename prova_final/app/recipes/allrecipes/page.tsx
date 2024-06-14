import { promises as fs } from 'fs';

interface Recipe {
  id: string;
  name: string;
  ingredients: string[];
  instructions: string[];
  image: string;
}

export default async function Home() {
  const data = await getData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {data.map((recipe: Recipe) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden" key={recipe.id}>
      <a href={`/recipes/${recipe.id}`}>
        <img className="w-full h-auto" src={recipe.image} alt={recipe.name} />
        <div className="p-6">
          <h1 className="text-xl font-bold mb-2">{recipe.name}</h1>
        </div>
      </a>
    </div>
  ))}
</div>

  );
}

async function getData(): Promise<Recipe[]> {
  const path = process.cwd() + "/app/data/recipes.json";
  const file = await fs.readFile(path, "utf8");
  const data: Recipe[] = JSON.parse(file);
  return data;
}

