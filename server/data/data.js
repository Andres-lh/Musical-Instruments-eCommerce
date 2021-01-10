import bcrypt from "bcryptjs"
const data = {
    users: [
        {
            name: "Admin",
            email: "admin@example.com",
            password: bcrypt.hashSync('123', 8),
            isAdmin: true,
        }
    ],
    
    products: [
        {
            name: "Fender Jazz Bass",
            image: "https://drunkat.es/upload/productos/800x800/fender_player-jazz-bass-pf-3ts_1.jpg",
            category: "featured",
            price: 385,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4.5,
            numReviews: 20,
            inStock: 10
        },
        {
            name: "Acoustic Guitar Yamaha",
            image: "https://www.bettermusic.com.au/media/catalog/product/cache/1/image/1224x/9df78eab33525d08d6e5fb8d27136e95/a/p/apx600vw.jpg",
            category: "featured",
            price: 150,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4.8,
            numReviews:16,
            inStock: 0
        },
        {
            name: "Acoustic Drums Yamaha Ryden",
            image: "https://static.turbosquid.com/Preview/2014/07/03__16_09_19/Drums_Yamaha_Absolute_Birch_0001.jpg9230d92c-e69c-4844-96cc-145d586e629fDefault.jpg",
            category: "featured",
            price: 900,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4.8,
            numReviews: 5,
            inStock: 0
        },
        {
            name: "Epiphone les paul standard",
            image: "https://www.musik-produktiv.es/pic-010119758xxl/epiphone-les-paul-standard-50s-vintage-sunburst.jpg",
            category: "featured",
            price: 400,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 5,
            numReviews: 24,
            inStock: 5
        },
        {
            name: "Epiphone Es-339",
            image: "https://media.sweetwater.com/api/i/q-82__ha-dbf2451f049a383f__hmac-549ffb38b95b999207e93917351ba879e3d7e7d4/images/closeup/750-ET33VSNH_front.jpg",
            category: "guitars",
            price: 1250,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4.5,
            numReviews: 12,
            inStock: 10
        },
        {
            name: "Electric Guitar Squier Classic",
            image: "https://www.musicheadstore.com/wp-content/uploads/2018/05/Squier-Classic-Vibe-70s-Stratocaster-Electric-Guitar-1.png",
            category: "guitars",
            price: 650,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4,
            numReviews: 16,
            inStock: 13
        },
        {
            name: "Guitar Fender Telecaster",
            image: "https://sc1.musik-produktiv.com/pic-010097968xxl/fender-telecaster-thinline-pf-3tsb.jpg",
            category: "guitars",
            price: 800,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4.5,
            numReviews:12,
            inStock: 0
        },
        {
            name: "Acoustic Guitar Fender Sunburst",
            image: "https://media.guitarcenter.com/is/image/MMGS7//CC-60SCE-Concert-Acoustic-Electric-Guitar-Natural/L45217000001000-00-1600x1600.jpg",
            category: "guitars",
            price: 320,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4,
            numReviews: 25,
            inStock: 15
        },
        {
            name: "Guitar Gretsch Streamliner",
            image: "https://sc1.musik-produktiv.com/pic-010112102xxl/gretsch-guitars-streamliner-g2622t-rvbl.jpg",
            category: "guitars",
            price: 1470,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4.6,
            numReviews: 4,
            inStock: 0
        },
        {
            name: "Ephiphone Les Paul Black",
            image: "https://www.ardemadrid.com/2158-thickbox_default/epiphone-les-paul-studio-gothic.jpg",
            category: "guitars",
            price: 350,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4.5,
            numReviews:12,
            inStock: 10
        },
        {
            name: "Electric Guitar Ibanez As Paul",
            image: "https://sc1.musik-produktiv.com/pic-010120750xxl/ibanez-signature-as-paul-waggoner-pwm100.jpg",
            category: "guitars",
            price: 780,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4,
            numReviews: 11,
            inStock: 10
        },
        {
            name: "Ibanez GRX20Z Gio",
            image: "https://static.bhphoto.com/images/images2500x2500/ibanez_grx20zjb_electric_guitar_1486564526000_1161490.jpg",
            category: "guitars",
            price: 690,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4.5,
            numReviews:12,
            inStock: 10
        },
        {
            name: "Epiphone Sg Special",
            image: "https://images-na.ssl-images-amazon.com/images/I/71RZpkExV2L._AC_SL1500_.jpg",
            category: "guitars",
            price: 550,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4,
            numReviews: 30,
            inStock: 0
        },
        {
            name: "Electric Guitar Gisbson Lmp2015",
            image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSEu1FujGt7Fs8raxmf4w5yERaGa0GzMUqdQX0FGx5iDCCqG3m55OzYBVEeYcVAmtMI4US0DQsTu8TerPWX4cABvuRU8snwLorXPQJy0bCfXD9DIPXyaSfnpg&usqp=CAE",
            category: "guitars",
            price: 400,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4.1,
            numReviews: 26,
            inStock: 10
        },
        {
            name: "Ibanez SMRD200-CAM",
            image: "https://sc1.musik-produktiv.com/pic-010112359xxl/ibanez-srmd200-cam.jpg",
            category: "basses",
            price: 680,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4.5,
            numReviews:12,
            inStock: 15
        },
        {
            name: "Fender American Presicion",
            image: "https://sc1.musik-produktiv.com/pic-010117688xxl/fender-american-ultra-precision-bass-mn-apl.jpg",
            category: "basses",
            price: 500,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4,
            numReviews: 9,
            inStock: 0
        },
        {
            name: "Ibanez Gio GSR180",
            image: "https://sc1.musik-produktiv.com/pic-100017054xxl/ibanez-gio-gsr180-bk-100017054.jpg",
            category: "basses",
            price: 720,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4.7,
            numReviews: 22,
            inStock: 10
        },
        {
            name: "Gibson SG Standard Bass",
            image: "https://images.musicstore.de/images/1280/gibson-sg-standard-bass-cherry_1_BAS0010353-000.jpg",
            category: "basses",
            price: 650,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4,
            numReviews: 25,
            inStock: 15
        },
        {
            name: "Fender Squier Vibe 70's",
            image: "https://images.musicstore.de/images/1280/fender-squier-classic-vibe-70s-jazz-bass-3-colour-sunburst-_1_BAS0010204-000.jpg",
            category: "basses",
            price: 385,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4.2,
            numReviews: 12,
            inStock: 0
        },
        {
            name: "Voodoo Custom Bass",
            image: "https://voodoocustomguitars.com/pub/tools/basscanvas/presets/1548667007198.png",
            category: "basses",
            price: 1650,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4.5,
            numReviews: 10,
            inStock: 0
        },
        {
            name: "Fender Squier Bass",
            image: "https://images.reverb.com/image/upload/s--osA6AZrM--/f_auto,t_supersize/v1529422470/lhqssiiyeefljjygxdm1.png",
            category: "basses",
            price: 400,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4.5,
            numReviews: 25,
            inStock: 15
        },
        {
            name: "Cort Actio PJ Bass",
            image: "https://www.macronmusic.com.au/assets/full/C30070.png?20201202120845",
            category: "basses",
            price: 309,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4,
            numReviews: 16,
            inStock: 14
        },
        {
            name: "Milenium Younster Drum set",
            image: "https://thumbs.static-thomann.de/thumb/orig/pics/bdb/467182/14593933_800.jpg",
            category: "drums",
            price: 350,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4.5,
            numReviews:12,
            inStock: 10
        },
        {
            name: "Kurzweil KD1S",
            image: "https://static.bhphoto.com/images/images2500x2500/1547638613_1453811.jpg",
            category: "drums",
            price: 509,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4,
            numReviews: 10,
            inStock: 0
        },
        {
            name: "Eastar Drum Set",
            image: "https://images-na.ssl-images-amazon.com/images/I/71nJgkQau1L._AC_SL1500_.jpg",
            category: "drums",
            price: 420,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4.5,
            numReviews: 17,
            inStock: 8
        },
        {
            name: "Roland TD-27KVS Electronic",
            image: "https://www.tomleemusic.ca/media/catalog/product/cache/image/1000x1320/e9c3970ab036de70892d86c6d221abfe/g/a/gallery_td-17kvx_angle_1.jpg",
            category: "drums",
            price: 4199,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4.5,
            numReviews: 15,
            inStock: 6
        },
        {
            name: "Copper 3 Piece Drums ",
            image: "https://media.sweetwater.com/api/i/q-82__ha-82ed2b675587e632__hmac-0c4c06cc9a590e1eaf59b2ec2283c4dbcf68f393/images/items/750/AF322COP-large.jpg",
            category: "drums",
            price: 5525,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4.5,
            numReviews:12,
            inStock: 0
        },
        {
            name: "Piano Yamaha P-125",
            image: "https://www.pianosbogota.com/wp-content/uploads/2018/11/PIANO-YAMAHA-P-125.jpg",
            category: "keyboards",
            price: 850, 
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4.5,
            numReviews: 7,
            inStock: 3
        },
        {
            name: "Rolan HP-704 Digital Piano ",
            image: "https://static.keymusic.com/products/280119/XL/roland-hp704-ch-digital-piano.jpg",
            category: "keyboards",
            price: 1565, 
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4.5,
            numReviews: 12,
            inStock: 7
        },
        {
            name: "Cassio CDP-S100 ",
            image: "https://www.wagnerpiano.com.my/wp-content/uploads/2020/04/CDPS100BKB-600x600.jpg",
            category: "keyboards",
            price: 2025, 
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4,
            numReviews: 7,
            inStock: 0
        },
        {
            name: "Fiddlemarn Concert Violin",
            image: "https://cdn.shopify.com/s/files/1/2966/4646/products/Fiddlerman_Concert_Violin_Outfit_1024x.jpg?v=1599050683",
            category: "orchestra",
            price: 489, 
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4.5,
            numReviews: 15,
            inStock: 30
        },
        {
            name: "Modern Custom Cello",
            image: "https://www.corilon.com/media/image/d2/e9/af/5840-cello-student_1890x1890.jpg",
            category: "orchestra",
            price: 1251, 
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4,
            numReviews: 15,
            inStock: 0
        },
        {
            name: "1/4 Wizzard Violin",
            image: "https://cdn.shopify.com/s/files/1/0208/2964/products/violinf_c57d8fbf-f1b5-43e0-b83f-d798405f15b4_grande.jpg?v=1550027866",
            category: "orchestra",
            price: 299, 
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4,
            numReviews: 20,
            inStock: 25
        },
        {
            name: "Glasser Carbon Viola",
            image: "https://cdn.shopify.com/s/files/1/2966/4646/products/Glasser4.jpg?v=1545423012",
            category: "orchestra",
            price: 540, 
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4,
            numReviews: 18,
            inStock: 0
        },
        {
            name: "Microphone",
            image: "https://media.sweetwater.com/api/i/q-82__ha-4a2b7ad75ce1e8c1__hmac-9ba75fef7da87911721fa8d181832c786a0e1744/images/items/750/NT1AAnniv-large.jpg",
            category: "studio",
            price: 350, 
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4.5,
            numReviews:12,
            inStock: 10
        }

    ]
        
        
    
};


export default data;
