import { React } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setOpenModal } from "../../store/actions"

export const HandleClose = ()=>{

  const dispatch = useDispatch()
  const isModalOpen = useSelector((state) => state.isModalCashierOpen);
  
  const modifyModalState =(isOpen)=>{
      console.log("🚀 ~ file: cashierModalHelper.js:8 ~ HandleClose ~ isOpen", isOpen)
    dispatch(setOpenModal(isOpen))
    
  }
  return (
    modifyModalState
  )
}
  