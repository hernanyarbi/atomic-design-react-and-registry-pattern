# Biblioteca de Componentes React con Atomic Design

Este proyecto demuestra la implementación de la metodología Atomic Design en React, aplicando principios SOLID y mostrando el patrón Registry. Construido con Next.js, TypeScript y Tailwind CSS, sirve como ejemplo práctico de arquitectura moderna en React.

## 🎯 Objetivos del Proyecto

1. **Implementación de Atomic Design**
   - Organizar componentes siguiendo la metodología de Brad Frost
   - Estructurar componentes en átomos, moléculas y organismos
   - Crear una biblioteca de componentes reutilizable y escalable

2. **Aplicación de Principios SOLID**
   - Componentes con responsabilidad única
   - Diseño extensible y mantenible
   - Interfaces consistentes y reutilizables

3. **Ejemplo del Patrón Registry**
   - Registro centralizado de componentes
   - Carga dinámica de componentes
   - Sistema flexible para sustitución de componentes

## 🏗 Estructura del Proyecto

```
src/
  ├── components/
  │   ├── atoms/        # Componentes básicos (Button, Card, Container)
  │   ├── molecules/    # Combinaciones de átomos
  │   └── organisms/    # Componentes complejos
  ├── registry/         # Implementación del registro de componentes
  └── app/             # Directorio de Next.js
```

## 💡 Patrones de Diseño

### Atomic Design
- **Átomos**: Componentes básicos y fundamentales
- **Moléculas**: Grupos de átomos funcionando juntos
- **Organismos**: Componentes complejos y secciones completas

### Patrón Registry
El patrón registry se implementará para:
- Gestionar componentes de forma centralizada
- Permitir carga dinámica de componentes
- Facilitar pruebas A/B
- Mantener un sistema flexible y mantenible

## 🛠 Tecnologías Utilizadas

- React + Next.js
- TypeScript
- Tailwind CSS
- Biome (para formateo de código)

## 📚 Recursos de Aprendizaje

- [Atomic Design por Brad Frost](https://atomicdesign.bradfrost.com/)
- [Patrón Registry en TypeScript](https://www.typescriptlang.org/docs/handbook/decorators.html)
- [Atomic Design en React](https://bradfrost.com/blog/post/atomic-web-design/)

