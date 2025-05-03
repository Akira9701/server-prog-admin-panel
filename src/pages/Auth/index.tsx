import React, { useState, useEffect } from "react";
import TextInput from "@/shared/components/TextInput/index";
import PasswordInput from "@/shared/components/PasswordInput/index";
import Button from "@/shared/components/Button/index";
import styles from "./styles.module.scss";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { clinicMocks } from "@/shared/mocks/clinic.mocks";
import { vetMocks } from "@/shared/mocks/vet.mocks";
import {
  useAuthStore,
  selectIsAuthenticated,
  loginSuccess,
} from "@/store/authStore";
import { User } from "@/types/user.types";

const Auth = () => {
  const isAuthenticated = useAuthStore(selectIsAuthenticated);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, from]);

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "email":
        if (!value) return "Введите email";
        break;
      case "password":
        if (!value) return "Введите пароль";
        break;
      default:
        return "";
    }
    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
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
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors: { [key: string]: string } = {};

    const touchedFields = Object.keys(form).reduce(
      (acc, field) => ({
        ...acc,
        [field]: true,
      }),
      {}
    );
    setTouched(touchedFields);

    Object.entries(form).forEach(([name, value]) => {
      if (name === "email" || name === "password") {
        const error = validateField(name, String(value));
        if (error) {
          validationErrors[name] = error;
        }
      }
    });

    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      try {
        // Try to find a matching clinic
        const foundClinic = clinicMocks.find(
          (c) => c.email === form.email && c.password === form.password
        );

        // Try to find a matching vet
        const foundVet = vetMocks.find(
          (v) => v.email === form.email && v.password === form.password
        );

        // Determine which user was found
        let user: User | null = null;
        if (foundClinic) {
          // Convert clinic to User type for auth store
          user = {
            id: foundClinic.id,
            name: foundClinic.name,
            email: foundClinic.email,
            password: foundClinic.password || "", // Ensure string
            role: "clinic",
            createdAt: foundClinic.createdAt || new Date().toISOString(),
          };
        } else if (foundVet) {
          // Convert vet to User type for auth store
          user = {
            id: foundVet.id,
            firstName: foundVet.firstName,
            lastName: foundVet.lastName,
            email: foundVet.email,
            password: foundVet.password || "", // Ensure string
            role: "doctor",
            createdAt: foundVet.createdAt || new Date().toISOString(),
          };
        }

        if (user) {
          loginSuccess(user, "mock-token");
          navigate(from, { replace: true });
        } else {
          setErrors({
            email: "Неверный email или пароль",
            password: "Неверный email или пароль",
          });
        }
      } catch (error) {
        console.error("Auth error:", error);
        setErrors({
          email: "Произошла ошибка при входе",
          password: "Произошла ошибка при входе",
        });
      }
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
              placeholder="example@mail.ru"
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              style={{ marginTop: 6 }}
              error={touched.email && !!errors.email}
            />
            {touched.email && errors.email && (
              <div className={styles.errorText}>{errors.email}</div>
            )}
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
              style={{ marginTop: 6 }}
              error={touched.password && !!errors.password}
            />
            {touched.password && errors.password && (
              <div className={styles.errorText}>{errors.password}</div>
            )}
          </div>
        </div>
        <Button type="submit">Войти</Button>
      </form>
      <div className={styles.bottomText}>
        У вас нет аккаунта?{" "}
        <Link to="/register" className={styles.link}>
          Зарегистрироваться
        </Link>
      </div>
      <div className={styles.testCredentials}>
        <p>Тестовые аккаунты:</p>
        <p>Клиника: clinic@mail.ru / clinic</p>
        <p>Врач: medic@mail.ru / medic</p>
      </div>
    </div>
  );
};

export default Auth;
