import React, { useEffect, useRef } from "react";
import ReCAPTCHA, { ReCAPTCHA as ReCAPTCHAType } from "react-google-recaptcha";

import { Loader } from "../atoms/Loader";
import { useNavbarContext } from "../../context/navbar.context";
import { Button } from "../atoms/Button";
import { Form, Messages } from "../../interfaces";
import { useForm } from "../../hooks/useForm";
import { useGenerals } from "../../context/generals.context";

interface ContactFormProps {
   form: Form;
   messages: Messages;
   services: string[];
}

function MejorarText(text: string): string {
   const ogTitle = text.split("/");
   const upperText = ogTitle[0].toLowerCase();

   const capitalizedText = upperText[0].toUpperCase() + upperText.slice(1);
   return capitalizedText;
}

export default function ContactForm({ form, messages, services }: ContactFormProps) {
   const { serviceSelected, setServiceSelected } = useNavbarContext();
   const { name, email, phone, service, message } = form;

   const { multilanguage } = useGenerals();

   const captchaRef = useRef<ReCAPTCHAType>(null);
   const captchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY as string;

   const {
      failure,
      sending,
      errors,
      formState,
      responseMessage,
      validateInput,
      validateSelect,
      handleInput,
      handleSubmit,
      setFormState,
      phoneRef,
      phoneNumberFormatter,
   } = useForm(messages, "/ezforms/submit", captchaRef);

   const onChangeRecaptcha = () => {
      if (captchaRef.current?.getValue()) {
         setFormState({
            ...formState,
            captcha: captchaRef.current?.getValue() as string,
         });
      }
   };

   useEffect(() => {
      setFormState((prevState) => {
         return { ...prevState, service: serviceSelected };
      });
      return () => {
         setServiceSelected("");
      };
   }, [setFormState]);

   //all god

   return (
      <form onSubmit={handleSubmit} className="contactFormCont">
         <div className="contactFormCont__InputArea">
            <div className="contactFormCont__InputArea__item">
               <label htmlFor={name.name}>{name.label}</label>
               <input
                  type="text"
                  onInput={validateInput}
                  placeholder={name.placeholder}
                  id={name.name}
                  name={name.name}
                  value={formState.name}
               />
               {errors.name && <span className="Form-error">{errors.name}</span>}
            </div>
            <div className="contactFormCont__InputArea__item">
               <label htmlFor={email.name}>{email.label}</label>
               <input
                  type="text"
                  onInput={validateInput}
                  placeholder={email.placeholder}
                  id={email.name}
                  name={email.name}
                  value={formState.email}
               />
               {errors.email && <span className="Form-error">{errors.email}</span>}
            </div>
            <div className="contactFormCont__InputArea__item">
               <label htmlFor={phone.name}>{phone.label}</label>
               <input
                  type="text"
                  onInput={validateInput}
                  placeholder={phone.placeholder}
                  id={phone.name}
                  ref={phoneRef}
                  onKeyDown={phoneNumberFormatter}
                  name={phone.name}
                  value={formState.phone}
               />

               {errors.phone && <span className="Form-error">{errors.phone}</span>}
            </div>
            <div className="contactFormCont__InputArea__item">
               <label htmlFor={service.name}>{service.label}</label>
               <div className="select-service">
                  <select
                     id={service.name}
                     onInput={validateSelect}
                     name="service"
                     value={formState.service}
                     placeholder={service.placeholder}
                  >
                     <option value="" disabled>
                        {service.placeholder}
                     </option>
                     {services.map((item, index) => (
                        <option className="" key={index}>
                           {MejorarText(item)}
                        </option>
                     ))}
                  </select>
                  {errors.service && <span className="Form-error">{errors.service}</span>}
               </div>
            </div>
         </div>

         <div className="contactFormCont__TextArea">
            <label htmlFor={message.name}>{message.label}</label>
            <textarea
               value={formState.message}
               id={message.name}
               onInput={handleInput}
               name={message.name}
               placeholder={message.placeholder}
            ></textarea>
         </div>

         <div className="contactFormCont__ContainerCatcha">
            <ReCAPTCHA sitekey={captchaKey} onChange={onChangeRecaptcha} ref={captchaRef} />
            {errors.captcha && <p className="Form-error">{errors.captcha}</p>}
         </div>

         <div className="ButtonArea">
            <Button className="ButtonArea__boton" icon="icon-arrows">
               {multilanguage.lbl_send}
            </Button>

            {sending && <Loader />}
         </div>

         <div className="messages">
            {responseMessage && (
               <span className={`feedback-message init ${failure && "failure"}`}>{responseMessage}</span>
            )}
         </div>
      </form>
   );
}
