import Directory from "./components/directory/directory-component";

const App = () => {

  const categories = [
    {
      id: 1,
      title: 'Face Oils',
      imageUrl: 'https://tinyurl.com/ycymz2bx'
    },
    {
      id: 2,
      title: 'Body Oils',
      imageUrl: 'https://tinyurl.com/ycymz2bx'
    },
    {
      id: 3,
      title: 'Massage Oils',
      imageUrl: 'https://tinyurl.com/ycymz2bx'
    },
    {
      id: 4,
      title: 'Hair Oils',
      imageUrl: 'https://tinyurl.com/ycymz2bx'
    },
    {
      id: 5,
      title: 'Butters',
      imageUrl: 'https://tinyurl.com/ycymz2bx'
    }
  ]
  return (
    <Directory categories={categories}/>
  );
}

export default App
