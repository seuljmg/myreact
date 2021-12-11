import Home from './Home';
import { Routes, Route, BrowserRouter, HashRouter } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import Employee from './Employee';
import AddEmployee from './AddEmployee';

const Router = () => {
    return (
        <div>
                <Routes>
                    <Route exact path="/myreact" element={<Home />} />
                    <Route exact path="/employee" element={<Employee/>} />
                    <Route exact path="/add" element={<AddEmployee />} />
                    <Route exact path="/edit/:employeeId" element={<AddEmployee />} />
                    <Route exact path="*" element={<PageNotFound />} />
                </Routes>
        </div>
    )
}

export default Router;