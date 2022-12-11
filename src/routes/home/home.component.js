import Directory from "../../components/directory/directory-component";

const Home = () => {

  const categories = [
    {
      id: 1,
      title: 'Face Oils',
      imageUrl: 'https://tinyurl.com/4b55j3f2'
    },
    {
      id: 2,
      title: 'Body Oils',
      imageUrl: 'https://tinyurl.com/2mjf6h8j'
    },
    {
      id: 3,
      title: 'Massage Oils',
      imageUrl: 'https://tinyurl.com/ywzrcyff'
    },
    {
      id: 4,
      title: 'Hair Oils',
      imageUrl: 'https://tinyurl.com/vznp2rs4'
    },
    {
      id: 5,
      title: 'Butters',
      imageUrl: 'https://tinyurl.com/4cwdtze8'
    }
  ]
  return (
    <Directory categories={categories}/>
  );
}

export default Home
