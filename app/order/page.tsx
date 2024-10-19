"use client"

import React, {useEffect} from "react"
import dynamic from 'next/dynamic'
import {useModal} from "@/context/ModalContext"
import {useCart} from "@/context/CartContext"

const DynamicModal = dynamic(() => import('@/components/modal/Modal'))
const DynamicModalCart = dynamic(() => import('@/components/modal/ModalCart'))

const Success = () => {
  const {openModal} = useModal()
  const {clearCart} = useCart()
  useEffect(()=>{
    clearCart()

    openModal({
      title: "Cart",
      content: <DynamicModalCart/>
    })
  }, [])

  return (
    <DynamicModal/>
  )
}

export default Success