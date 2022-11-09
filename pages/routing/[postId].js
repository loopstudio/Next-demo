import { useRouter } from "next/router";

const SpecificPost = () => {
  const router = useRouter();

  console.log(router);

  return <h1>post ID = {router.query.postId}</h1>;
};

export default SpecificPost;
