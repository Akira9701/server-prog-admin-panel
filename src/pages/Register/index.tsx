import React, { useState } from "react";
import TextInput from "@/shared/Components/TextInput/index";
import PasswordInput from "@/shared/Components/PasswordInput/index";
import Button from "@/shared/Components/Button/index";
import styles from "./styles.module.scss";
import Switcher from "@/shared/Components/Switcher/index";
import { Link } from "react-router-dom";


const Register = () => {
  const [form, setForm] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    terms: false,
    clinicName: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "email":
        if (!value) return "Введите email";
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) return "Некорректный email";
        break;
      case "phone":
        if (!value) return "Введите номер телефона";
        if (!/^\+?[0-9]{10,12}$/.test(value)) return "Некорректный номер телефона";
        break;
      case "password":
        if (!value) return "Введите пароль";
        if (value.length < 6) return "Пароль слишком короткий";
        break;
      case "confirmPassword":
        if (value !== form.password) return "Пароли не совпадают";
        break;
      case "clinicName":
        if (!form.terms && !value) return "Введите название клиники";
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
    
    Object.entries(form).forEach(([name, value]) => {
      const error = validateField(name, String(value));
      if (error) {
        validationErrors[name] = error;
      }
    });

    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src="/src/shared/Logo/Dark.svg" alt="Logo" />
        </div>
        <div className={styles.title}>
          Пожалуйста, введите ваши данные для регистрации
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Адрес электронной почты</label>
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
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Номер телефона</label>
          <TextInput
            name="phone"
            placeholder="(+7) 696 88 77 55"
            value={form.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{ marginTop: 6 }}
            error={touched.phone && !!errors.phone}
          />
          {touched.phone && errors.phone && <div className={styles.errorText}>{errors.phone}</div>}
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
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Подтвердите свой пароль</label>
          <PasswordInput
            name="confirmPassword"
            placeholder="********************"
            value={form.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{ marginTop: 6 }}
            error={touched.confirmPassword && !!errors.confirmPassword}
          />
          {touched.confirmPassword && errors.confirmPassword && <div className={styles.errorText}>{errors.confirmPassword}</div>}
        </div>
        <div className={styles.formGroup}>
          <div className={styles.switcherCenter}>
            <span>Клиника</span>
            <Switcher
              name="terms"
              checked={form.terms}
              onChange={handleChange}
            />
            <span>Частный врач</span>
          </div>
        </div>
        {!form.terms && (
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Название клиники</label>
            <TextInput
              name="clinicName"
              placeholder="Введите название клиники"
              value={form.clinicName || ''}
              onChange={handleChange}
              onBlur={handleBlur}
              style={{ marginTop: 6 }}
              error={touched.clinicName && !!errors.clinicName}
            />
            {touched.clinicName && errors.clinicName && <div className={styles.errorText}>{errors.clinicName}</div>}
          </div>
        )}
        <Button type="submit">Зарегистрироваться</Button>
      </form>
      <div className={styles.bottomText}>
        У вас уже есть аккаунт? <Link to="/auth" className={styles.link}>Войти</Link>
      </div>
    </div>
  );
};

export default Register;