import React, { useState, useEffect } from "react";
import TextInput from "@/shared/components/TextInput/index";
import PasswordInput from "@/shared/components/PasswordInput/index";
import Button from "@/shared/components/Button/index";
import styles from "./styles.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore, selectIsAuthenticated } from "@/store/authStore";
import { authApi } from "@/api/auth.api";
import { UserRegistration } from "@/types/user.types";

const Register = () => {
  const isAuthenticated = useAuthStore(selectIsAuthenticated);
  const navigate = useNavigate();

  const [form, setForm] = useState<UserRegistration>({
    userId: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [loading, setLoading] = useState(false);

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "firstName":
        if (!value) return "Введите имя";
        break;
      case "lastName":
        if (!value) return "Введите фамилию";
        break;
      case "email":
        if (!value) return "Введите email";
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value))
          return "Некорректный email";
        break;
      case "password":
        if (!value) return "Введите пароль";
        if (value.length < 6) return "Пароль должен быть не менее 6 символов";
        break;
      case "confirmPassword":
        if (!value) return "Повторите пароль";
        if (value !== form.password) return "Пароли не совпадают";
        break;
      default:
        return "";
    }
    return "";
  };

  const handleInputChange =
    (field: keyof UserRegistration) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev: UserRegistration) => ({
        ...prev,
        [field]: e.target.value,
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors: { [key: string]: string } = {};

    // Mark all fields as touched
    const touchedFields = {
      firstName: true,
      lastName: true,
      email: true,
      password: true,
      confirmPassword: true,
    };
    setTouched(touchedFields);

    // Validate all fields
    Object.entries({
      ...form,
      confirmPassword,
    }).forEach(([name, value]) => {
      const error = validateField(name, String(value));
      if (error) {
        validationErrors[name] = error;
      }
    });

    // Generate a random userId
    form.userId = `user-${Date.now()}`;

    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      try {
        setLoading(true);
        await authApi.register(form);
        setLoading(false);
        navigate("/");
      } catch (error) {
        setLoading(false);
        console.error("Registration error:", error);
        setErrors({
          email: "Ошибка при регистрации",
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
        <div className={styles.title}>Регистрация нового аккаунта</div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Имя</label>
          <div>
            <TextInput
              name="firstName"
              placeholder="Иван"
              value={form.firstName}
              onChange={handleInputChange("firstName")}
              onBlur={handleBlur}
              style={{ marginTop: 6 }}
              error={touched.firstName && !!errors.firstName}
            />
            {touched.firstName && errors.firstName && (
              <div className={styles.errorText}>{errors.firstName}</div>
            )}
          </div>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Фамилия</label>
          <div>
            <TextInput
              name="lastName"
              placeholder="Петров"
              value={form.lastName}
              onChange={handleInputChange("lastName")}
              onBlur={handleBlur}
              style={{ marginTop: 6 }}
              error={touched.lastName && !!errors.lastName}
            />
            {touched.lastName && errors.lastName && (
              <div className={styles.errorText}>{errors.lastName}</div>
            )}
          </div>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Email</label>
          <div>
            <TextInput
              name="email"
              placeholder="example@mail.ru"
              value={form.email}
              onChange={handleInputChange("email")}
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
              onChange={handleInputChange("password")}
              onBlur={handleBlur}
              style={{ marginTop: 6 }}
              error={touched.password && !!errors.password}
            />
            {touched.password && errors.password && (
              <div className={styles.errorText}>{errors.password}</div>
            )}
          </div>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Подтверждение пароля</label>
          <div>
            <PasswordInput
              name="confirmPassword"
              placeholder="********************"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              onBlur={handleBlur}
              style={{ marginTop: 6 }}
              error={touched.confirmPassword && !!errors.confirmPassword}
            />
            {touched.confirmPassword && errors.confirmPassword && (
              <div className={styles.errorText}>{errors.confirmPassword}</div>
            )}
          </div>
        </div>

        <Button type="submit" disabled={loading}>
          {loading ? "Регистрация..." : "Зарегистрироваться"}
        </Button>
      </form>
      <div className={styles.bottomText}>
        Уже есть аккаунт?{" "}
        <Link to="/auth" className={styles.link}>
          Войти
        </Link>
      </div>
    </div>
  );
};

export default Register;
