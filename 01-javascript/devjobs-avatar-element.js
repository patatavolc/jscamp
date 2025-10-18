class DevJobsAvatar extends HTMLElement {
  // Va a heredar todas las propiedades, metodos de los elementos HTML
  // Creamos nuestro propio elemento HTML

  constructor() {
    super(); // Llamar al constructor de HTMLElement
    this.attachShadow({ mode: 'open' }); // Un DOM paralelo que no afecta a lo de fuera 

  }

  createUrl(service, username) {
    return `https://unavatar.io/${service}/${username}`;
  }

  render() {
    // Si devuelve null o undefined usamos valores por defecto
    const service = this.getAttribute('service') ?? 'github';
    const username = this.getAttribute('username') ?? 'midudev';
    const size = this.getAttribute('size') ?? '40';

    const url = this.createUrl(service, username);

    this.shadowRoot.innerHTML = `
      <style>
        img {
          width: ${size}px;
          height: ${size}px;
          border-radius: 100%;
        }
      </style>
      <img src="${url}" alt="Avatar de ${username}"/>
    `
  }

  // Cuando el componente se agrega al DOM se llama a este metodo
  connectedCallback() {
    this.render();
  }
}

customElements.define('devjobs-avatar', DevJobsAvatar)

// Forma nativa de crear componentes web