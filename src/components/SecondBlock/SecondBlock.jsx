import React from "react";
import Styles from './SecondBlock.module.scss';

function SecondBlock() {
  return(
    <div>
      <div className={Styles.wraper}>
        <h1 className={Styles.title}>Как именно ты станешь разработчиком</h1>
        <div className={Styles.question}></div>
        <p className={Styles.text}>На курсе ты не просто изучаешь теоретический материал. в процессе изучения ты повторяете за действующим разработчиком, после чего <span className={Styles.black}>закрепляешь знания на заданиях и проектах.</span></p>
        <div>
          <div className={Styles.block1}>
            <h4 className={Styles.title_block}>2 Командных проекта</h4>
            <p>Симуляция комерческого проекта - получаете ТЗ и организовываете командную разработку. Прокачивая навыки для будущей работы.
            <br/>
            <br/>
            Проекты на тему:
            <br/>
            - JavaScript плагин "Контекстное меню"
            <br/>
            - Cайт на React, презентующий команду участников</p>
          </div>
          <div className={Styles.block2}></div>
          <div className={Styles.block3}>
            <h4 className={Styles.title_block}>Индивидуальные проекты</h4>
            <p>Чтобы свободно чуствовать себя на позиции junior необходим опыт разработки.
            <br/>
              Вы создадите 3 проекта изучая материал от простого к сложному: 
            <br/>
            <br/>
              1. Проект корзина с товарами для интернет-магазина
              <br/>
              2. Социальная сеть для поиска и знакомств 
              <br/>
              3.Дипломный проект на выбранную вами тему:
              <br/>
              - Учет доходов и рассходов
              <br/>
              - Бронирование отелей  
              <br/>
              - Интернет-магазин или  схожий по сложности проект, которым вы выберети и утвердите с куратором
            </p>
          </div>
          <p className={Styles.text_students}> Проекты учеников</p>
        </div>
      </div>
    </div>
  )
}

export default SecondBlock;