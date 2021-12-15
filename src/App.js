import './App.css';
import DevoHomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import RegisterCandidate from './pages/RegisterCandidate';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkEthereum, checkWalletConnection, loadBlockchainData, loadWeb3, loadDeployerAddress, loadContract, userWeb3Address } from './functions/functions';
import { installedWallet, address } from './actions';
import { Redirect } from 'react-router';



function App() {

  const dispatch = useDispatch()


  //  load web3

  const isWeb3  = loadWeb3()


  // load contract

  const contract = loadContract(isWeb3)


  const userAddress = useSelector(
    state => state.addressReducer
  )

  const deployerAddress = useSelector(
        state => state.deployerReducer
  )


  useEffect(()=>{

    
    const checkEth = checkEthereum()
    checkEth && dispatch(installedWallet())

    //  dispatch the deployer address
    
    loadDeployerAddress(dispatch, contract)

  
    const handleWalletInstallation= async ()=>{
    const checkEth = checkEthereum()
      
      if (checkEth) {

          //  check connected adddresses and dispatch it

          const checkConnection = await checkWalletConnection(isWeb3)
      
          //checkConnection && userWeb3Address(dispatch, isWeb3)
          checkConnection && dispatch(address(checkConnection.data))
         

              }
        }

    handleWalletInstallation()

    

    loadBlockchainData()
  }, [dispatch])

  return (

    <BrowserRouter>
      <Router>
            <div className="App">

              <Switch>
                  <Route exact path='/' component={DevoHomePage} />

                  <Route path='/candidate-register' 
                  render={

                    ()=>{
                      if(localStorage.getItem('deployer') === localStorage.getItem('user')){

                        
                        return <RegisterCandidate />

                     } else {

                      return <Redirect to="/"/>

                     }

                    }
                    
                  }
                  
                  
                  
                  
                  />
              </Switch>
             
            </div>
      </Router>
    </BrowserRouter>


   
  );
}

export default App;
