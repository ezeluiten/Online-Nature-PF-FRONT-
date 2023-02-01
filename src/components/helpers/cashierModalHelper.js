import { React } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setOpenModal } from "../../store/actions"

export const HandleClose = ()=>{

  const dispatch = useDispatch()
  const isModalOpen = useSelector((state) => state.isModalCashierOpen);
  
  const modifyModalState =(isOpen)=>{
    dispatch(setOpenModal(isOpen))
    
  }
  return (
    modifyModalState
  )
}
  