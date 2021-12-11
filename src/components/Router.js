import Home from './Home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import Employee from './Employee';
import AddEmployee from './AddEmployee';

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/myreact" element={<Home />} />
                    <Route exact path="/myreact/employee" element={<Employee/>} />
                    <Route exact path="/myreact/add" element={<AddEmployee />} />
                    <Route exact path="/myreact/edit/:employeeId" element={<AddEmployee />} />
                    <Route exact path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router;