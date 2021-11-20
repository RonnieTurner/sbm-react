import ContractorForm from "./ContractorForm";
import Card from "../ui/Card"

export default function AddContractor(props) {
  const saveContractorDataHandler = (enteredContractorData) => {
    const contractorData = {
      ...enteredContractorData,
      id: Math.random().toString(),
    }
    props.onAddContractor(contractorData)
  }

  return (
    <div>
      <Card>
        <ContractorForm onSaveContractorData={saveContractorDataHandler} />
      </Card>
    </div>
  )
}
