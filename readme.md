# 🧪 OrangeHRM - Automatización de Login con Playwright

Este proyecto automatiza pruebas E2E sobre el proceso de login en el sitio de demostración de **OrangeHRM**, utilizando **Playwright** como herramienta principal de testing.

> URL del sitio: [https://opensource-demo.orangehrmlive.com](https://opensource-demo.orangehrmlive.com)

---

## 🔧 Tecnologías utilizadas

- [Playwright](https://playwright.dev/)
- TypeScript / JavaScript
- Node.js (v18+ recomendado)
- HTML report (nativo de Playwright)

---

## 🎯 Objetivo

Automatizar los flujos de login más comunes para validar que el sistema:
- Permite el acceso con credenciales válidas
- Muestra errores adecuados con credenciales inválidas o vacías

---

## 🧪 Casos de prueba automatizados

1. ✅ **Login exitoso**
   - Usuario: `Admin`
   - Contraseña: `admin123`
   - Validación: redirección al Dashboard y presencia del texto `Dashboard`
2. ❌ **Login con usuario inválido**
   - Validación: mensaje de error
3. ⚠️ **Login con campos vacíos**
   - Validación: mensajes de validación requeridos

---

## 📁 Estructura del proyecto

## 🚀 Cómo ejecutar
```bash
git clone https://github.com/alejandro-amoza/orangehrm-playwright-login.git
cd orangehrm-playwright-login
npm install 
npx playwright install
npx playwright test
npx playwright show-report

