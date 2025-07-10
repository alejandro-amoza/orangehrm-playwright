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
- Redirecciona correctamente a enlaces externos relacionados

---

## 🧪 Casos de prueba automatizados

📄 Diseños de los CP disponibles en:
https://drive.google.com/drive/folders/1wXV8LiJ1pgFmB4XBzGHhjlaFpYpK4wvf

Casos automatizados:
- CP 01 - Login exitoso
- CP 02 - Login con credenciales inválidas
- CP 03 - Login con campos vacíos
- CP 04 - Solo username
- CP 05 - Solo password
- CP 06 - Redirección al "Forgot your password?"
- CP 07 - Redirección de redes sociales
- CP 08 - Redirección del enlace OrangeHRM, Inc

---

## 🚀 Cómo ejecutar
```bash
git clone https://github.com/alejandro-amoza/orangehrm-playwright-login.git
cd orangehrm-playwright-login
npm install 
npx playwright install
npx playwright test
npx playwright show-report
```

---

## 🙌 Autor
Alejandro Amoza – QA Tester
- [LinkedIn](https://www.linkedin.com/in/alejandro-amoza)
- [Portfolio](https://alejandro-amoza.github.io/portfolio)
