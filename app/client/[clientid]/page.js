

const page = ({params}) => {
  return (
    <div>
        <h3>Client id</h3>
        <p>{params.clientid}</p>
    </div>
  )
}

export async function generateStaticParams() {
  const clients = [{ clientId: '1' }, { clientId: '2' }, { clientId: '3' }];

  return clients.map(client => ({
    clientId: client.clientId,
  }));
}

export default page