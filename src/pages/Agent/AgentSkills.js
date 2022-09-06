import { useState } from 'react';
import styles from './Agent.module.css'

const AgentSkills = ({agent}) => {

    const [skillNumber, setSkillNumber] = useState(0);

    const changeSkill = (index) => {
        setSkillNumber(index)
    }

    return (
            <div className={styles.agentSkillsContainer}>
                <div className={styles.skillsTitle}>
                    <h2>HABILIDADES</h2>
                    <p className="subtitle">Clique para conferir *</p>
                </div>
                <div className={styles.agentSkillsCardsContainer} data-test="agentSkills">
                    {agent.abilities.map((skill, index) => (
                        <div className={styles.agentSkillCard} key={skill.displayName}>
                            <div className={styles.agentSkillCardImage}>
                                <button className={styles.agentSkillButton} onClick={() => { changeSkill(index) }}>
                                    <img src={skill.displayIcon} alt={skill.displayName} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.agentSkillDescriptionContainer}>
                    <p className={styles.agentSkillDescription}>{agent.abilities[skillNumber].description}</p>
                </div>
            </div>
    )
}

export default AgentSkills