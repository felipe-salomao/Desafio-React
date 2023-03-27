import api from "../service/api"

const getCep = async (cep) => {
    const response = await api.get(`https://api.postmon.com.br/v1/cep/${cep}`)
    const estado = response.data.estado
    const frete = estado === 'SP' || estado === 'TO' ? 'Frete Grátis' : 'R$ 10,00'
    const prazo = estado === 'SP' || estado === 'TO' ? '4 a 5 dias úteis' : '10 a 15 dias úteis'
  
    return { cep, estado, frete, prazo }
} 

export default getCep