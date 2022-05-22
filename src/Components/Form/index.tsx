export const TextInput = ({ handler, touched, hasError, meta }) => (
    <div>
      <input className="form-control" placeholder={`${meta.label}`} {...handler()}/>
      <span style={{color: 'red'}}>
          {touched
          && hasError("required")
          && `${meta.label} is required`}
      </span>
    </div>  
);

export const PasswordInput = ({ handler, touched, hasError, meta }) => (
  <div>
    <input type='password' className="form-control" placeholder={`${meta.label}`} {...handler()}/>
    <span style={{color: 'red'}}>
        {touched
        && hasError("required")
        && `Password is required`}
    </span>
  </div>  
);