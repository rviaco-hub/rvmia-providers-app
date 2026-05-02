export const validateLogin = (email: string, password: string) => {
  if (!email || !password) {
    return "Todos los campos son obligatorios";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return "Email inválido";
  }

  if (password.length < 6) {
    return "La contraseña debe tener al menos 6 caracteres";
  }

  return null; // ✅ válido
};

export const validateRegister = (
  name: string,
  email: string,
  password: string
) => {
  if (!name || !email || !password) {
    return "Todos los campos son obligatorios";
  }

  if (name.length < 3) {
    return "El nombre debe tener al menos 3 caracteres";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return "Email inválido";
  }

  if (password.length < 6) {
    return "La contraseña debe tener al menos 6 caracteres";
  }

  return null;
};