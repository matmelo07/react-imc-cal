import { level } from "../../helpers/imc";
import styles from './Griditem.module.css';
import upImg from '../../assets/up.png';
import downImg from '../../assets/down.png'

type Props = {
    item:level
}


export const GridItem = ({item}:Props)=>{
    return(
          <div className={styles.main} style={{backgroundColor:item.color}}>
             <div className={styles.icon}>
                 <img src={item.icon === 'up' ? upImg :  downImg} alt="" width={30} />
                
             </div>
             <div className={styles.iconTitle}>{item.title}</div>
                 <div className={styles.iconInfo}>
                     <>
                     IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                     </>
                 </div>
          </div>
    )
}
