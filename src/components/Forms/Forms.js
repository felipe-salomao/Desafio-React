import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useForm } from "react-hook-form"
import api from "../../service/api"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({
    name: yup.string().required(),
    lastName: yup.string().required(),
    cep: yup.string().required().matches(/^[0-9]{8}$/, "CEP inválido"),
    number: yup.number().required(),
    password: yup.string().required().min(8),
})

const Forms = () => {
    const [cep, setCep] = useState('')
    const [endereco, setEndereco] = useState({
        city: '',
        state: '',
        address: '',
        neighborhood: '',
    })

    const getCep = async (event) => {
        const cep = event.target.value.replace(/[^0-9]/g, '')
        setCep(cep)
        if (cep.length === 8) {
            try {
                const response = await api.get(`/${cep}`)
                setEndereco({
                    city: response.data.cidade,
                    state: response.data.estado,
                    address: response.data.logradouro,
                    neighborhood: response.data.bairro,
                })
            } catch (error) {
                console.error(error)
            }
        }
    }

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = data => {
        const formData = `
        DADOS PESSOAIS
            Nome completo: ${data.name} ${data.lastName}
        
        ENDEREÇO
            ${data.neighborhood}, ${data.address}, ${data.number}
            CEP ${data.cep}, ${data.city}-${data.state}
            Complemento ${data.complement}

        SENHA
            ${data.password}
        `;

        if (window.confirm(`Confirma o envio das informações abaixo?\n\n${formData}`)) {
            console.log(data);
        }
    }

    return (
        <Box sx={{
            margin: '130px 50px 0 0',
            textAlign: 'center',
            width: '1480px'
          }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '35ch' },
                        marginLeft: '500px'
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <Typography variant='h4' align='center' marginBottom='50px'>
                        CRIE SUA CONTA
                    </Typography>
                    <div>
                        <TextField
                            required
                            id="outlined-required"
                            label="Nome"
                            {...register('name')}
                            error={errors.name ? true : false}
                            helperText={errors.name?.message}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Sobrenome"
                            {...register('lastName')}
                            error={errors.lastName ? true : false}
                            helperText={errors.lastName?.message}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="CEP"
                            value={cep}
                            {...register('cep')}
                            onChange={getCep}
                            inputProps={{ maxLength: 8 }}
                            error={errors.cep ? true : false}
                            helperText={errors.cep?.message}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Cidade"
                            value={endereco.city}
                            onChange={(event) =>
                                setEndereco({ ...endereco, city: event.target.value })
                            }
                            {...register('city')}
                            error={errors.city ? true : false}
                            helperText={errors.city?.message}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="UF"
                            value={endereco.state}
                            onChange={(event) =>
                                setEndereco({ ...endereco, state: event.target.value })
                            }
                            {...register('state')}
                            error={errors.state ? true : false}
                            helperText={errors.state?.message}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Bairro"
                            value={endereco.neighborhood}
                            onChange={(event) =>
                                setEndereco({ ...endereco, neighborhood: event.target.value })
                            }
                            {...register('neighborhood')}
                            error={errors.neighborhood ? true : false}
                            helperText={errors.neighborhood?.message}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Endereço"
                            value={endereco.address}
                            onChange={(event) =>
                                setEndereco({ ...endereco, address: event.target.value })
                            }
                            {...register('address')}
                            error={errors.address ? true : false}
                            helperText={errors.address?.message}
                        />
                        <TextField
                            id="outlined-read-only-input"
                            label="Complemento"
                            {...register('complement')}
                        />
                        <TextField
                            id="outlined-number"
                            label="Número"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            {...register('number')}
                            error={errors.number ? true : false}
                            helperText={errors.number?.message}
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Senha"
                            type="password"
                            autoComplete="current-password"
                            {...register('password')}
                            error={errors.password ? true : false}
                            helperText={errors.password?.message}
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Confimar senha"
                            type="password"
                            autoComplete="current-password"
                        />
                    </div>
                </Box>
                <Button variant="contained" type="submit"
                    sx={{
                        width: '935px',
                        margin: '16px 0 0 500px',
                        backgroundColor: '#011638'
                    }}>
                    Cadastrar
                </Button>
            </form>
        </Box>
    )
}

export default Forms