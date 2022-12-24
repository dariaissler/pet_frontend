import React, { useContext, useEffect, useState } from "react"
import { useMemo } from "react"
import { useLocation } from "react-router-dom"
import { StepsContext } from '../../context/StepsContext'

import { CustomProgressBar } from '../../components/progress'
import { StepToggle } from './StepToggle'
import { AuthContext } from "../../context/AuthContext"
import { UilClock } from '@iconscout/react-unicons'
import { UilTransaction } from '@iconscout/react-unicons'
import { UilDocumentInfo } from '@iconscout/react-unicons'
import { UilFavorite } from '@iconscout/react-unicons'
import { UilDownloadAlt } from '@iconscout/react-unicons'
import { UilFileDownload } from '@iconscout/react-unicons'
import { Toggle } from "./toggle"
import { SuccessModal } from './modal_success'
import { StepCard } from "../../components/step_card"
import { TodoList } from './todo_list';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import { UilSyringe } from '@iconscout/react-unicons'
import { UilBookMedical } from '@iconscout/react-unicons'
import { UilBook } from '@iconscout/react-unicons'
import { UilProcessor } from '@iconscout/react-unicons'
import { UilCapsule } from '@iconscout/react-unicons'
import { UilCoronavirus } from '@iconscout/react-unicons'
import { UilAndroid } from '@iconscout/react-unicons'
import { Tag } from '../../components/tags'

import paw from '../../assets/img/dog-paw.png';
import paw_2 from '../../assets/img/dog-paw_2.png'

const stepsLayout = {
    "display": "flex",
    "justifyContent": "space-around",
    "alignItems": "center",
    "backgroundColor": "#f5f7fa",
    "marginBottom": "20px",
    "padding": "20px",
    "borderRadius": "28px"
}


export const CasePage = () => {
    const [steps, setSteps] = useState([
        // {id: 1, title: 'Подготовка', desc: 'Проанализируйте даты путешествия. Вам понадобится от X до Y дней на подготовку питомца ( в зависимости от исходных данных).', price: '~0$', time: '1h'},
        { id: 0, title: 'Ветеринарный паспорт', desc: 'Основной документ животного.В паспорте животного указываются прививки и процедуры, необходимые для путешествий. (купить паспорт-ссылка)', price: '100$', time: '1h', done: false, component: <UilBook color="#673ab7" size="40" /> },
        { id: 1, title: 'Чип', desc: 'Каждый питомец идентифицируется таможней большинства стран с помощью чипа, который почти безболезненно вживляется в холку питомца. Информация о чипе вклеивается в паспорт животного. Чип можно установить в большом количестве ветеринарных клиник, не обязательно государственных. (посмотреть список клиник)', price: '24$', time: '1h', done: false, component: <UilAndroid color="#673ab7" size="40" /> },
        { id: 2, title: 'Прививка от бешенства', desc: 'Обязательный карантин для животного в 21 день делает эту прививку самой затратной по времени, поэтому подумайте о ней заранее. Питомец должен получить вакцину не раньше чем за 1 год  до отъезда, но и не позднее 21 дня до даты путешествия. Список клиник для прививок.', price: '34$', time: '1h', done: false, component: <UilSyringe color="#673ab7" size="40"/> },
        { id: 3, title: 'Обработка от глистов', desc: 'Делается не раньше чем за 5 дней до путешествия, в целом необходима каждые 3 месяца. Проверяется в паспорте животного.', price: '134$', time: '1h', done: false, component: <UilCapsule color="#673ab7" size="40" /> },
        { id: 4, title: 'Комплексная вакцинация', desc: 'Проверить актуальные даты вакцин можно в паспорте животного. Комплексная вакцинация обычно делается ежегодно, поэтому  проверьте даты и запишитесь на прививки в ветеринарную клинику, если они сделаны больше года назад.', price: '12$', time: '1h', done: false, component: <UilSyringe color="#673ab7" size="40" /> },
        { id: 5, title: 'Ветеринарное свидетельство', desc: 'Главная государственная справка о состоянии здоровья питомца, выдаваемая в гос вет клиниках. Главная идея — поменять ее при выезде у пограничной ветеринарной службы (в аэропорту, порту или наземной границе) на форму номер 5, которую нужно показать уже на въезде в страну пребывания. (ссыль на страницу со списком государственных ветеринарных клиник + ссыль на страницу списка вет контролей на границах', price: '42$', time: '1h', done: false, component: <UilBookMedical color="#673ab7" size="40" /> },
        { id: 6, title: 'Антитела к бешенству', desc: 'Титры антител к бешенству требуются для въезда в ЕС, но общая рекомендация делать их перед любой поездкой на случай незапланированных путешествий. Сделать можно только в аккредитованных лабораториях, ссылка на страницу с списком.', price: '500$', time: '1h', done: false, component: <UilCoronavirus color="#673ab7" size="40"  /> }
    ])
    const [listOfSteps, setListOfSteps] = useState([
        { id: 0, title: 'Ветеринарный паспорт', component: <UilBook color="#673ab7" size="40" />, done: false },
        { id: 1, title: 'Чип', component: <UilAndroid color="#673ab7" size="40" /> , done: false },
        { id: 2, title: 'Прививка от бешенства', component: <UilSyringe color="#673ab7" size="40"/>, done: false },
        { id: 3, title: 'Обработка от глистов', component: <UilCapsule color="#673ab7" size="40" /> , done: false },
        { id: 4, title: 'Комплексная вакцинация', component: <UilSyringe color="#673ab7" size="40" />, done: false },
        { id: 5, title: 'Ветеринарное свидетельство', component: <UilBookMedical color="#673ab7" size="40" />, done: false },
        { id: 6, title: 'Антитела к бешенству', component: <UilCoronavirus color="#673ab7" size="40" />, done: false }
    ])

    const [completed, setCompleted] = useState([])
    const [completedSteps, setCompletedSteps] = useState(steps)
    const auth = useContext(AuthContext)
    const isAuthenticated = auth.isAuthenticated
    const location = useLocation();
    const { state } = location;

    const [show, setShow] = useState(false)
    const [percent, setPercent] = useState(0)


    const completeStep = (id) => {
        // if (isAuthenticated) {
        // setTimeout(() => {
        listOfSteps[id].done = !listOfSteps[id].done
        setListOfSteps(listOfSteps)
        steps[id].done = !steps[id].done
        setSteps(steps)
        setCompletedSteps([...completedSteps.filter((step) => !step.done)])
        setCompleted([...steps.filter((step) => step.done)])
        // }, 500)
        // }
    }


    useEffect(() => {
        if (completedSteps.length == 0) {
            setShow(true)
        }
        setPercent(Math.round((completed.length) * 100 / steps.length))
    }, [completedSteps, completed])


    // const steps = useContext(StepsContext)

    // const [completed, setCompleted] = useState([])
    // const [filtered, filterStep] = useState(steps.steps)
    // const auth = useContext(AuthContext)
    // const isAuthenticated = auth.isAuthenticated
    // const location = useLocation();
    // const { state } = location;


    // const completeStep = (id) => {
    //     if (isAuthenticated) {
    //     setTimeout(() => {
    //     filterStep([...filtered, filtered.filter((step) => step.id !== id)])
    //     setCompleted([...completed, ...steps.steps.filter((step) => step.id === id)])
    //     }, 500)
    //     }
    // }

    const onHide = () => setShow(false);
    // const onShow = () => {
    //     if (steps.length < 0) {
    //         setShow(true)
    //     } else {
    //         setShow(false)
    //     }
    //     return show
    // }


    return (
        <div>
            {/* <div className="row" style={{ marginBottom: "60px" }}>
                <h3 className="col-md-2 offset-md-1">{state.title}</h3>
                <div className="col-md-8" style={{ maxWidth: "800px" }}>Portugal is an inexpensive country to live in, with 0% tax on foreign income. It is one of the EU countries where you are entitled to obtain Portuguese citizenship after 5 years.
                    Portugal is an inexpensive country to live in, with 0% tax on foreign income. It is one of the EU countries where you are entitled to obtain Portuguese citizenship after 5 years.
                    Portugal is an inexpensive country to live in, with 0% tax on foreign income. It is one of the EU countries where you are entitled to obtain Portuguese citizenship after 5 years.
                    <a target="_blank" href="https://www.vet.minpolj.gov.rs/uprava/Sertifikati/Izjava%20nevakcinisan%20kućni%20ljubimac%20Annex%205.pdf"><UilFileDownload color="#414141" /></a>
                </div>
            </div> */}
            
            <div style={{alignItems: "center", marginBottom: "10px"}} className="row">
            <div className='col-md-10 col-sm-10'>
            <h4 style={{color: "#616161"}}>Список дел для подготовки и дальнейшего путешествия питомца</h4>
            <div style={{marginTop: "30px"}}>
                <Tag tag="easy with pets" />
                <Tag tag="lot's of shops" />
                <Tag tag="pet restaurants" />
                <Tag tag="lot's of parks" />
                <Tag tag="good vets" />
                <Tag tag="lot's of parks" />
            </div>
            {/* <div>
            <img style={{margin: "0 10px", transform: "rotate(45deg"}} src={paw} />
            <img style={{marginTop: "20px", transform: "rotate(75deg"}} src={paw_2} />
            <img style={{margin: "0 10px", transform: "rotate(45deg"}} src={paw} />
            <img style={{marginTop: "20px", transform: "rotate(75deg"}} src={paw_2} />
            <img style={{margin: "0 10px", transform: "rotate(45deg"}} src={paw} />
            <img style={{marginTop: "20px", transform: "rotate(75deg"}} src={paw_2} />
            <img style={{margin: "0 10px", transform: "rotate(45deg"}} src={paw} />
            <img style={{marginTop: "20px", transform: "rotate(75deg"}} src={paw_2} />
            <img style={{margin: "0 10px", transform: "rotate(45deg"}} src={paw} />
            <img style={{marginTop: "20px", transform: "rotate(75deg"}} src={paw_2} />
            <img style={{margin: "0 10px", transform: "rotate(45deg"}}  src={paw} />
            <img style={{marginTop: "20px", transform: "rotate(75deg"}} src={paw_2} />
            <img style={{margin: "0 10px", transform: "rotate(45deg"}} src={paw} />
            <img style={{marginTop: "20px", transform: "rotate(75deg"}} src={paw_2} />
            <img style={{margin: "0 10px", transform: "rotate(45deg"}} src={paw} />
            <img style={{marginTop: "20px", transform: "rotate(75deg"}} src={paw_2} />
            <img style={{margin: "0 10px", transform: "rotate(45deg"}} src={paw} />
            <img style={{marginTop: "20px", transform: "rotate(75deg"}} src={paw_2} />
            <img style={{margin: "0 10px", transform: "rotate(45deg"}} src={paw} />
            <img style={{marginTop: "20px", transform: "rotate(75deg"}} src={paw_2} />
            <img style={{margin: "0 10px", transform: "rotate(45deg"}} src={paw} />
            <img style={{marginTop: "20px", transform: "rotate(75deg"}} src={paw_2} />
            <img style={{margin: "0 10px", transform: "rotate(45deg"}} src={paw} />
            <img style={{marginTop: "20px", transform: "rotate(75deg"}} src={paw_2} />
            <img style={{margin: "0 10px", transform: "rotate(45deg"}} src={paw} />
            <img style={{marginTop: "20px", transform: "rotate(75deg"}} src={paw_2} />
            </div> */}
            </div>
            <div className='col-md-2 col-sm-2'>
                        <CircularProgressbar 
                        value={percent} 
                        text={`${percent}%`}
                        strokeWidth={12}
                        styles={buildStyles({
                            rotation: 0,
                           

                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                            strokeLinecap: 'butt',
                        
                            // Text size
                            textSize: '22px',
                        
                            // How long animation takes to go from one percentage to another, in seconds
                            pathTransitionDuration: 0.5,
                        
                            // Colors
                            pathColor: '#FDB348',
                            textColor: '#794ECD',
                            trailColor: '#794ECD',
                            backgroundColor: '#3e98c7',
                        })}
                        />
                        </div>
            </div>

            <TodoList completedSteps={completedSteps} percent={percent} completed={completed} completeStep={completeStep} steps={steps} listOfSteps={listOfSteps} />
            <SuccessModal show={show} onHide={onHide} />


            {/* {completedSteps.length !== 0 ? <h5 style={{ margin: "50px 20px" }}>Осталось:</h5> : null}
            <div style={{ marginTop: "30px" }} className="row">
                {steps.map((s, id) => (
                    !s.done ?
                        (
                            <Toggle key={s.id + id} id={s.id} completeStep={completeStep} title={s.title} time={s.time} desc={s.desc} price={s.price} />
                        ) : null
                ))}
            </div> */}
            {isAuthenticated && completed.length > 0 
                ? (
                    <div>
                        <h5 style={{ margin: "50px 20px", color: "#757575" }}>Готово:</h5>
                        <div className="row">
                            {steps.map((s, id) => (
                                s.done ?
                                    (
                                    <Toggle completed={true} key={s.id + id} id={s.id} component={s.component} completeStep={completeStep} icon={s.icon} title={s.title} time={s.time} desc={s.desc} price={s.price} />
                                    ) : null
                            ))}
                        </div>
                    </div>
                ) : null
            }
        </div>
    )
}