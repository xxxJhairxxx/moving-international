import ReactMarkdown from "react-markdown";
import { Container } from "../globals";
import { Button } from "../atoms/Button";
import { useGenerals } from "../../context/generals.context";

interface HomeMiddleProps {
   title: string;
   text: string;
}

const HomeMiddle = ({ title, text }: HomeMiddleProps) => {
   const { multilanguage } = useGenerals();
   return (
      <section className="homeMiddle">
         <Container className="homeMiddle__container">
            <h2 className="homeMiddle__container-title">{title}</h2>
            <ReactMarkdown className="homeMiddle__container-text">{text}</ReactMarkdown>
            <Button className="homeMiddle__container-button" icon="icon-arrows" url="/contact">
               {multilanguage.lbl_btn_contact}
            </Button>
         </Container>
      </section>
   );
};

export default HomeMiddle;
