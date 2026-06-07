Feature: Sitio web Web Code

  Scenario: Cliente quiere cotizar un proyecto
    Given que el cliente visita webcodeofficial.vercel.app
    When hace click en "Cotizar Proyecto" o "Comenzar Proyecto"
    Then hace scroll automático a la sección de Contacto
    And ve el formulario con campos Nombre, Email y Mensaje

  Scenario: Cliente envía formulario de contacto
    Given que el cliente llenó Nombre, Email y Mensaje
    When hace click en "Enviar Mensaje"
    Then el mensaje llega a webcodeofficial1@gmail.com
    And ve el mensaje "¡Mensaje enviado! Te contactamos pronto."

  Scenario: Cliente quiere ver proyectos reales
    Given que el cliente está en la sección Proyectos
    When ve las 3 tarjetas
    Then ve Loretta, Fiborti Analytics y Thodri Gis
    And cada tarjeta muestra el stack tecnológico real

  Scenario: Cliente navega desde móvil
    Given que el cliente abre el sitio en su celular
    Then el navbar colapsa en menú hamburguesa
    And todas las secciones se ven correctamente