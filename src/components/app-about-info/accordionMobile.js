import React from 'react';
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import './app-about-info.css';
import styles from './styles.module.css';
import chevronDown from "./chevron-down.svg";
import bginfoMob1 from './bg1mob.jpg';
import bginfoMob2 from './bg2mob.jpg';
import bginfoMob3 from './bg3mob.jpg';
import bginfoMob4 from './bg4mob.jpg';


function mobileAccordion() {

    /**
   * @type {React.ExoticComponent<import('@szhsin/react-accordion').AccordionItemProps>}
   */
    const AccordionItem = ({ header, ...rest }) => (
        <Item
          {...rest}
          header={
            <>
              {header}
              <img className={styles.chevron} src={chevronDown} alt="Chevron Down" />
            </>
          }
          className={styles.item}
          buttonProps={{
            className: ({ isEnter }) =>
              `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`
          }}
          contentProps={{ className: styles.itemContent }}
          panelProps={{ className: styles.itemPanel }}
        />
    );

    return (
        <div className="accordionMobile">
            <div className={styles.app}>
            <Accordion>
            <AccordionItem header="Удобство работы">
                <div className="bgInfoMob" style={{ backgroundImage: `url(${bginfoMob1})` }}></div>
            </AccordionItem>

            <AccordionItem header="Полное оснащение">
                <div className="bgInfoMob" style={{ backgroundImage: `url(${bginfoMob2})` }}></div>
            </AccordionItem>

            <AccordionItem header="Простота погрузки/выгрузки">
                <div className="bgInfoMob" style={{ backgroundImage: `url(${bginfoMob3})` }}></div>
            </AccordionItem>

            <AccordionItem header="Разнообразие площадей">
                <div className="bgInfoMob" style={{ backgroundImage: `url(${bginfoMob4})` }}></div>
            </AccordionItem>
            </Accordion>
            </div>
        </div>
    );

}

export default mobileAccordion;




