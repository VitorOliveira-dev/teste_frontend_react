import styles from './AgentCard.module.css'
import Loader from '../Loader'

const AgentCard = ({ data}) => {
    if (data) {
        return (
            data.map((agent) => {
                    return (
                    <div className={styles.agentCard} key={agent.displayIcon} data-test="agentCard">
                        <div className={styles.agentImage} data-test="agentImage">
                            <img src={agent.displayIcon} alt={agent.displayIcon} />
                        </div>
                        <div className={styles.agentContent}>
                            <div className={styles.agentWrapper}>
                                <div className={styles.agentInfo}>
                                    <p className={styles.agentTitle}>{agent.displayName}</p>
                                    <p className={styles.agentSubtitle}>{agent.role.displayName}</p>
                                </div>
                                <div className={styles.agentButton} data-test="agentButton">
                                    <a href={"/agentes/" + agent.uuid}>
                                        <input type="button" value="DETALHES" className={styles.detailsButton} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    );
                })
        );
    } else {
        return (
            <>
            <Loader />
            </>
        )
    }
}

export default AgentCard