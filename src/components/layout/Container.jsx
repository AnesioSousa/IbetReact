/*
* Nesse container vamos poder alterar classes que vão fazer com que
* seja possivel mudar a disposição dos meus itens dentro do container
* vai ser um container flex que vai poder mudar por exemplo, directions, 
*  por classes helpers
*/
import styles from './Container.module.css'

function Container(props) {
    return <div className={`${styles.container} ${styles[props.customClass]}`}>{props.children}</div>

}

export default Container