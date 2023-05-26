import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="insert-bookmark"
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
        }
        this.formTarget.outerHTML = data.form
      })
  }
}
