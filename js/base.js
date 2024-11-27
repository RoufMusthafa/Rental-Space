class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="header">
          <nav class="navbar">
              <div class="logo">
                  <a href="index.html">
                    <img src="images/logo.svg" alt="Logo" />
                  </a>
              </div>
              <ul class="nav-menu">
                  <li class="nav-item">
                      <a href="index.html" class="nav-link">Home</a>
                  </li>
                  <li class="nav-item">
                      <a href="index.html#about" class="nav-link">About</a>
                  </li>
                  <li class="nav-item">
                      <a href="product.html" class="nav-link">Products</a>
                  </li>
                  <li class="nav-item space"></li>
                  <li class="nav-item">
                      <a href="buyer.html" class="nav-link">Buyer</a>
                  </li>
                  <li class="nav-item submit">
                      <a href="seller.html" class="nav-link">Seller</a>
                  </li>
              </ul>
              <div class="hamburger">
                  <span class="bar"></span>
                  <span class="bar"></span>
                  <span class="bar"></span>
              </div>
          </nav>
  </header>
  
          `;
  }
}

customElements.define("my-header", MyHeader);

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer>
      <section class="wrapper">
          <section class="top">
              <div class="item">
                  <a href="#" class="logo"><img src="images/logo.svg" alt="Logo"></a>
                  <span>Lorem ispansum dolor sit, amet consectetur adispanisicing elit. <br> Deleniti vel sequi commodi</span>
              </div>
              <div class="item rental">
                  <h3>Our Rentals</h3>
                  <ul>
                      <li><a href="">Cars</a></li>
                      <li><a href="">Bikes</a></li>
                      <li><a href="">EV's</a></li>
                      <li><a href="">Shops</a></li>
                      <li><a href="">Homes</a></li>
                  </ul>
              </div>
              <div class="item large">
                  <h3>Connect with us</h3>
                  <p>Sign up to our Newsletter</p>
                  <form action="">
                      <input type="email" placeholder="Email Address" />
                      <input type="submit" value="Subscibe" />
                  </form>
                  <div class="social">
                      <p>Connect with Us</p>
                      <ul>
                          <li><a href=""><img src="images/facebook.svg" alt=""></a></li>
                          <li><a href=""><img src="images/instagram.svg" alt=""></a></li>
                          <li><a href=""><img src="images/linkedin.svg" alt=""></a></li>
                      </ul>
                  </div>
              </div>
          </section>
      </section>
  </footer>
          `;
  }
}

customElements.define("my-footer", MyFooter);
