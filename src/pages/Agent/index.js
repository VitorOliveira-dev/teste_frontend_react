import { useParams } from 'react-router-dom'
import { GetAgentDataByUuid } from '../../hooks/UseData'
import DefaultButton from '../../components/DefaultButton'
import Loader from '../../components/Loader'
import styles from './Agent.module.css'
import AgentSkills from './AgentSkills'
import AgentInfo from './AgentInfo'

const Agent = () => {


    const { uuid } = useParams()

    const agent = GetAgentDataByUuid(uuid)

    if (Object.keys(agent).length > 0) {
        return (
            <>
                <div className={styles.agentTitle}>
                    <h1 data-test="agentTitle">{agent.displayName.toUpperCase()}</h1>
                </div>
                <div className={styles.agentImage}>
                    <img src={agent.fullPortrait} alt={agent.displayName} />
                </div>
                <div className={styles.agentInfoContainer}>
                    <AgentInfo agent= {agent} />
                    <AgentSkills agent={agent} />
                </div>
                <DefaultButton url="/agentes/" label="VOLTAR" />
            </>
        )
    } else {
        return (
            <Loader />
        );
    }
}

export default Agent