import './App.css';
import DevoHomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import RegisterCandidate from './pages/RegisterCandidate';
import { useEffect } from 'react';
import { useDispatch,  } from 'react-redux';
import { checkEthereum, checkWalletConnection, loadBlockchainData, loadWeb3, loadDeployerAddress, loadContract } from './functions/functions';
import { installedWallet, address } from './actions';



function App() {

  const dispatch = useDispatch()


  //  load web3

  const isWeb3  = loadWeb3()


  // load contract

  const contract = loadContract(isWeb3)


  

  useEffect(()=>{

    
    const checkEth = checkEthereum()
    checkEth && dispatch(installedWallet())


    //  dispatch the deployer address
    
    loadDeployerAddress(dispatch, contract)

  
    const handleWalletInstallation= async ()=>{
    const checkEth = checkEthereum()
      
      if (checkEth) {

          //  check connected adddresses and dispatch it

          const checkConnection = await checkWalletConnection()
      
          checkConnection && dispatch(address(checkConnection.data))

              }
        }

    handleWalletInstallation()

    

    loadBlockchainData()
  }, [contract, dispatch])

  return (

    <BrowserRouter>
      <Router>
            <div className="App">

              <Switch>
                  <Route exact path='/' component={DevoHomePage} />

                  <Route path='/candidate-register' component={RegisterCandidate} />
              </Switch>
             
            </div>
      </Router>
    </BrowserRouter>


   
  );
}

export default App;
