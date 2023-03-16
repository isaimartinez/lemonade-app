import React,{useState} from 'react'
import { FirstTime, MainWeekEnd, BeforeNextStep} from '../../components'
import { useNavigate } from "react-router-dom";

const Weekend = () => {
  const [view, setView] = useState("BeforeNextSteps")
  const navigate = useNavigate()

  const handleContinue = () => {
    navigate('/tour')
  }
  
  switch (view) {
    case "FirstTime":
      return <FirstTime setView={setView}/>
    case "Main":
      return <MainWeekEnd setView={setView}/>
    case "BeforeNextSteps":
      return <BeforeNextStep />
    default:
      return <div/>
  }

}

export default Weekend
