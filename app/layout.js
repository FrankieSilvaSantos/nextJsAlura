import Header from "./header/page"
import Footer from "./footer/page"
import "./global.css"

export default function RootLayout({ children }) {
    return (
      <html lang="en">
            <head>
          


              <title>Alura - Cases</title>
<link
 rel="stylesheet"
 crossOrigin="anonymous"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
 
/>
        <link
         rel="stylesheet"
         crossOrigin="anonymous"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
 
/>

<link
  rel="stylesheet"
  crossOrigin="anonymous"
  href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.4.0/mdb.min.css"

/>


{/* BOOTSTRAP */}


<link crossOrigin="anonymous" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" ></link>

<script crossOrigin="anonymous" src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" ></script>
</head>
        <body>
      
        <Header></Header>
       
        <main>{children}</main>

        <Footer></Footer>

        


</body>
      </html>
    )
  }