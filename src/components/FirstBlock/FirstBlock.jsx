import React from 'react'
import Styles from './FirstBlock.module.scss'

function FirstBlock() {
    return (
        <div>
            <div className={Styles.wraper}>
                <ul className={Styles.list_about}>
                    <li className={Styles.item_profession}>
                        <h1 className={Styles.title}>Профессия Frontend - разработчик</h1>
                        <h4 className={Styles.title_h4}>Стань с нуля продвинутым Junior разработчиком за 7 месяцев с знанием технологий больше, чем у других кандидатов</h4>
                        <p className={Styles.text}>Начиная с основ изучишь JavaScript, разберешься с  самыми популярными технологиями, научишься писать Frontend на фреймворке и связывать его с Backend. Навыки после курса оцениваются от 100 т.р.</p>
                        <button className={Styles.button}>Задать вопрос об обучении</button>
                    </li>
                    <li className={Styles.img_block}>
                        <div className={Styles.img}></div>
                    </li>
                    <li>
                        <div className={Styles.coment_after}>
                            <svg width="396" height="396" viewBox="0 0 396 396" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_dd_1_2401)">
                                <rect x="160" y="136" width="76" height="76" rx="24" fill="#7F76FF" shape-rendering="crispEdges"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M204.271 155.726C200.146 154.758 195.854 154.758 191.729 155.726C185.773 157.123 181.123 161.773 179.726 167.729C178.758 171.854 178.758 176.146 179.726 180.271C181.123 186.227 185.773 190.877 191.729 192.274C195.854 193.242 200.146 193.242 204.271 192.274C210.227 190.877 214.877 186.227 216.274 180.271C217.242 176.146 217.242 171.854 216.274 167.729C214.877 161.773 210.227 157.123 204.271 155.726V155.726ZM188.985 168.171C189.413 167.657 190.178 167.587 190.692 168.016L194.892 171.516C196.443 172.809 196.443 175.191 194.892 176.484L190.692 179.984C190.178 180.412 189.413 180.343 188.985 179.829C188.556 179.314 188.625 178.549 189.14 178.121L193.34 174.621C193.728 174.298 193.728 173.702 193.34 173.379L189.14 169.879C188.625 169.45 188.556 168.686 188.985 168.171V168.171ZM199.01 177.84C198.341 177.84 197.798 178.383 197.798 179.052C197.798 179.722 198.341 180.265 199.01 180.265H206.084C206.753 180.265 207.296 179.722 207.296 179.052C207.296 178.383 206.753 177.84 206.084 177.84H199.01Z" fill="white"/>
                                </g>
                                <defs>
                                <filter id="filter0_dd_1_2401" x="0" y="0" width="396" height="396" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="24"/>
                                <feGaussianBlur stdDeviation="80"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2401"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="5"/>
                                <feGaussianBlur stdDeviation="25"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"/>
                                <feBlend mode="normal" in2="effect1_dropShadow_1_2401" result="effect2_dropShadow_1_2401"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1_2401" result="shape"/>
                                </filter>
                                </defs>
                            </svg>
                        </div>
                    </li>
                    <li className={Styles.coment}>
                        <p className={Styles.coment_text}><span className={Styles.orange}>Обучение</span> <span className={Styles.black}>для тех,</span> кто готов учиться 10 часов в неделю<span className={Styles.black}>,</span> <span className={Styles.orange}>чтобы получить результат</span><span className={Styles.black}>. Мы даем</span> необходимые навыки <span className={Styles.black}>на продвинутом уровне,</span> убирая все лишнее</p>
                    </li>
                    <li className={Styles.points}>
                        <div className={Styles.points1}></div>
                        <div className={Styles.points2}></div>
                        <div className={Styles.circles}></div>
                    </li>
                </ul>
                <ul className={Styles.list_advantages}>
                    <li className={Styles.item}>
                        <div className={Styles.item_poit}>•</div>
                        <span className={Styles.item_styles}>293</span><p className={Styles.item_advantage}>HD видеоурока длительностью 3 - 15 минут</p> 
                    </li>
                    <li className={Styles.item}>
                        <div className={Styles.item_poit}>•</div>
                        <span className={Styles.item_styles}>6</span><p className={Styles.item_advantage}>Мероприятий на курсе (Хакатоны, мастер классы, разборы и т.д.)</p> 
                    </li>
                    <li className={Styles.item}>
                        <div className={Styles.item_poit}>•</div>
                        <span className={Styles.item_styles}>193</span><p className={Styles.item_advantage}>заданий и тестов для закрепления</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default FirstBlock;