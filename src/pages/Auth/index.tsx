import React, { useState } from "react";
import TextInput from "@/shared/components/textInput/index";
import PasswordInput from "@/shared/components/passwordInput/index";
import Button from "@/shared/components/button/index";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

const Auth = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "email":
        if (!value) return "Введите email";
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) return "Некорректный email";
        break;
      case "password":
        if (!value) return "Введите пароль";
        if (value.length < 6) return "Пароль слишком короткий";
        break;
      default:
        return "";
    }
    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;
    setForm((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
      ...(name === "password" && { confirmPassword: validateField("confirmPassword", form.confirmPassword) }),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors: { [key: string]: string } = {};
    
    // Mark all fields as touched
    const touchedFields = Object.keys(form).reduce((acc, field) => ({
      ...acc,
      [field]: true
    }), {});
    setTouched(touchedFields);

    // Validate all fields
    Object.entries(form).forEach(([name, value]) => {
      if (name === 'email' || name === 'password') {
        const error = validateField(name, String(value));
        if (error) {
          validationErrors[name] = error;
        }
      }
    });

    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted successfully");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
      <div className={styles.logo}>
          <img src="/src/shared/assets/logo/Dark.svg" alt="Logo" />
        </div>
        <div className={styles.title}>
          Пожалуйста, введите ваши данные для входа
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Адрес электронной почты</label>
          <div>
            <TextInput
              name="email"
              placeholder="force@adresseemail.com"
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              style={{ marginTop: 6 }}
              error={touched.email && !!errors.email}
            />
            {touched.email && errors.email && <div className={styles.errorText}>{errors.email}</div>}
          </div>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Пароль</label>
          <div>
            <PasswordInput
              name="password"
              placeholder="********************"
              value={form.password}
              onChange={handleChange}
              onBlur={handleBlur}
              style={{ marginTop: 6  }}
              error={touched.password && !!errors.password}
            />
            {touched.password && errors.password && <div className={styles.errorText}>{errors.password}</div>}
          </div>
        </div>
        <Button type="submit">Войти</Button>
      </form>
      <div className={styles.bottomText}>
        У вас нет аккаунта? <Link to="/register" className={styles.link}>Зарегистрироваться</Link>
      </div>
    </div>
  );
};

export default Auth;