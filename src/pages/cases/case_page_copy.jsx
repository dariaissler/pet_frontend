import React, { useContext, useState } from "react"
import { useLocation } from "react-router-dom"

import { CustomProgressBar } from '../../components/progress'
import { AuthContext } from "../../context/AuthContext"
import { UilClock } from '@iconscout/react-unicons'
import { UilTransaction } from '@iconscout/react-unicons'
import { UilDocumentInfo } from '@iconscout/react-unicons'
import { UilFavorite } from '@iconscout/react-unicons'
// import { UilDownloadAlt } from '@iconscout/react-unicons'
// import { UilFileDownload } from '@iconscout/react-unicons'
import { UilPlaneFly } from '@iconscout/react-unicons'


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
        { id: 2, title: 'Паспорт', desc: 'Основной документ животного - ветеринарный паспорт, заполненный на английском языке.', price: '~100$', time: '1h' },
        { id: 3, title: 'Ветеринарное свидетельство (форма №1)', desc: 'Срок действия Формы №1 составляет 5 дней. Этот документ целесообразно получать за 1-2 дня до отправления в любой государственной ветеринарной клинике. Перед вылетом/выездом в пограничной ветеринарной службе свидетельство по форме №1 обменивается на вет. сертификат формы №5А.', price: '~24$', time: '1h' },
        { id: 4, title: 'Прививка от бешенства', desc: 'Вакцинация от вируса бешенства с пройденным 21-дневным карантином. Это значит, что животное должно быть вакцинировано не позднее 1 года и не раньше трех недель до предполагаемого вылета. Вклеивается в паспорт животного.', price: '~34$', time: '1h' },
        { id: 5, title: 'Комплексная вакцинация', desc: 'Собаки вакцинируются против чумы плотоядных, гепатита, парвовирусных инфекций и аденовирусных инфекций, лептоспироза. Вклеивается в паспорт животного.', price: '~12$', time: '1h' },
        { id: 6, title: 'Чипирование', desc: 'Каждое перевозимое животное должно быть идентифицировано вживленным микрочипом, информация о котором указана в ветеринарном паспорте. Подойдёт и клеймо, оно должно хорошо читаться (для Грузии необязательно, но рекомендуется). Вклеивается в паспорт животного.', price: '~42$', time: '1h' },
        { id: 7, title: 'Обработка от глистов', desc: 'Питомца важно дегельминтизировать каждые 3 месяца, а перед вылетом - не раньше 5 суток до отправления. Вклеивается в паспорт животного. ', price: '~134$', time: '1h' },
        { id: 8, title: 'Антитела к бешенству', desc: ' Титр антител к вирусу бешенства для въезда в Грузию не требуется, однако при выезде из страны в другое государство (страны Евросоюза) этот документ будет необходим. Провести исследование можно только в аккредитованных лабораториях, например, в Клинико-диагностическом центре подведомственного Россельхознадзору ФГБУ «ВГНКИ» (город Москва), ФГБУ «ВНИИЗЖ» (город Владимир) и в некоторых других центрах в Москве. Если вы живете в другом городе, вам понадобится отправить плазму крови животного в один из аккредитованных центров для исследования (получить плазму можно в вашей ветклинике). Титры действуют пожизненно, если вакцинацию против бешенства владелец проводит до окончания срока действия предыдущей прививки', price: '~500$', time: '1h' }
    ])
    const [completed, setCompleted] = useState([])
    const auth = useContext(AuthContext)
    const isAuthenticated = auth.isAuthenticated
    const location = useLocation();
    const { state } = location;


    const completeStep = (id) => {
        // if (isAuthenticated) {
        // setTimeout(() => {
        setSteps(steps.filter((step) => step.id !== id))
        setCompleted([...completed, ...steps.filter((step) => step.id === id)])
        // }, 2000)
        // }
    }


    return (
        <div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around", marginBottom: "60px" }}>
                <h3>{state.title}</h3>
                <div style={{ maxWidth: "800px" }}>Portugal is an inexpensive country to live in, with 0% tax on foreign income. It is one of the EU countries where you are entitled to obtain Portuguese citizenship after 5 years.
                    Portugal is an inexpensive country to live in, with 0% tax on foreign income. It is one of the EU countries where you are entitled to obtain Portuguese citizenship after 5 years.
                    Portugal is an inexpensive country to live in, with 0% tax on foreign income. It is one of the EU countries where you are entitled to obtain Portuguese citizenship after 5 years.
                    {/* <a target="_blank" href="https://www.vet.minpolj.gov.rs/uprava/Sertifikati/Izjava%20nevakcinisan%20kućni%20ljubimac%20Annex%205.pdf"><UilFileDownload color="#414141" /></a> */}
                </div>
            </div>


            {steps.length === 0
                ? (
                    <div style={{ width: "300px", height: "250px", backgroundColor: "#FDB348", position: "absolute", marginLeft: "35%", top: "700px", color: "#794ECD", borderRadius: "22px", textAlign: "center", padding: "45px" }}>
                        <h5>You are all set up!</h5>
                        <p>Good luck with your journey!</p>
                        <div> <UilPlaneFly size="40" /></div>

                    </div>
                ) : null}

            <div>
                {isAuthenticated ? <CustomProgressBar steps={completed} /> : null}
            </div>

            {steps.length !== 0 ? <h5 style={{ marginLeft: "20px", marginTop: "50px" }}>Осталось:</h5> : null}
            <div style={{ marginTop: "30px" }} className="row">
                {steps.map((s, id) => {
                    return (
                        <div style={stepsLayout} key={id + s.title} className="col s12 m12 l12">
                            <div className="col l2 m2 s12"><UilDocumentInfo color="#673ab7" size="80" /></div>
                            <div className="col l7 m7 s12">
                                <h5>{s.title}</h5>
                                <p>{s.desc}</p>
                            </div>
                            <div className="col l1 m1 s12" style={{ display: "flex" }}><UilTransaction color="#673ab7" />{s.price}</div>
                            <div className="col l1 m1 s12" style={{ display: "flex" }}><UilClock color="#673ab7" />{s.time}</div>
                            <div className="col l1 m1 s12">
                                <label>
                                    <input onChange={() => completeStep(s.id)} type="checkbox" />
                                    <span>Done</span>
                                </label>
                            </div>
                        </div>
                    )
                })}
            </div>
            {isAuthenticated && completed.length > 0
                ? (
                    <div>
                        <p style={{ fontWeight: "700", marginLeft: "20px" }}>Готово:</p>
                        <div className="row">
                            {completed.map((s, id) => {
                                return (
                                    <div style={stepsLayout} key={id + s.title} className="col s12 m12 l12">
                                        <div><UilFavorite color="#673ab7" size="80" /></div>
                                        <div>
                                            <h5>{s.title} </h5>
                                            <p>{s.desc}</p>
                                        </div>
                                        <div style={{ display: "flex" }}><UilTransaction color="#673ab7" />{s.price}</div>
                                        <div style={{ display: "flex" }}><UilClock color="#673ab7" />{s.time}</div>
                                        <div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                ) : null
            }
        </div>
    )
}