import Post from './Post';

function App() {
  return (
    <div className=' container mx-auto mt-20 max-w-3xl space-y-10'>
      <h1 className='text-5xl font-medium text-center text-sky-600'>The Commenting App</h1>
      <Post depth={0}/>
    </div>
  );
}

export default App;
