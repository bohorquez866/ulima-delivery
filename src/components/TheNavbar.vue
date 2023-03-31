<template>
  <header class="header_section">
    <div class="container_another" style="display: block; background: transparent;">
      <nav class="navbar navbar-expand-lg custom_nav-container pt-3">
        <router-link class="navbar-brand" to="/">
          <img src="images/logo.png" alt="" /><span>
            Sio.
          </span>
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="d-flex ml-auto flex-column flex-lg-row align-items-center">
            <ul class="navbar-nav  ">
              <li class="nav-item active">
                <a class="nav-link" href="index.html"
                  >Home <span class="sr-only">(current)</span></a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="fruit.html"> Key Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="fruit.html"> Pricing</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="service.html"> Testiminial </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">FAQ</a>
              </li>
            </ul>
            <div class="quote_btn-container ml-0 ml-lg-4 d-flex justify-content-center">
              <router-link :to="{ name: 'Login' }">
                <button class="text-uppercase custom_dark-btn">
                  inicia sesion
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>
