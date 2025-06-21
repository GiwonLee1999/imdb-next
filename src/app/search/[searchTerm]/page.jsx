import Results from '@/app/components/Results';

const API_KEY = process.env.API_KEY;

export default async function SearchPage({ params }) {
  const searchTerm = params.searchTerm;
  
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );
  
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  
  const data = await res.json();
  const results = data.results;

  return (
    <div>
      <h1 className='text-2xl font-medium text-amber-600 text-center p-4'>
        Results for: {searchTerm}
      </h1>
      {results && results.length === 0 && (
        <h2 className='text-center pt-6'>No results found</h2>
      )}
      {results && <Results results={results} />}
    </div>
  );
}