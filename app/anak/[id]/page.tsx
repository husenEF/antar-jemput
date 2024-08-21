const Page = ({ params }: { params: { id: string } }) => {
  return <div>Anak ke: {params.id}</div>;
};

export default Page;
