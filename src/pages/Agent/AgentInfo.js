import styles from './Agent.module.css'

const AgentInfo = ({agent}) => {
    return (
        <div className={styles.agentInfoWrapper}>
                        <div className={styles.agentRole}>
                            <div className={styles.roleContent}>
                                <h2>{agent.role.displayName}</h2>
                                <p className={styles.roleDescription}>{agent.role.description}</p>
                            </div>
                            <div className={styles.roleIcon}>
                                <img src={agent.role.displayIcon} alt={agent.role.displayName} />
                            </div>
                        </div>
                        <div className={styles.agentDescriptionContainer}>
                            <div className={styles.agentBackgroundImage}>
                                <img src={agent.background} alt={agent.displayName} />
                            </div>
                            <div className={styles.agentDescriptionText}>
                                <p className={styles.agentDescription}>{agent.description}</p>
                            </div>
                        </div>
                    </div>
    );
}

export default AgentInfo