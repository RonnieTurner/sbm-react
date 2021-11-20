import AddProduct from "../components/AddProduct/AddProduct";
import Layout from "../components/layout/Layout";

export default function AddProductPage() {
  const addProductHandler = product => {
    console.log('in AddProduct Page');
    console.log(product)
  }
  
  return (
    <Layout>
    <div>
      <h1>Add New Product</h1>
      <AddProduct onAddProduct={addProductHandler} />
    </div>
    </Layout>
  )
}
