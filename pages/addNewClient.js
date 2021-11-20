import AddClient from "../components/AddClient/AddClient";
import Layout from "../components/layout/Layout";

export default function AddNewClient() {
  const addClientHandler = (client) => {
    console.log('in Add Client Page');
    console.log(client);
  }

  return (
    <Layout>
      <div>
        <h1>Add New Client</h1>
        <AddClient onAddClient={addClientHandler} />
      </div>
    </Layout>
  );
}
