import styles from './App.module.css'
import SelectedCityProvider from './context/SelectedCityProvider'
import Home from './pages/Home'

const App = () => {
  return (
    <SelectedCityProvider>
      <div className={styles.mainContainer}>
        <Home />
      </div>
    </SelectedCityProvider>
  )
}

export default App
