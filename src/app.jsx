import Login from './components/login/login';
import styles from './app.module.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Maker from './components/maker/maker';
import { useState, useEffect } from 'react';
import LoadingPage from './components/loadingPage/loadingPage';

function App({ authService, FileInput }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])

  return (
    <>
      {loading === false ? (
        <div className={styles.app}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/">
                <Login authService={authService} />
              </Route>
              <Route path="/maker">
                <Maker FileInput={FileInput} authService={authService} />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      ) : (
        <LoadingPage></LoadingPage>
      )}
    </>
  )
}

export default App;
