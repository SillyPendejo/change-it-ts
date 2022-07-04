import React, { Dispatch } from "react";
import { FormState } from "./Blog";

interface BlogFormProps {
  formState: FormState;
  setFormState: Dispatch<React.SetStateAction<FormState>>;
}

const BlogForm: React.FC<BlogFormProps> = (props) => {
  const { formState, setFormState } = props;

  const handleChangeTitle = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prevState) => ({
      ...prevState,
      title: target.value,
    }));
  };
  const handleChangeText = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prevState) => ({
      ...prevState,
      text: target.value,
    }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formState.title === "") {
      setFormState((prevState) => ({
        ...prevState,
        isError: true,
      }));
      return;
    }
    setFormState((prevState) => ({
      ...prevState,
      date: Date.now(),
    }));
  };
  const handleFocus = () => {
    setFormState((prevState) => ({
      ...prevState,
      isError: false,
    }));
  };

  const classesInput =
    "blog__input blog__input_header checklist__input" +
    (formState.isError ? " blog__input_error" : "");
  const placeholderTitleInput = formState.isError
    ? "Empty title"
    : "Name your story...";
  const placeholderTextInput = formState.isError
    ? "Write a title above"
    : "Tell us what happened...";

  return (
    <form className="blog block block_white" id="blog" onSubmit={handleSubmit}>
      <div className="blog__inputarea">
        <label className="checklist__label blog__label" htmlFor="blogtitle">
          Title:
        </label>
        <input
          className={classesInput}
          type="text"
          id="blogtitle"
          placeholder={placeholderTitleInput}
          value={formState.title}
          onChange={handleChangeTitle}
          onFocus={handleFocus}
        />
        <input
          className={classesInput}
          type="text"
          id="blogtext"
          placeholder={placeholderTextInput}
          value={formState.text}
          onChange={handleChangeText}
          onFocus={handleFocus}
        ></input>
      </div>
      <button className="story__button button">Post your story</button>
    </form>
  );
};

export default BlogForm;
