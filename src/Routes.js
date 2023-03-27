import { Routes as Switch, Route, BrowserRouter } from 'react-router-dom'
import Home from './views/Home'
import Login from './views/Login'
import Fee from './views/Fee'
import Register from './views/Register'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/home/" element={<Home />} />
                <Route path="/login/" element={<Login />} />
                <Route path="/fee/" element={<Fee />} />
                <Route path="/Register/" element={<Register />} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes