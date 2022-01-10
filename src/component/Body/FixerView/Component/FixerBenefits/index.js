import React from "react";
import { Grid } from "@material-ui/core";

const Name = () => {
  return (
    <>
      <div className={"my-5"}>
        <div className={'headingCenter mb-2'}>
          <h1 className={"heading-Title"}>
            How Uncle Fixer does benefit a Fixer?
          </h1>
          <div className={"bar"} />
        </div>
        <div className={"text-About-fixer container m-auto"}>
          The word “Uncle” reflects our desire to provide facilities to fixers.
          Uncle Fixer is a <b className={"spanTheme"}>freelancing platform</b>{" "}
          where fixers can easily get an opportunity of good earning with a bonus
          as well. You can accomplish it if you are trained, professional, or
          even if you have no talents. However, as a laborer, you can be
          valuable. Simply sign up as a Fixer with Uncle Fixer and you’ll have
          access to plenty of earning opportunities.{" "}
        </div>
      </div>
    </>
  );
};
export default Name;
