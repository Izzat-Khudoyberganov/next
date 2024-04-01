import Idea from "~/components/idea";
import Product from "~/components/product";
import SignUp from "~/components/sign-up";

async function getData(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}?id=${id}`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

async function ProductView({ params }: { params: { productId: string } }) {
  const data = await getData(params.productId);

  return (
    <div>
      My Post: {params.productId}
      <pre>{params.productId} hiii</pre>
      <code>{JSON.stringify(data)}</code>

      <Product/>
      <Idea/>
      <SignUp/>
    </div>
  );
}

export default ProductView;
