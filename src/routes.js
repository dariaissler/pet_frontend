import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { CasesList } from './pages/cases/cases_list'
import { CasePage } from './pages/cases/case_page'


export const useRoutes = isAuth => {
    if (isAuth) {
        return (
            <Routes>
            {/* <Route path="/list">
                <List />
            </Route> */}
            </Routes>
        )
    }
    return (
        <Routes>
            {/* <Route path="/" exact element={<AuthPage />}/> */}
            <Route exact path="/" element={<CasesList />}/>
            <Route path="/:case_id" element={<CasePage />}/>
        </Routes>
    )
}