export interface TYPE_FIELD_PROPS {
   name: RegExp;
   // last_name: RegExp;
   email: RegExp;
   any: RegExp;
   phone: RegExp;
   captcha: RegExp;
}

// Expresiones regulares para validaciones de formulario

export const TYPE_FIELD: TYPE_FIELD_PROPS = {
   name: /[a-z]{3,30}[\s]{0,1}[a-z]{0,30}[\s]{0,1}[a-z]{0,30}/i,
   // last_name: /[a-z]{3,30}[\s]{0,1}[a-z]{0,30}[\s]{0,1}[a-z]{0,30}/i,
   any: /[\w]+/i,
   phone: /^(1\s?)?(\d{3}|\(\d{3}\))[\s-]?\d{3}[\s-]?\d{4}$/,
   email: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
   captcha: /[\w]+/i,
};

export interface InitialFormState {
   name: string;
   // last_name: string;
   email: string;
   phone: string;
   service: string;
   message: string;
   captcha: string;
}

export interface InitialFormErrors {
   name: string;
   // last_name: string;
   email: string;
   phone: string;
   service: string;
   captcha: string;
}

// Estado inicial del formulario

export const initialFormState: InitialFormState = {
   name: "",
   // last_name: "",
   email: "",
   phone: "",
   service: "",
   message: "",
   captcha: "",
};

// Campos del formulario que no pueden estar vacios

export const initialFormErrors: InitialFormErrors = {
   name: "",
   // last_name: "",
   email: "",
   phone: "",
   service: "",
   captcha: "",
};
