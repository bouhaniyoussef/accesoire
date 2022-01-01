import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'appproduits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class produitsComponent implements OnInit {
 


  Echarps = [
    {
      Categorie : "Echarpes",
      Reference : "GF43",
      Marque:"zara",
      prix: 87,
      Image : "https://www.terranovastyle.com/pub/media/catalog/product/cache/a27baa1fe94e9069785089823862ff8e/s/c/sctd50732p-pashmina-tu-s105_list_1.jpg"

    },
    {
      Categorie : "Phones",
      Reference : "IPH3445",
      Marque:"IPHONE",
      prix: 1000,
      Image : "https://pic.clubic.com/v1/images/1921804/raw.webp?fit=smartCrop&width=550&height=450&hash=d3aec46d5ef44ab1833c38c7c216ff1fe4b15c0e"

    },
    {  Categorie : "lunette",
      Reference : "hgb65",
      Marque:"Levi's",
      prix:534,
      Image : "https://krys-krys-storage.omn.proximis.com/Imagestorage/imagesSynchro/0/0/c2a01db1b6d0966dda71dece4a119dc322d722ab_upc_610248-5.jpeg"

    },
    {Categorie : "parfum",
      Reference : "pahg66",
      Marque:"Mon Guerlain",
      prix: 87,
      Image : " https://cdn2.tendance-parfums.com/media/catalog/product/cache/4aa19f79e4c8443f98fec02ca05a074b/3/3/3346470131392_2.jpg"

    },
    {
      Reference : "telephone",
      Marque:"samsung",
      prix: 870,
      Image : "https://www.technopro-online.com/60565-large_default/telephone-portable-samsung-galaxy-a51-rose-sm-515-pink.jpg"

    },
    {
      Reference : "ecran",
      Marque:"paranet",
      prix: 45,
      Image : "https://m.media-amazon.com/images/I/61dqd+OAoUS._AC_SX342_.jpg"

    }
  ]
  constructor() {}
  
  ngOnInit(): void {
  }

}
