import bcrypt from "bcryptjs"
const data = {
    users: [
        {
            name: "Admin",
            email: "admin@example.com",
            password: bcrypt.hashSync('123', 8),
            isAdmin: true,
        },
        {
            name: "Tom",
            email: "Tom@example.com",
            password: bcrypt.hashSync('123', 8), 
            isAdmin: false
        }
    ],
    
    products: [
        {
            name: "Fender Precision bass",
            image: "https://www.ardemadrid.com/2158-thickbox_default/epiphone-les-paul-studio-gothic.jpg",
            category: "featured",
            price: 350,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 5,
            numReviews:12,
            inStock: 10
        },
        {
            name: "Acoustic guitar fender",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO2JcbZnT6cpA9yM4bGMFKqAeaTTPq2rAy8XT5aNBs-dMS_G5Gt7o9VILWdYcgx1DVtymlvaU&usqp=CAc",
            category: "featured",
            price: 350,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4.5,
            numReviews:12,
            inStock: 10
        },
        {
            name: "Epiphone les paul standard",
            image: "https://www.musik-produktiv.es/pic-010119758xxl/epiphone-les-paul-standard-50s-vintage-sunburst.jpg",
            category: "featured",
            price: 350,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4.5,
            numReviews:12,
            inStock: 10
        },
        {
            name: "Epiphone les paul black",
            image: "https://www.ardemadrid.com/2158-thickbox_default/epiphone-les-paul-studio-gothic.jpg",
            category: "featured",
            price: 350,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4,
            numReviews:12,
            inStock: 10
        },
        {
            name: "Gibson1",
            image: "https://www.ardemadrid.com/2158-thickbox_default/epiphone-les-paul-studio-gothic.jpg",
            category: "guitars",
            price: 350,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4.5,
            numReviews:12,
            inStock: 10
        },
        {
            name: "Gibson2",
            image: "https://www.ardemadrid.com/2158-thickbox_default/epiphone-les-paul-studio-gothic.jpg",
            category: "guitars",
            price: 350,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4.5,
            numReviews:12,
            inStock: 10
        },
        {
            name: "Gibson3",
            image: "https://www.ardemadrid.com/2158-thickbox_default/epiphone-les-paul-studio-gothic.jpg",
            category: "guitars",
            price: 350,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4.5,
            numReviews:12,
            inStock: 10
        },
        {
            name: "Gibson4",
            image: "https://www.ardemadrid.com/2158-thickbox_default/epiphone-les-paul-studio-gothic.jpg",
            category: "guitars",
            price: 350,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4.5,
            numReviews:12,
            inStock: 10
        },
        {
            name: "Gibson5",
            image: "https://www.ardemadrid.com/2158-thickbox_default/epiphone-les-paul-studio-gothic.jpg",
            category: "guitars",
            price: 350,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4.5,
            numReviews:12,
            inStock: 10
        },
        {
            name: "Gibson6",
            image: "https://www.ardemadrid.com/2158-thickbox_default/epiphone-les-paul-studio-gothic.jpg",
            category: "guitars",
            price: 350,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4.5,
            numReviews:12,
            inStock: 10
        },
        {
            name: "Gibson7",
            image: "https://www.ardemadrid.com/2158-thickbox_default/epiphone-les-paul-studio-gothic.jpg",
            category: "guitars",
            price: 350,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4.5,
            numReviews:12,
            inStock: 10
        },
        {
            name: "Gibson8",
            image: "https://www.ardemadrid.com/2158-thickbox_default/epiphone-les-paul-studio-gothic.jpg",
            category: "guitars",
            price: 350,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4.5,
            numReviews:12,
            inStock: 10
        },
        {
            name: "Gibson9",
            image: "https://www.ardemadrid.com/2158-thickbox_default/epiphone-les-paul-studio-gothic.jpg",
            category: "guitars",
            price: 350,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4.5,
            numReviews:12,
            inStock: 10
        },
        {
            name: "Gibson10",
            image: "https://www.ardemadrid.com/2158-thickbox_default/epiphone-les-paul-studio-gothic.jpg",
            category: "guitars",
            price: 350,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4.5,
            numReviews:12,
            inStock: 10
        },
        {
            name: "Basses1",
            image: "https://images.reverb.com/image/upload/s--osA6AZrM--/f_auto,t_supersize/v1529422470/lhqssiiyeefljjygxdm1.png",
            category: "basses",
            price: 350,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4.5,
            numReviews:12,
            inStock: 10
        },
        {
            name: "Basses2",
            image: "https://images.reverb.com/image/upload/s--osA6AZrM--/f_auto,t_supersize/v1529422470/lhqssiiyeefljjygxdm1.png",
            category: "basses",
            price: 350,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4.5,
            numReviews:12,
            inStock: 10
        },
        {
            name: "Basses3",
            image: "https://images.reverb.com/image/upload/s--osA6AZrM--/f_auto,t_supersize/v1529422470/lhqssiiyeefljjygxdm1.png",
            category: "basses",
            price: 350,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4.5,
            numReviews:12,
            inStock: 10
        },
        {
            name: "Basses4",
            image: "https://images.reverb.com/image/upload/s--osA6AZrM--/f_auto,t_supersize/v1529422470/lhqssiiyeefljjygxdm1.png",
            category: "basses",
            price: 350,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4.5,
            numReviews:12,
            inStock: 10
        },
        {
            name: "Basses5",
            image: "https://images.reverb.com/image/upload/s--osA6AZrM--/f_auto,t_supersize/v1529422470/lhqssiiyeefljjygxdm1.png",
            category: "basses",
            price: 350,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4.5,
            numReviews:12,
            inStock: 10
        },
        {
            name: "Basses6",
            image: "https://images.reverb.com/image/upload/s--osA6AZrM--/f_auto,t_supersize/v1529422470/lhqssiiyeefljjygxdm1.png",
            category: "basses",
            price: 350,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4.5,
            numReviews:12,
            inStock: 10
        },
        {
            name: "Basses7",
            image: "https://images.reverb.com/image/upload/s--osA6AZrM--/f_auto,t_supersize/v1529422470/lhqssiiyeefljjygxdm1.png",
            category: "basses",
            price: 350,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4.5,
            numReviews:12,
            inStock: 10
        },
        {
            name: "Basses8",
            image: "https://images.reverb.com/image/upload/s--osA6AZrM--/f_auto,t_supersize/v1529422470/lhqssiiyeefljjygxdm1.png",
            category: "basses",
            price: 350,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4.5,
            numReviews:12,
            inStock: 10
        },
        {
            name: "Basses9",
            image: "https://images.reverb.com/image/upload/s--osA6AZrM--/f_auto,t_supersize/v1529422470/lhqssiiyeefljjygxdm1.png",
            category: "basses",
            price: 350,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4.5,
            numReviews:12,
            inStock: 10
        },
        {
            name: "Basses0",
            image: "https://images.reverb.com/image/upload/s--osA6AZrM--/f_auto,t_supersize/v1529422470/lhqssiiyeefljjygxdm1.png",
            category: "basses",
            price: 350,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4.5,
            numReviews:12,
            inStock: 10
        },
        {
            name: "Drum1",
            image: "https://static.keymusic.com/products/287848/XL/roland-vad506-v-drum.jpg",
            category: "drums",
            price: 350,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4.5,
            numReviews:12,
            inStock: 10
        },
        {
            name: "Drum2",
            image: "https://static.keymusic.com/products/287848/XL/roland-vad506-v-drum.jpg",
            category: "drums",
            price: 350,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4.5,
            numReviews:12,
            inStock: 10
        },
        {
            name: "Drum3",
            image: "https://static.keymusic.com/products/287848/XL/roland-vad506-v-drum.jpg",
            category: "drums",
            price: 350,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4.5,
            numReviews:12,
            inStock: 10
        },
        {
            name: "Drum4",
            image: "https://static.keymusic.com/products/287848/XL/roland-vad506-v-drum.jpg",
            category: "drums",
            price: 350,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4.5,
            numReviews:12,
            inStock: 10
        },
        {
            name: "Drum5",
            image: "https://static.keymusic.com/products/287848/XL/roland-vad506-v-drum.jpg",
            category: "drums",
            price: 350,
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4.5,
            numReviews:12,
            inStock: 10
        },
        {
            name: "Piano1",
            image: "https://www.pianosbogota.com/wp-content/uploads/2018/11/PIANO-YAMAHA-P-125.jpg",
            category: "keyboards",
            price: 350, 
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4.5,
            numReviews:12,
            inStock: 10
        },
        {
            name: "Violin",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Violin_VL100.png",
            category: "orchestra",
            price: 350, 
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto dolor pariatur distinctio porro officia aspernatur nulla, perferendis molestiae, vero incidunt magni. Esse consequuntur iusto adipisci dolorem cumque unde et ad!",
            rating: 4.5,
            numReviews:12,
            inStock: 10
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
