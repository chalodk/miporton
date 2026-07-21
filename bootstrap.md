# Brief de landing — Mi portón (Portero digital)

Documento de contexto e indicaciones para diseñar/construir una **landing page de marketing** de la plataforma.  
Pensado para ser entregado a otro agente / otro repositorio. **No es documentación técnica de implementación del producto.**

---

## 1. Qué es el producto (en una frase)

**Mi portón** es un portero digital para comunidades: el residente **sigue llamando como siempre** para abrir el portón, y la comunidad gana **administración simple** y **visibilidad de quién entra y quién no** — como si hubiera un portero humano en la puerta.

Nombre de marca en producto: **Mi portón**.  
Título / claim corto usado en la app: **Portero digital**.  
Producto en producción (app privada): `https://portero.fastmvp.pro`

---

## 2. Insight central (tono de la landing)

La simplicidad es el valor.

- Para el **residente**: no cambia el hábito. Llama y abre. Sin app nueva, sin aprender un flujo distinto.
- Para la **comunidad / administración**: deja de pelearse con listas rígidas y reprogramaciones; administra altas, bajas y deshabilitaciones desde un panel, y ve un historial claro de intentos de acceso.

Metáfora guía del copy y del diseño:

> Es como tener un portero humano en la puerta: reconoce quién puede pasar, anota lo que ocurre y permite decidir quién queda habilitado — sin pedirle al residente que cambie su forma de llegar a casa.

---

## 3. Problema que resuelve

En muchas comunidades (condominios, parcelaciones, eco-parcelas, barrios cerrados) el acceso por teléfono ya existe, pero la gestión suele ser frágil:

- Cada alta o baja de residente implica **reprogramar** o coordinar cambios engorrosos.
- No hay claridad de **quién puede abrir** en un momento dado.
- No hay **registro** útil de intentos de entrada.
- Cuando alguien se va o deja de pagar, deshabilitar el acceso es lento o se olvida.

Mi portón no inventa un nuevo gesto para el residente: **mantiene el flujo conocido** y moderniza la administración detrás.

---

## 4. Cómo contarlo en la landing (sin jerga técnica)

### Para el residente (mensaje simple)

1. Llega a la comunidad.  
2. **Llama**, como siempre.  
3. Si está habilitado, **el portón abre**.

Nada más. No explicar mecanismos internos.

### Para quien administra (mensaje simple)

1. Entra al panel.  
2. Administra la **comunidad** (quiénes pueden abrir).  
3. Habilita o deshabilita residentes cuando haga falta.  
4. Revisa el **historial**: quién intentó entrar, si era miembro, si estaba deshabilitado o si era un número desconocido.

### Regla de oro para el copy

**No explicar** en la landing:

- Que existan “dos números” de teléfono.
- Callbacks, DID, centralitas, webhooks, PBX, VoIP, “sistema valida y dispara”.
- Diagramas técnicos de origen/destino de llamada.

Eso confunde y hace parecer el producto más complejo de lo que se siente usarlo.

Sí explicar:

- Mismo gesto del residente.
- Más control y visibilidad para la comunidad.
- Sensación de portero humano: reconoce, decide, registra.

---

## 5. Público objetivo (hipótesis de producto)

| Segmento | Por qué encaja |
| --- | --- |
| Administradores de comunidades / parcelaciones / eco-parcelas | Necesitan ordenar acceso sin fricción para residentes |
| Comités / conserjería / operadores de acceso | Altas/bajas y trazabilidad |
| Integradores de porteros telefónicos | Pueden ofrecer “portero digital” como valor agregado |

Geografía implícita: **Chile**, copy en español.

Personas:

- **Comprador / decisor:** administrador o responsable de la comunidad.
- **Usuario diario (residente):** solo llama; no usa el panel.
- **Operador del panel:** admin de comunidad o super admin.

---

## 6. Propuesta de valor (mensajes clave)

Usar en hero / bullets (español, tono humano y claro):

1. **El residente no cambia nada** — sigue llamando como siempre.
2. **La comunidad sí gana control** — altas, bajas y deshabilitación sin drama.
3. **Visibilidad de entrada** — historial de quién intentó abrir.
4. **Como un portero humano** — reconoce, habilita o no, y deja registro.
5. **Sin app para el residente** — cero fricción de adopción.
6. **Carga masiva** — incorporar muchos residentes de una vez (CSV/XLSX).

Anti-mensajes (evitar):

- No venderlo como “app de vecinos” ni red social de condominio.
- No centrar la landing en telefonía técnica, WebPhone o infraestructura.
- No prometer Bluetooth, QR, face-id o “smart lock”.
- No hablar de IA salvo pedido explícito.
- No enseñar el “cómo funciona por dentro”.

---

## 7. Features reales a destacar (traducidas a beneficio)

### Lo que sí se puede decir

- Panel web para administrar la comunidad.
- Lista de residentes autorizados.
- Habilitar / deshabilitar sin borrar.
- Historial de intentos de acceso (autorizado, deshabilitado, desconocido).
- Importar residentes desde archivo.
- Roles: administración general vs administración de una comunidad/portón.

### Para residentes (una línea)

Llaman como siempre. Si están autorizados, entran.

### Fuera de la landing (contexto interno para el agente; no usar en copy)

La app real usa telefonía e integraciones de infraestructura. Eso **no debe aparecer** en la narrativa de marketing. Si hace falta mencionarlo en un FAQ muy técnico, solo bajo demanda del negocio.

---

## 8. Estructura recomendada de la landing

Una sola página (o home + legal mínimo). Idioma: **español (Chile)**.

### Viewport 1 — Hero

Composición única, brand-first:

- Marca grande: **Mi portón** (o **Portero digital** como subtítulo, no al revés).
- Un headline.
- Una frase de apoyo.
- Un grupo de CTA (primario + secundario).
- Visual dominante full-bleed: portón, acceso de comunidad, atmósfera humana — no collage de cards ni diagramas de sistema.

Sugerencias de headline (elegir una dirección):

- “El residente llama como siempre. La comunidad ve y controla.”
- “Como un portero en la puerta — sin cambiar el hábito del residente.”
- “Administra quién abre el portón. Sin apps nuevas para nadie.”

CTA sugeridos:

- Primario: **Solicitar demo** / **Hablar con nosotros**.
- Secundario: **Cómo se vive** (anchor; no “arquitectura” ni “tecnología”).

No meter en el primer viewport: stats inventados, pricing, tablas, features en pills, badges flotantes.

### Sección 2 — Cómo se vive (no “cómo funciona el sistema”)

Tres pasos humanos:

1. El residente llega y **llama, como siempre**.  
2. Si está autorizado, **el portón abre**.  
3. La comunidad queda con **registro y control**.

Opcional: un bloque “Antes / Ahora” (reprogramaciones y ceguera vs panel + historial).

### Sección 3 — Para la administración

Idea: “La comunidad gana un portero que no se cansa de anotar.”

- Quién puede abrir y quién no.
- Deshabilitar en minutos cuando alguien se va.
- Historial de intentos.
- Carga masiva de residentes.
- Admins por comunidad/portón.

### Sección 4 — Por qué importa

Dolor: rotación de residentes, olvidos de baja, falta de visibilidad, sensación de acceso “a ciegas”.  
Promesa: orden + tranquilidad + mismo flujo para quien vive ahí.

### Sección 5 — Para quién es

Parcelaciones, eco-comunidades, condominios y barrios cerrados que ya abren con llamada telefónica (o quieren ese modelo simple).

### Sección 6 — CTA final

Repetir demo/contacto. Cerrar con la metáfora del portero humano y la promesa de no cambiar el hábito del residente.

### Footer

- Marca
- Contacto
- Legales si aplica
- No exponer el panel privado como “producto público” sin contexto

---

## 9. Dirección visual

Referencia del panel actual (coherencia, no clon):

| Token | Valor actual |
| --- | --- |
| Fondo | `#f4f7fb` / gradientes fríos slate-azulados |
| Texto | `#0f172a` |
| Acento | `#1e3a5f` (navy) |
| Tipografía | IBM Plex Sans + IBM Plex Mono |

Indicaciones:

- Estética **serena, confiable, humana, de acceso físico**.
- Evitar SaaS púrpura genérico, cream+terracotta cliché, dark neon, pills excesivos.
- Imágenes: portón, llegada a casa, comunidad, persona con teléfono de forma cotidiana — **no** racks, diagramas de llamadas ni pantallas de centralita.
- Motion sobrio: 2–3 gestos (hero, pasos, CTA).
- Una idea por sección.

---

## 10. CTAs y conversión

Sin pricing público aún → convertir a **demo / contacto**, no a self-serve abierto.

Campos sugeridos:

- Nombre
- Comunidad / proyecto
- Ciudad / región
- Teléfono / WhatsApp
- Email
- Cantidad aproximada de residentes (opcional)
- Mensaje (opcional)

---

## 11. Contenido que NO inventar

- Precios o planes.
- Números de clientes sin dato real.
- QR, Bluetooth, cámaras, Google Home, Alexa.
- Que el residente “administra su acceso en una app”.
- Explicaciones técnicas del cableado telefónico del acceso.

---

## 12. Vocabulario preferido

| Usar | Evitar en la landing |
| --- | --- |
| Comunidad | Tenant, workspace |
| Residente / autorizado | User, caller ID |
| Historial de acceso | Logs, webhook events |
| Habilitar / deshabilitar | Soft delete, ban |
| Llama como siempre | Valida DID / callback / PBX |
| Portero digital / portero humano | Smart lock, IoT gateway |
| Quién entró / quién intentó | Originación, predicted callback |

---

## 13. Mapa mental (solo para el agente; no ilustrar así en la landing)

```text
Residente: mismo hábito (llamar) → abre si está autorizado
Comunidad: panel → administra autorizados → ve historial
Sensación: portero humano en la puerta
```

La landing vende la **experiencia**. La infraestructura queda fuera de escena.

---

## 14. Entregables esperados del otro agente / repo

1. Landing responsive.
2. Copy en español alineado a este tono (simplicidad + portero humano).
3. Hero brand-first + secciones.
4. CTA/formulario de demo/contacto.
5. Tokens visuales documentados.
6. SEO básico (title, description, OG).
7. README corto del repo.

---

## 15. Criterios de aceptación

- [ ] En 5 segundos se entiende: “el residente no cambia; la comunidad controla y ve”.
- [ ] La metáfora del **portero humano** se siente, sin ser cursi.
- [ ] **No** se explica arquitectura telefónica ni “dos números”.
- [ ] La marca **Mi portón** domina el primer viewport.
- [ ] CTA claro de demo/contacto.
- [ ] Mobile usable.
- [ ] Sin claims inventados ni features inexistentes.

---

## 16. Contexto de negocio / estado actual

- Producto **en uso real** (panel privado).
- App: `https://portero.fastmvp.pro` (privada; no es la landing).
- Dominio de marketing: `https://miporton.cl`
- Branding liviano: IBM Plex, acento `#1e3a5f`.

---

## 17. Preguntas abiertas (defaults)

1. Nombre: **Mi portón** (marca) / **Portero digital** (claim).  
2. CTA: formulario + “Te contactamos”.  
3. Pricing en landing: no.  
4. Público: comunidades/parcelaciones con acceso telefónico.  
5. Logo: wordmark tipográfico hasta tener logo oficial.

---

## 18. Prompt corto para el agente diseñador/desarrollador

> Diseña e implementa una landing en español (Chile) para **Mi portón**.  
> Idea fuerza: el residente **sigue llamando como siempre**; la comunidad gana administración sencilla y visibilidad de acceso, **como un portero humano en la puerta**.  
> No expliques tecnología, callbacks, DID ni “dos números”. No vendas apps para residentes ni WebPhone.  
> Brand-first, tipografía expresiva (no Inter), acento navy `#1e3a5f`, atmósfera real de acceso/comunidad.  
> Hero: marca + 1 headline + 1 frase + CTAs + visual dominante.  
> Secciones: cómo se vive, para la administración, para quién, CTA final.  
> Convierte a demo/contacto. Sin pricing inventado. Sigue este brief completo.

---

*Actualizar este brief si cambia el posicionamiento. Mantener la simplicidad como eje: hábito del residente intacto + control y visibilidad para la comunidad.*
