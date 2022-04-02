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
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Recuerda ingresar tu peso!',
      confirmButtonColor: '#ffc947'
    });
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
  Swal.fire({
    title: `${nombre}`,
    text: `Tu peso es de ${content.toFixed(2)} kg`,
    icon: 'success',
    confirmButtonColor: '#ffc947'
  });
}

// Mostrar imagenes
$selectPlanet.addEventListener('input', showPicture);

function showPicture() {
  switch ($selectPlanet.value) {
    case 'Mercurio':
      const imgMercurio = new Image();
      imgMercurio.src = '../img/mercurio.jpg';
      $contentImg.innerHTML = imgMercurio.outerHTML;
      break;

    case 'Venus':
      const imgVenus = new Image();
      imgVenus.src = '../img/venus.jpg';
      $contentImg.innerHTML = imgVenus.outerHTML;
      break;

    case 'Luna':
      const imgLuna = new Image();
      imgLuna.src = '../img/luna.jpg';
      $contentImg.innerHTML = imgLuna.outerHTML;
      break;

    case 'Marte':
      const imgMarte = new Image();
      imgMarte.src = '../img/marte.jpg';
      $contentImg.innerHTML = imgMarte.outerHTML;
      break;

    case 'Júpiter':
      const imgJupiter = new Image();
      imgJupiter.src = '../img/jupiter.jpg';
      $contentImg.innerHTML = imgJupiter.outerHTML;
      break;

    case 'Saturno':
      const imgSaturno = new Image();
      imgSaturno.src = '../img/saturno.jpg';
      $contentImg.innerHTML = imgSaturno.outerHTML;
      break;

    case 'Urano':
      const imgUrano = new Image();
      imgUrano.src = '../img/urano.jpg';
      $contentImg.innerHTML = imgUrano.outerHTML;
      break;

    case 'Neptuno':
      const imgNeptuno = new Image();
      imgNeptuno.src = '../img/neptuno.jpg';
      $contentImg.innerHTML = imgNeptuno.outerHTML;
      break;

    case 'Plutón':
      const imgPluton = new Image();
      imgPluton.src = '../img/pluton.jpg';
      $contentImg.innerHTML = imgPluton.outerHTML;
      break;

    default:
      const imgSol = new Image();
      imgSol.src = '../img/sol.jpg';
      $contentImg.innerHTML = imgSol.outerHTML;
      break;
  }
}
