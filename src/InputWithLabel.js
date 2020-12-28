import React from 'react';
import styled from 'styled-components';
import styles from './App.module.css';

const StyledLabel = styled.label`
  border-top: 1px solid #171212;
  border-left: 1px solid #171212;
  padding-left: 5px;
  font-size: 24px;
`;

const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid #171212;
  background-color: transparent;

  font-size: 24px;
`;

const InputWithLabel = ({
    id,
    value,
    type='text',
    onInputChange,
    isFocused,
    children,
  }) => {
    //A: create a ref with React hook
    const inputRef = React.useRef(null);
  
    //C: opt into React's lifecycle with hooks
    React.useEffect(() => {
      if(isFocused && inputRef.current) {
        //D
        inputRef.current.focus();
      }
    }, [isFocused]);
    return (
      <>
        <StyledLabel htmlFor={id}>{children}</StyledLabel>
        &nbsp;
        <StyledInput
        //B ref is passed to the input field
          ref={inputRef} 
          id={id}
          type={type}
          value={value}
          autoFocus={isFocused}
          onChange={onInputChange}
          className={styles.input}
        />
      </>
    );
  };

  export default InputWithLabel;