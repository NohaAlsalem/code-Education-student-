<template>
  <div class="modal fade" id="cardModal" tabindex="-1" aria-labelledby="cardModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div class="container">
                                    <p class="card-text pb-2">
                                        Enter your password
                                    </p>
                                    <div class="input-group">
                                        <input type="text" class="form-control">
                                    </div>
                            </div>

                        </div>

                        <div class="modal-footer d-flex">
                            <button type="button" class="btn bg-white" data-bs-dismiss="modal">
                                <p> Cancel</p>
                            </button>
                            <button type="button" class="btn bg-white" data-bs-dismiss="modal">
                                <p>Ok</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
</template>
<style scoped>
p {
    color: var(--GreenColor);
}
.input-group .form-control {
    background: var(--WhiteColor);
    border: 1px solid var(--LightGreen);
}
.modal-footer {
    border: none;

}
</style>