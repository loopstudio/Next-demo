import { useRouter } from "next/router";

const SpecificPost = () => {
  const router = useRouter();

  console.log(router);

  return (
    <>
      <h1>
        post params
        {router.query.slug?.map((element, index) => (
          <p key={index}>{element}</p>
        ))}
      </h1>
    </>
  );
};

export default SpecificPost;
