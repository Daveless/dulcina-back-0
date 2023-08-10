import Button from './Button'

const ButtonContainer = ({listOfButtons}) => {
  return (
    <div>
        {listOfButtons.map(button=> {
            return <Button key={button} content={button}/>
        })}
        
    </div>
  )
}

export default ButtonContainer