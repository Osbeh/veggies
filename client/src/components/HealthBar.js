export default function HealthBar ({ vegName, currentHealth, maxHealth }) {
    return (
        <div className='healthbar'>
            <label for={`${vegName}bar`}>{vegName} Health : {Math.round(currentHealth * 10) / 10}</label>
            <progress id={`${vegName}bar`} value={currentHealth} max={maxHealth}></progress>
        </div>
    )
}