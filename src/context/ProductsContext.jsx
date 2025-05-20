import { createContext, useEffect } from "react";
import axios from "axios";

export const ProductsContext = createContext()

export const ProductsProvider = ({children}) => {

const [produtos, setProdutos] = useState([])

  useEffect(() => {
   axios.get('https://api-produtos-wkgi.onrender.com')
      .then(data =>
        setProdutos(data.data)
      )
      .carth(err =>
        console.error("Erro ao buscar produtos:", err)
      )
  }, [])

  return (
    <>
      <ProductsContext.Provider value={produtos}>
        {children}
      </ProductsContext.Provider>
    </>
  )
}
