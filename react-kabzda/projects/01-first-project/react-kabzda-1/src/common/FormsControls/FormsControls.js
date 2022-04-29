import React from 'react';
import styles from './FormControl.module.css'

const FormControl = ({input, meta : {touched, error}, child, ...props}) => {
    const hasError =  touched && error
    return (
        <div className={styles.formControl + ' ' + (hasError? styles.error : '')}>
            <div>
                 {props.children}
            </div>
           {hasError && <span> Some error </span>}
        </div>
    );
}

export const Select = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><select {...input} {...restProps} /></FormControl>
};

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
};

export const Input   = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>

};

