import AddContractor from "../components/AddContractor/AddContractor";
import Layout from "../components/layout/Layout";

export default function AddNewContractor() {
  const addContractorHandler = (contractor) => {
    console.log("in Add New Contractor");
    console.log(contractor)
  };

  return (
    <>
      <Layout>
        <h1>Add New Contractor</h1>
        <AddContractor onAddContractor={addContractorHandler} />
      </Layout>
    </>
  );
}
