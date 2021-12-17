import './App.css';
import DevoHomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import RegisterCandidate from './pages/RegisterCandidate';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkEthereum, checkWalletConnection, loadBlockchainData, loadWeb3, loadDeployerAddress, loadContract, loadRegisteredCandidates } from './functions/functions';
import { installedWallet, address } from './actions';
import { Redirect } from 'react-router';
import Stat from './pages/Stat';



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


    //  load the registered candidates
    loadRegisteredCandidates(dispatch)

  
    const handleWalletInstallation= async ()=>{
      const checkEth = checkEthereum()
      
      if (checkEth) {

          //  check connected adddresses and dispatch it

          const checkConnection = await checkWalletConnection(isWeb3)
      
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

                  <Route path="/stat" component={Stat}/>
              </Switch>
             
            </div>
      </Router>
    </BrowserRouter>


   
  );
}

export default App;
