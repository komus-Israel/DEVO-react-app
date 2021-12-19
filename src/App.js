import './App.css';
import DevoHomePage from './pages/HomePage';
import WrongNetWork from './pages/WrongNetwork';
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import RegisterCandidate from './pages/RegisterCandidate';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
         checkEthereum, checkWalletConnection, 
        loadBlockchainData, loadWeb3, loadDeployerAddress, 
        loadContract, loadRegisteredCandidates, 
        fetchNoOfElectorates, checkIfAddressIsRegistered} from './functions/functions';

import { installedWallet, address, setContract, approveElectorate } from './actions';
import { Redirect } from 'react-router';
import Stat from './pages/Stat';



function App() {

  const dispatch = useDispatch()


  //  load web3

  const isWeb3  = loadWeb3()
  

  useEffect(()=>{
    
    const checkEth = checkEthereum()
    checkEth && dispatch(installedWallet())

    //  dispatch the deployer address


    const handleContract=async()=>{
      const contract = await loadContract(isWeb3)

      if (contract) {
        await loadDeployerAddress(dispatch, contract)

        //  load the registered candidates
        await loadRegisteredCandidates(dispatch)

        // fetch the number of registered electorates
        await fetchNoOfElectorates(dispatch) 

        // get is the connected address is registered

        const checkIfRegistered = await checkIfAddressIsRegistered()

        if (checkIfRegistered) {
          dispatch(approveElectorate())
        }

        

        dispatch(setContract())
       

        

      } else {
        alert("connect to the rinkeby network to get started")
      }

      
  }
    
    
    


    
    

    

  
    const handleWalletInstallation= async ()=>{
      const checkEth = checkEthereum()
      
      if (checkEth) {

          //  check connected adddresses and dispatch it

          const checkConnection = await checkWalletConnection(isWeb3)
      
          checkConnection && dispatch(address(checkConnection.data))
         

              }
        }

    handleWalletInstallation()
    handleContract()

    

    
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

                  <Route path="/stat" component={Stat}/>
              </Switch>
             
            </div>
      </Router>
    </BrowserRouter>


   
  );
}

export default App;
