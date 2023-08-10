import React, { useRef, useImperativeHandle } from "react";
import classes from "./Input.module.css";
//this is a ref if ref should be accessible from outside
const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();
  const activate = () => {
    inputRef.current.focus();
  }

  //focus will become externally available name. 
  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    }
  })

  //useffect - after the component is rendered
  // useEffect(() => {


  //   inputRef.current.focus();
  // }, []);
  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
}) ;

export default Input;
