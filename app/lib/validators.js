// lib/validators.js
import { z } from 'zod';

export const registerSchema = z
  .object({
    name: z.string().min(1, 'Full name is required'),
    email: z
      .string()
      .email('Invalid email address')
      .min(1, 'Email is required'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
    passwordConfirm: z
      .string()
      .min(6, 'Confirm password must be at least 6 characters long'),
    phone: z.string().min(1, 'Phone number is required'),
    identityNumber: z.string().min(1, 'Identity number is required'),
  })
  .refine(data => data.password === data.passwordConfirm, {
    message: 'Passwords do not match',
    path: ['passwordConfirm'], // Path to the field to show the error
  });

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

export const updateUserSchema = z.object({
  name: z.string().optional(),
  email: z.string().email('Invalid email').optional(),
  phone: z.string().optional(),
  identityNumber: z.string().optional(),
});
