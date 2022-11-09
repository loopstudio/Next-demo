//SERVER SIDE RENDERING

const SSR = ({ name }) => {
  return <div>Hola {name} 😄 </div>;
};

export default SSR;

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/name");
  const { name } = await res.json();
  return {
    props: {
      name,
    },
  };
};
