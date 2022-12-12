import Directory from "../../components/directory/directory-component";

const Home = () => {

  const categories = [
    {
      id: 1,
      title: 'Face',
      imageUrl: 'https://tinyurl.com/4b55j3f2'
    },
    {
      id: 2,
      title: 'Body',
      imageUrl: 'https://tinyurl.com/2mjf6h8j'
    },
    {
      id: 3,
      title: 'Cleanse',
      imageUrl: 'https://tinyurl.com/2mjf6h8j'
    },
    {
      id: 4,
      title: 'Hair',
      imageUrl: 'https://tinyurl.com/vznp2rs4'
    },
    {
      id: 5,
      title: 'Hands',
      imageUrl: 'https://tinyurl.com/4b55j3f2'
    },
    {
      id: 6,
      title: 'Massage',
      imageUrl: 'https://tinyurl.com/ywzrcyff'
    },
    {
      id: 7,
      title: 'Scents',
      imageUrl: 'https://tinyurl.com/vznp2rs4'
    }
  ]
  return (
    <Directory categories={categories}/>
  );
}

export default Home
