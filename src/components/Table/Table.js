import React, { useState, useEffect } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import helpers from '../../helpers'

const FeeTable = () => {
    const [cep, setCep] = useState([])

    useEffect(() => {
        const fetchCeps = async () => {
            const cepList = ['01001000','77395970', '30110001', '49000001']
            const promises = cepList.map(async (cep) => {
                const cepInfo = await helpers.getCep(cep)
                return cepInfo
            })
            const results = await Promise.all(promises)
            setCep(results)
        }
        fetchCeps()
    }, [])

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>CEP</TableCell>
                        <TableCell align="right">UF</TableCell>
                        <TableCell align="right">Frete</TableCell>
                        <TableCell align="right">Dias Úteis</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cep.map((cep) => (
                            <TableRow key={cep.cep}>
                                <TableCell component="th" scope="row">{cep.cep}</TableCell>
                                <TableCell align="right">{cep.estado}</TableCell>
                                <TableCell align="right">{cep.frete}</TableCell>
                                <TableCell align="right">{cep.prazo}</TableCell>
                            </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default FeeTable