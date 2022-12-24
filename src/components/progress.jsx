import React, { useState, useEffect } from "react"
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";


const stepsProgress = [
    {id: 2, title: 'Паспорт', desc: 'jshdjhdjakdgfhkagdfkjahsdgfkj asdjkhfgd askjdhfg akhsjd gck', price: '~100$', time: '1h', done: false},
    {id: 3, title: 'Ветеринарное свидетельство (форма №1)', desc: 'jshdjhdjakdgfhkagdfkjahsdgfkj asdjkhfgd askjdhfg akhsjd gck', price: '~24$', time: '1h', done: false},
    {id: 4, title: 'Прививка от бешенства', desc: 'jshdjhdjakdgfhkagdfkjahsdgfkj asdjkhfgd askjdhfg akhsjd gck', price: '~34$', time: '1h', done: false},
    {id: 5, title: 'Комплексная вакцинация', desc: 'jshdjhdjakdgfhkagdfkjahsdgfkj asdjkhfgd askjdhfg akhsjd gck', price: '~12$', time: '1h', done: false},
    {id: 6, title: 'Чипирование', desc: 'jshdjhdjakdgfhkagdfkjahsdgfkj asdjkhfgd askjdhfg akhsjd gck', price: '~42$', time: '1h', done: false},
    {id: 7, title: 'Обработка от глистов', desc: 'jshdjhdjakdgfhkagdfkjahsdgfkj asdjkhfgd askjdhfg akhsjd gck', price: '~134$', time: '1h', done: false},
    {id: 8, title: 'Антитела к бешенству', desc: 'jshdjhdjakdgfhkagdfkjahsdgfkj asdjkhfgd askjdhfg akhsjd gck', price: '~500$', time: '1h', done: false},
]



export const CustomProgressBar = ({ steps }) => {
    const [progress, setProgress] = useState([0])

    useEffect(() => {
        setProgress([(steps.length * 100)/stepsProgress.length])
    }, [steps])

      return (
        <div style={{margin: "100px 0"}}>
            <ProgressBar
            percent={progress}
            filledBackground="linear-gradient(to right, #7f2b92, #c66fdf)"
            >
            {stepsProgress.map((s, id) => {
                return (
                    <Step style={{maxWidth: "80px"}} key={id}>
                        {({ accomplished, index }) => (
                            <div className={`indexedStep ${s.done ? "accomplished" : ""}`}>
                                <div style={{fontSize: "10px", marginTop: "80px", width: "100px"}}>{s.title}</div>
                            </div>
                        )}
                    </Step>
                )
            })}
            </ProgressBar>
        </div>
      );
}