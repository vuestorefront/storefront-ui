import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { SfButton, SfFormControl, SfFormError, SfInput, SfFormHelperText, SfFormLabel } from '@storefront-ui/react';

interface Fields {
  email: string;
  password: string;
}

interface FieldError {
  message: string;
}

interface FieldMeta {
  touched: boolean;
}

export default function FormControl() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<Record<keyof Fields, FieldError | null>>({
    email: null,
    password: null,
  });
  const [meta, setMeta] = useState<Record<keyof Fields, FieldMeta>>({
    email: { touched: false },
    password: { touched: false },
  });

  const validate = (values: Fields) => {
    const err: Record<keyof Fields, FieldError | null> = {
      email: null,
      password: null,
    };

    if (!values.email.includes('@')) {
      err.email = {
        message: 'Provide a valid email',
      };
    }
    if (!values.email) {
      err.email = {
        message: 'Email is required',
      };
    }
    if (values.password.length < 10) {
      err.password = {
        message: 'Password must be at least 10 characters',
      };
    }
    if (!values.password) {
      err.password = {
        message: 'Provide strong password',
      };
    }

    setErrors(err);
  };

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setMeta((currMeta) => ({ ...currMeta, email: { touched: true } }));
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setMeta((currMeta) => ({ ...currMeta, password: { touched: true } }));
    setPassword(e.target.value);
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setMeta({ email: { touched: true }, password: { touched: true } });
    validate({ email, password });
  };

  useEffect(() => {
    validate({ email, password });
  }, [email, password]);

  return (
    <div className="max-w-md mx-auto p-4">
      <form onSubmit={submit}>
        <SfFormControl invalid={!!errors.email && meta.email.touched} disabled>
          <SfFormLabel>Email</SfFormLabel>
          <SfInput name="email" value={email} onChange={handleChangeEmail} />
          <SfFormError>{errors.email?.message}</SfFormError>
          <SfFormHelperText>This e-mail will be your username.</SfFormHelperText>
        </SfFormControl>

        <SfFormControl invalid={!!errors.password && meta.password.touched}>
          <SfFormLabel>Password</SfFormLabel>
          <SfInput name="password" value={password} onChange={handleChangePassword} />
          <SfFormError>{errors.password?.message}</SfFormError>
          <SfFormHelperText>Set a strong password with at least 10 characters</SfFormHelperText>
        </SfFormControl>

        {/* Uncontrolled input */}
        <SfInput />

        <SfButton type="submit" className="mt-3">
          Submit
        </SfButton>
      </form>
    </div>
  );
}
