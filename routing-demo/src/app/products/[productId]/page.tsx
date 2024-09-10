export default function ProductsDetails({
  params,
}: {
  params: { productId: string };
}) {
  return <h1>Products Details Page {params.productId}</h1>;
}
