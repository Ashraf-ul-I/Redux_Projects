
import './App.css'
import Layout from './components/Layout'
import Balance from './components/Balance'
import Transaction from './components/Transaction/Transaction'
import TransactionForm from './components/TransactionForm'

function App() {


  return (
    <>
      <Layout>
        <Balance/>
        <TransactionForm/>
        <Transaction/>
      </Layout>
    </>
  )
}

export default App
