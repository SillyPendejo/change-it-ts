import React, { useState, useEffect } from "react";

interface ChecklistFields {
  firstName: string;
  lastName: string;
  email: string;
  event: string;
  date: string;
}

const ChecklistForm: React.FC = () => {
  const [inputValues, setInputValues] = useState<ChecklistFields>({
    firstName: "",
    lastName: "",
    email: "",
    event: "",
    date: "",
  });
  const [errorValues, setErrorValues] = useState<ChecklistFields>({
    firstName: "",
    lastName: "",
    email: "",
    event: "",
    date: "",
  });

  function isValidText(inputText: string, pattern: RegExp) {
    if (inputText === "") return true;
    return pattern.test(inputText);
  }

  function nameErrorText(input: string, inputName: string) {
    if (!input) return `Empty ${inputName}`;
    if (isValidText(input, / /)) {
      return `Your ${inputName} can't have spaces`;
    }
    if (!isValidText(input, /^[a-zA-Z]+$/)) {
      return `Your ${inputName} can only have letters of the alphabet`;
    }
    if (!isValidText(input, /^[A-Z]/)) {
      return `Your ${inputName} should start with a capital letter`;
    }
    if (isValidText(input, /^[A-Z]{2,}/)) {
      return `Your ${inputName} should start with only 1 capital letter`;
    }
    if (isValidText(input, /^[A-Z]$/)) {
      return `Your ${inputName} needs to have at least 2 characters`;
    }
    if (isValidText(input, /^[a-zA-Z]+$/)) {
      return `Your ${inputName} has more than 1 capital letter`;
    }
    return `Invalid ${inputName}`;
  }

  const handleChangeFistName = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues((prevInputs) => ({
      ...prevInputs,
      firstName: target.value,
    }));
  };
  const handleFocusFirstName = () => {
    setErrorValues((prevList) => ({ ...prevList, firstName: "" }));
  };
  const validateFirstName = () => {
    if (!isValidText(inputValues.firstName, /^[A-Z][a-z]+$/)) {
      setErrorValues((prevList) => ({
        ...prevList,
        firstName: nameErrorText(inputValues.firstName, "name"),
      }));
    } else {
      setErrorValues((prevList) => ({ ...prevList, firstName: "" }));
    }
  };
  useEffect(() => {
    validateFirstName();
  }, [inputValues.firstName]);

  const handleChangeLastName = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues((prevInputs) => ({ ...prevInputs, lastName: target.value }));
  };
  const handleFocusLastName = () => {
    setErrorValues((prevList) => ({ ...prevList, lastName: "" }));
  };
  const validateLastName = () => {
    if (!isValidText(inputValues.lastName, /^[A-Z][a-z]+$/)) {
      setErrorValues((prevList) => ({
        ...prevList,
        lastName: nameErrorText(inputValues.lastName, "name"),
      }));
    } else {
      setErrorValues((prevList) => ({ ...prevList, lastName: "" }));
    }
  };
  useEffect(() => {
    validateLastName();
  }, [inputValues.lastName]);

  const handleChangeEmail = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues((prevInputs) => ({ ...prevInputs, email: target.value }));
  };
  const handleFocusEmail = () => {
    setErrorValues((prevList) => ({ ...prevList, email: "" }));
  };
  const validateEmail = () => {
    if (
      !isValidText(
        inputValues.email,
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      setErrorValues((prevList) => ({
        ...prevList,
        email: "Enter a valid email address",
      }));
    } else {
      setErrorValues((prevList) => ({ ...prevList, email: "" }));
    }
  };
  useEffect(() => {
    validateEmail();
  }, [inputValues.email]);

  const options = [
    "Marriage",
    "Divorce",
    "Marriage again",
    "Divorce 2: Electric Boogaloo",
  ];
  const eventOptions = options.map((option) => (
    <option className="checklist__option" value={option} key={option}>
      {option}
    </option>
  ));
  const handleChangeEvent = ({
    target,
  }: React.ChangeEvent<HTMLSelectElement>) => {
    setInputValues((prevInputs) => ({ ...prevInputs, event: target.value }));
  };
  const handleFocusEvent = () => {
    setErrorValues((prevList) => ({
      ...prevList,
      event: "",
    }));
  };

  function isValidDate(inputDate: string) {
    const now = Date.now();

    if (inputDate === "") return true;

    const inputDateNumber = Date.parse(inputDate);
    return inputDateNumber < now;
  }
  const handleChangeDate = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues((prevInputs) => ({ ...prevInputs, date: target.value }));
  };
  const validateDate = () => {
    if (!isValidDate(inputValues.date)) {
      setErrorValues((prevList) => ({
        ...prevList,
        date: "Date can't be later than today",
      }));
    } else {
      setErrorValues((prevList) => ({ ...prevList, date: "" }));
    }
  };
  useEffect(() => {
    validateDate();
  }, [inputValues.date]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const stateValues = Object.values(inputValues);
    const stateNames = Object.keys(inputValues);

    e.preventDefault();

    validateFirstName();
    validateLastName();
    validateEmail();
    validateDate();

    let isFormFilled = true;
    stateValues.forEach((inputState, index) => {
      if (inputState === "") {
        isFormFilled = false;
        setErrorValues((prevList) => ({
          ...prevList,
          [stateNames[index]]: "Required field",
        }));
      }
    });
    if (!isFormFilled) return;

    let isFormValid = true;
    Object.values(errorValues).forEach((errorValue) => {
      if (errorValue !== "") isFormValid = false;
    });
    if (!isFormValid) return;

    stateValues.forEach((inputState, index) =>
      console.log(`${stateNames[index]}: ${inputState}`)
    );
  };

  const classesFirstName =
    errorValues.firstName === ""
      ? "checklist__input"
      : "checklist__input checklist__error";
  const classesLastName =
    errorValues.lastName === ""
      ? "checklist__input"
      : "checklist__input checklist__error";
  const classesEmail =
    errorValues.email === ""
      ? "checklist__input"
      : "checklist__input checklist__error";
  const classesEvent =
    errorValues.event === ""
      ? "checklist__select"
      : "checklist__select checklist__error";
  const classesDate =
    errorValues.date === ""
      ? "checklist__input"
      : "checklist__input checklist__error";

  return (
    <form className="checklist__form_element" onSubmit={handleSubmit}>
      <label className="checklist__label" htmlFor="name">
        First Name
      </label>
      <input
        className={classesFirstName}
        onChange={handleChangeFistName}
        onFocus={handleFocusFirstName}
        value={inputValues.firstName}
        type="text"
        name="name"
        id="name"
        placeholder="Enter Your First Name"
      />
      {errorValues.firstName !== "" && (
        <div className="checklist__error_msg">{errorValues.firstName}</div>
      )}
      <label className="checklist__label" htmlFor="lastname">
        Last Name
      </label>
      <input
        className={classesLastName}
        onChange={handleChangeLastName}
        onFocus={handleFocusLastName}
        value={inputValues.lastName}
        type="text"
        name="lastname"
        id="lastname"
        placeholder="Enter Your Last Name"
      />
      {errorValues.lastName !== "" && (
        <div className="checklist__error_msg">{errorValues.lastName}</div>
      )}
      <label className="checklist__label" htmlFor="email">
        Email
      </label>
      <input
        className={classesEmail}
        onChange={handleChangeEmail}
        onFocus={handleFocusEmail}
        value={inputValues.email}
        type="text"
        name="email"
        id="email"
        placeholder="Enter Your Email"
      />
      {errorValues.email !== "" && (
        <div className="checklist__error_msg">{errorValues.email}</div>
      )}
      <label className="checklist__label" htmlFor="event">
        Life Event
      </label>
      <select
        className={classesEvent}
        onInput={handleChangeEvent}
        onFocus={handleFocusEvent}
        defaultValue={"Select Life Event"}
        name="event"
        id="event"
      >
        <option disabled={true}>Select Life Event</option>
        {eventOptions}
      </select>
      {errorValues.event !== "" && (
        <div className="checklist__error_msg">{errorValues.event}</div>
      )}
      <label className="checklist__label" htmlFor="date">
        Life Event Date
      </label>
      <input
        className={classesDate}
        onChange={handleChangeDate}
        value={inputValues.date}
        type="date"
        name="date"
        id="date"
      />
      {errorValues.date !== "" && (
        <div className="checklist__error_msg">{errorValues.date}</div>
      )}
      <span className="checklist__policy">
        By submitting your details you agree with our{" "}
        <a className="checklist__policy_link" href="#">
          Privacy Policy
        </a>
        .
      </span>
      <button className="checklist__button button" type="submit">
        Download
      </button>
    </form>
  );
};

export default ChecklistForm;
