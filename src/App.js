import './App.css';
import DevoHomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import RegisterCandidate from './pages/RegisterCandidate';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkEthereum, checkWalletConnection, loadBlockchainData, loadWeb3 } from './functions/functions';
import { installedWallet, address, web3Connection } from './actions';


function App() {

  const dispatch = useDispatch()

  useEffect(()=>{

    
    const checkEth = checkEthereum()
    checkEth && dispatch(installedWallet())
    loadWeb3() && dispatch(web3Connection(loadWeb3()))

    const handleWalletInstallation= async ()=>{
    const checkEth = checkEthereum()
      
      if (checkEth) {

          //  check connected adddresses

          const checkConnection = await checkWalletConnection()
      
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

                  <Route path='/candidate-register' component={RegisterCandidate} />
              </Switch>
             
            </div>
      </Router>
    </BrowserRouter>


   
  );
}

export default App;
