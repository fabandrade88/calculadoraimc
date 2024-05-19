import { Modal } from "./modal.js"
import { alertError } from "./alert-error.js"
import { notNumber, IMC } from "./utils.js"

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = function(event) {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value
  const showAlertError = notNumber(weight) || notNumber(height)

  if(showAlertError) {
    alertError.open()
    return;
  }

  alertError.close()

  const result = IMC(weight, height)
  displayResultMessage(result)
}

function displayResultMessage(result) {
  const message = `Seu IMC e de ${result}`
  Modal.message.innerText = message
  Modal.open()
}

