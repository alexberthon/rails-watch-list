import { Controller } from "@hotwired/stimulus"
import { Offcanvas } from "bootstrap"

// Connects to data-controller="insert-list"
export default class extends Controller {
  static targets = ["form", "last"];

  connect() {
  }

  send(event) {
    event.preventDefault();
    fetch(this.formTarget.action, {
      method: "POST",
      headers: { "Accept": "application/json" },
      body: new FormData(this.formTarget)
    })
      .then(response => response.json())
      .then((data) => {
        if (data.persisted_item) {
          this.lastTarget.insertAdjacentHTML("beforebegin", data.persisted_item)
          const offcanvasEl = document.getElementById("offcanvasRight");
          Offcanvas.getInstance(offcanvasEl).hide();
        }
        this.formTarget.outerHTML = data.form
      })
  }
}
