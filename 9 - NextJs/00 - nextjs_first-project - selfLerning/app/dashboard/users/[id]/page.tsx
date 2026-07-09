async function users({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  console.log(params);

  return <div>this user is coming from the : {id}</div>;
}

export default users;
