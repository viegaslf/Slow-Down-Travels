import styles from "./styles.module.css";
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

type Faq = {
  title: string;
  text: string;
  uuid: string;
};

export function Faq(props: Faq) {
  return (
    <AccordionItem uuid={props.uuid}>
      <AccordionItemHeading>
        <AccordionItemButton>{props.title}</AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <p>{props.text}</p>
      </AccordionItemPanel>
    </AccordionItem>
  );
}
