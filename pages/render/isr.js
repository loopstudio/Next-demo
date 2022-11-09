//INCREMENTAL STATIC REGENERATION

const ISR = ({ name }) => {
  return <div>Hola {name} 😄 </div>;
};

export default ISR;

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/name");
  const { name } = await res.json();
  return {
    props: {
      name,
    },
    revalidate: 10,
  };
};
