import { useState } from 'react';
import styles from './App.module.css';
import poweredImage from './Assets/powered.png';
import leftArrowImage from './Assets/leftarrow.png'
import { levels, calculteImc, Level } from './helpers/imc';
import { GridItem } from './components/GridItem';
const App = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);



  const handleCalculeteButton = () => {
    if (heightField && weightField) {
      setToShow(calculteImc(heightField, weightField));



    } else {
      alert('Digite todos os campos!')
    }
  }

  const handleBackButton = () => {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  }


  return (
    <div className={styles.main}>

      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="" width={150} />
        </div>
      </header>

      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule seu IMC.</h1>

          <p>IMC é a sigla para índice de Massa Corpórea, parâmetro adotado pela Organização Mudial de Saúde para calcular o peso ideal de cada pessoa.</p>

          <input
            type="number"
            placeholder='Digite a sua altura. Ex: 1.5 (em metros)'
            value={heightField > 0 ? heightField : ''}
            onChange={e => setHeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}


          />



          <input
            type="number"
            placeholder='Digite a sua peso. Ex: 55.5 '
            value={weightField > 0 ? weightField : ''}
            onChange={e => setWeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}


          />
          <button onClick={handleCalculeteButton} disabled={toShow ? true : false}>Calcular</button>
        </div>

        <div className={styles.rightSide}>
          {!toShow &&
            <div className={styles.grid}>
              {levels.map((item, key) => (
                <GridItem key={key} item={item} />
              ))}
            </div>
          }
          {toShow &&
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img className={styles.seta} src={leftArrowImage} alt="" width={25} />
              </div>
              <GridItem item={toShow} />
            </div>

          }

        </div>


      </div>
    </div>
  )

}

export default App;
