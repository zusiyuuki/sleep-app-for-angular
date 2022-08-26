
const Product=require("./model/product")

class FakeDb{

    constructor(){
        this.products =[
            {
                coverimge:'./assets/img/phone-cover.jpg',
                name: 'Phone XL',
                price: 799,
                description: 'A large phone with one of the best screens',
                heding1:'サンプルテキスト',
                heding2:'サンプルテキスト',
                heding3:'サンプルテキスト',
                hedingdescription1:'サンプルテキストサンプルテキストサンプルテキスト',
                hedingdescription2:'サンプルテキストサンプルテキストサンプルテキスト',
                hedingdescription3:'サンプルテキストサンプルテキストサンプルテキスト',
              },
              {
                coverimge:'./assets/img/phone-cover.jpg',
                name: 'Phone Mini',
                price: 699,
                description: 'A great phone with one of the best cameras',
                heding1:'サンプルテキスト',
                heding2:'サンプルテキスト',
                heding3:'サンプルテキスト',
                hedingdescription1:'サンプルテキストサンプルテキストサンプルテキスト',
                hedingdescription2:'サンプルテキストサンプルテキストサンプルテキスト',
                hedingdescription3:'サンプルテキストサンプルテキストサンプルテキスト',
              },
              {
                coverimge:'./assets/img/phone-cover.jpg',
                name: 'Phone Standard',
                price: 299,
                description: '',
                heding1:'サンプルテキスト',
                heding2:'サンプルテキスト',
                heding3:'サンプルテキスト',
                hedingdescription1:'サンプルテキストサンプルテキストサンプルテキスト',
                hedingdescription2:'サンプルテキストサンプルテキストサンプルテキスト',
                hedingdescription3:'サンプルテキストサンプルテキストサンプルテキスト',
              },
              {
                coverimge:'./assets/img/phone-cover.jpg',
                name: 'Phone Standard',
                price: 299,
                description: '',
                heding1:'',
                heding2:'',
                heding3:'',
                hedingdescription1:'サンプルテキストサンプルテキストサンプルテキスト',
                hedingdescription2:'サンプルテキストサンプルテキストサンプルテキスト',
                hedingdescription3:'サンプルテキストサンプルテキストサンプルテキスト',
              },

        ]
    }

    async initDb(){
      await this.cleanDb()
      this.pushProductsToDb()
    }

    async cleanDb(){
      await Product.deleteMany({})
    }





    pushProductsToDb(){
        this.products.forEach(
            (product)=>{
                const newProduct =new Product(product)
                newProduct.save()
            }
        )
    }

  
    
}
module.exports =FakeDb