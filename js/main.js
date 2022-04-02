// Selecciones
const $form = document.getElementById('form');
const $formGroup = document.querySelector('.form__group-mass');
const $mass = document.getElementById('mass');
const $icon = document.querySelector('.form__validation');
const $error = document.querySelector('.form__group-error');
let $selectPlanet = document.getElementById('planet');
const $title = document.getElementById('title');
let $contentImg = document.getElementById('content-img');

// Declaracion de Objetos
const Gravity = {
  mercurio: 3.7,
  venus: 8.87,
  tierra: 9.807,
  marte: 3.721,
  jupiter: 24.79,
  saturno: 10.44,
  urano: 8.87,
  neptuno: 8.15,
  luna: 1.62,
  sol: 274
};

const Expressions = {
  masa: /^\d{1,3}$/ // 1 a 3 numeros.
};

const Validar = {
  masa: false
};

// Validar Formulario
$mass.addEventListener('keyup', validarFormulario);
$mass.addEventListener('blur', validarFormulario);

function validarFormulario(event) {
  if (Expressions.masa.test(event.target.value)) {
    $formGroup.classList.remove('form__group-incorrect');
    $formGroup.classList.add('form__group-correct');
    $icon.classList.remove('fa-times-circle');
    $icon.classList.add('fa-check-circle');
    $error.classList.remove('form__group-error--active');
    Validar.masa = true;
  } else {
    $formGroup.classList.add('form__group-incorrect');
    $formGroup.classList.remove('form__group-correct');
    $icon.classList.remove('fa-check-circle');
    $icon.classList.add('fa-times-circle');
    $error.classList.add('form__group-error--active');
    Validar.masa = false;
  }
}

// Calcular Peso
$form.addEventListener('submit', calculateWeight);

function calculateWeight(event) {
  // Quitar la recarga de la pagina al pulsar submit
  event.preventDefault();

  if ($mass.value == '') {
    /* Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Recuerda ingresar tu peso!',
      confirmButtonColor: '#ffc947'
    }); */
  } else if (Validar.masa) {
    switch ($selectPlanet.value) {
      case 'Mercurio':
        result(Gravity.mercurio, 'Mercurio');
        break;

      case 'Venus':
        result(Gravity.venus, 'Venus');
        break;

      case 'Luna':
        result(Gravity.luna, 'Luna');
        break;

      case 'Marte':
        result(Gravity.marte, 'Marte');
        break;

      case 'Júpiter':
        result(Gravity.jupiter, 'Júpiter');
        break;

      case 'Saturno':
        result(Gravity.saturno, 'Saturno');
        break;

      case 'Urano':
        result(Gravity.urano, 'Urano');
        break;

      case 'Neptuno':
        result(Gravity.neptuno, 'Neptuno');
        break;

      case 'Sol':
        result(Gravity.sol, 'Sol');
        break;
    }
    $form.reset();
  }
}

function result(gravedad, nombre) {
  let weight = parseInt($mass.value);
  let content = (weight * gravedad) / Gravity.tierra;
  $icon.classList.remove('fa-check-circle');
  console.log(nombre);
  /* Swal.fire({
    title: `${nombre}`,
    text: `Tu peso es de ${content.toFixed(2)} kg`,
    icon: 'success',
    confirmButtonColor: '#ffc947'
  }); */
}

// Mostrar imagenes
$selectPlanet.addEventListener('input', showPicture);

function showPicture() {
  switch ($selectPlanet.value) {
    case 'Mercurio':
      $contentImg.innerHTML = `<img src="img/mercurio.jpg" alt="Mercurio">`;
      break;

    case 'Venus':
      $contentImg.innerHTML = `<img src="img/venus.jpg" alt="Venus">`;
      break;

    case 'Luna':
      $contentImg.innerHTML = `<img src="img/luna.jpg" alt="Luna">`;
      break;

    case 'Marte':
      $contentImg.innerHTML = `<img src="img/marte.jpg" alt="Marte">`;
      break;

    case 'Júpiter':
      $contentImg.innerHTML = `<img src="img/jupiter.jpg" alt="Júpiter">`;
      break;

    case 'Saturno':
      $contentImg.innerHTML = `<img src="img/saturno.jpg" alt="Saturno">`;
      break;

    case 'Urano':
      $contentImg.innerHTML = `<img src="img/urano.jpg" alt="Urano">`;
      break;

    case 'Neptuno':
      $contentImg.innerHTML = `<img src="img/neptuno.jpg" alt="Neptuno">`;
      break;

    case 'Plutón':
      $contentImg.innerHTML = `<img src="img/pluton.jpg" alt="Plutón">`;
      break;

    default:
      $contentImg.innerHTML = `<img src="img/sol.jpg" alt="Sol">`;
      break;
  }
}
