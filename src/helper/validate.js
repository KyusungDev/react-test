export const isEmail = (value) => value.includes('@');
export const isNotEmpty = (value) => value.trim() !== '';
export const isPassword = (value) => `${value}`.length < 20 && `${value}`.length >= 8;
