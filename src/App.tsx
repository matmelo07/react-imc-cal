import styles from './App.module.css';
import poweredImg from '../src/assets/logo.png'
import { useState } from 'react';
import { calculateImc, level, levels } from './helpers/imc';
import {GridItem} from './components/GridItem';

const App = ()=>{

  const [heightField,setHeightField] = useState<number>(0)
  const [weightField,setWeightField] = useState<number>(0)
  const [toShow,setToShow] = useState<level | null>(null)

  const handleCalcular = ()=>{
    if(heightField && weightField){
     setToShow(calculateImc(heightField, weightField))
    }else{
      alert('Digite todos os campos')
    }
  }



  return(
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
           <img src={poweredImg} alt="" width={150} />
           <div className={styles.container}>
           <div className={styles.leftside}>
           <h1 >Calcule seu IMC.</h1>
           <p>O índice de Massa Corporal, conhecido pela sigla IMC, é um cálculo simples que permite medir se alguém está ou não com o peso ideal.</p>
           <input type="number"
           className={styles.input}
           placeholder='Digite sua altura EX. 1.8 (em metros)'
            value={heightField > 0 ? heightField : ''}
            onChange={e => {setHeightField(parseFloat(e.target.value))}}
           />
           <input type="number"
            className={styles.input}
           placeholder='Digite seu peso Ex. 80kg'
            value={weightField > 0 ? weightField : ''}
            onChange={e => {setWeightField(parseFloat(e.target.value))}}
           />
           <button onClick={handleCalcular} className={styles.buttonCalc}>Calcular</button>
           </div>
           
           <div className={styles.rightside}>
             {!toShow &&
              <div className={styles.grid}>
               {levels.map((item, key)=>(
                 <GridItem key={key} item={item}/>
               ))}
              </div>
             }
             {toShow &&
              <div className={styles.rightBig}>
                <div className={styles.rightArrow}></div>
                <GridItem item={toShow}/>
              </div>
             
             }
             
           </div>
           
           </div>
         
        </div>
      </header>
    </div>
  )
}

export default App;