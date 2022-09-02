
const { chromium } = require('playwright');
const { mensajeDiscord } = require('./index');


const product = {
  vendedor: 'Amazon',
  alias: 'Great Eastern Evangelion',
  img: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/41fJ8DWbbbL._AC_SY580_.jpg',
  url: 'https://www.amazon.com/-/es/Evangelion-GE-52302-Plugsuit-pulgadas-multicolor/dp/B076DP5XTC/?_encoding=UTF8&pd_rd_w=4ZKoR&content-id=amzn1.sym.f338dd14-423d-40ca-a06c-dbb95facd8a1&pf_rd_p=f338dd14-423d-40ca-a06c-dbb95facd8a1&pf_rd_r=H00VMV0T3EFAW0HNF96R&pd_rd_wg=xNpWU&pd_rd_r=913b3f8e-bfed-4bf9-af39-a4a6488b664d&ref_=pd_gw_exports_top_sellers_by_gl_rec#immersive-view_1662146790192',
  checkStock: async(page)=> {
      const addToCart= await page.$$('#add-to-cart-button')
      return addToCart.length > 0
    }
  }
async function alertStock() {
  const browser = await chromium.launch();

  const { url , checkStock} = product

  const page = await browser.newPage();
  await page.goto(url);
  const tieneStock = await checkStock(page);

  if(tieneStock){
    mensajeDiscord(product);
  } 
  else console.log("No hay Stock");

  await page.close();
  await browser.close();
}

alertStock();
