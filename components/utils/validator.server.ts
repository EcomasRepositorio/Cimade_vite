export const validateEmail = (email: string): string | undefined => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Ingrese un correo electrónico válido";
    }
    return undefined; // No hay errores de validación
  };

export const validatepassword = (password: string): string | undefined => {
    if (password.length < 3) {
      return "Ingresar contraseña valida";
    }
};