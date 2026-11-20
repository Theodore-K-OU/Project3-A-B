# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.
You can also try [the experimental native React Compiler support in plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md#rust-react-compiler) by using `compiler: true` in the plugin options instead of using the Babel plugin.

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

## Running this website

to run this application, you first download all the files, then you open your CMD, and go to the location of the node folder.
From there Install React + vite (direction above), and in the CMD install react-router-dom in the node folder
cd 'install folder\kosarekProject3\project3\node_modules' --npm install react-router-dom
for example C:\downlaod path\kosarekProject3\Project3\node_modules
once found you run the command -- npm run dev
then you can press h + enter, and open the link to the running server.
if you have any issues press r + enter to restart the running server.

Delete Later
C:\Users\tkosa\OneDrive\Documents\GitHub\KosarekProject3\Project3\node_modules

## Overview of the website

This is a small Ecomerce Storefront, that updates dynamically based on your input. We are selling vinals from a various generas

## React Component Hierarchy & State Flow Architecture

```text
<App/> (src/App.jsx)
├── State:
│   ├── cart: Array<Object> (Active cart items & quantities)
│   └── isCartOpen: Boolean (Cart drawer visibility)
├── Handlers Passed Down:
│   ├── handleAddToCart(product, qty) -> onAddToCart
│   ├── handleUpdateQuantity(productId, delta) -> onUpdateQuantity
│   ├── handleRemoveFromCart(productId) -> onRemove
│   ├── handleClearCart() -> onClearCart
│   ├── handleOpenCart() -> onOpenCart
│   └── () => setIsCartOpen(false) -> onClose
│
├── <Navbar/> (src/components/Navbar.jsx)
│   ├── Props: cartCount: Number, onOpenCart: Function
│   └── Events: onClick -> onOpenCart()
│
├── <Routes>
│   ├── [Route: path="/"] -> <CatalogePage/> (src/pages/CatalogePage.jsx)
│   │   ├── State: selectedGenre: String ("All" | "Jazz" | "Electronic" | "Rock" | "Classical")
│   │   ├── Props: products: Array<Object>, onAddToCart: Function
│   │   ├── Events: onClick -> setSelectedGenre(cat)
│   │   └── <ProductCard/> (src/components/ProductCard.jsx) [.map()]
│   │       ├── Props: product: Object, onAddToCart: Function
│   │       └── Events: onClick -> onAddToCart(product)
│   │
│   ├── [Route: path="/album/:albumId"] -> <ProductDetailPage/> (src/pages/ProductDetailPage.jsx)
│   │   ├── State: qty: Number (Selected quantity, 1 to product.stock)
│   │   ├── Props: products: Array<Object>, onAddToCart: Function
│   │   └── Events: onChange -> setQty(), onClick -> onAddToCart(product, qty)
│   │
│   └── [Route: path="/checkout"] -> <CheckoutPage/> (src/pages/CheckoutPage.jsx)
│       ├── State:
│       │   ├── isSubmitted: Boolean (Toggles form vs. confirmation screen)
│       │   └── formData: Object ({ name, email, shippingAddress, zipCode })
│       ├── Props: cart: Array<Object>, onClearCart: Function
│       └── Events: onChange -> handleInputChange(e), onSubmit -> handleSubmit(e) -> onClearCart()
│
└── <CartDrawer/> (src/components/CartDrawer.jsx)
    ├── Props: isOpen: Boolean, cart: Array<Object>, onClose: Function, onUpdateQuantity: Function, onRemove: Function
    └── Events:
        ├── onClick (overlay / close) -> onClose()
        ├── onClick (- / +) -> onUpdateQuantity(item.id, -1 | 1)
        ├── onClick (remove) -> onRemove(item.id)
        └── onClick (checkout) -> onClose() + navigate("/checkout")
```
