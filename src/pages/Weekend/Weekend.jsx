import React,{useState} from 'react'
import { FirstTime, MainWeekEnd} from '../../components'
import { useNavigate } from "react-router-dom";

const Weekend = () => {
  const [view, setView] = useState("FirstTime")
  const navigate = useNavigate()

  const handleContinue = () => {
    navigate('/tour')
  }
  
  switch (view) {
    case "FirstTime":
      return <FirstTime setView={setView}/>
    case "Main":
      return <MainWeekEnd setView={setView}/>
    default:
      return <div/>
  }

}

export default Weekend
