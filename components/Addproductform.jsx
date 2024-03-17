"use client";
import { useState } from "react"
import axios from "axios";


export default function Addproductform() 
{
    const [product, setproduct] = useState({
        producttitle: "",
        productbrand: "",
        productmodel: "",
        description: "",
        //productimage:File,
        rentprice: "",
        category:"",

    });

  

    const productSubmit=async (e) =>{
        e.preventDefault();
        const formData= new FormData();
        formData.append('producttitle',product.producttitle);
        formData.append('productbrand',product.productbrand);
        formData.append('productmodel',product.productmodel);
        formData.append('description',product.description);
        formData.append('productimage',product.productimage);
        formData.append('rentprice',product.rentprice);
        formData.append('category',product.category);

        try {
             
            const response=await axios.post("/api/products",formData);
            console.log(response.data);
        }
         catch (error) {
            console.error(error);  
        }


    };

    return( 

        <div className="grid place-items-center h-screen ">
            <div className="shadow-lg p-5 rounded-lg border-t-4 border-blue-400">
                <h1 className="text-xl font-bold my-4 ">Add your product</h1>

                <form onSubmit={productSubmit} className="flex flex-col gap-3">
                    <input
                        onChange={(e) =>
                            setproduct({ ...product, producttitle: e.target.value })
                        }
                        value={product.producttitle}
                        name="producttitle"
                        type="text"
                        placeholder="Product Title"
                    />
                    <input
                        onChange={(e) =>
                            setproduct({ ...product, productbrand: e.target.value })
                        }
                        value={product.productbrand}
                        name="productbrand"
                        type="text"
                        placeholder="prodcut brand"
                    />
                    <input
                        onChange={(e) =>
                            setproduct({ ...product, productmodel: e.target.value })
                        }
                        value={product.productmodel}
                        name="productmodel"
                        type="text"
                        placeholder="product model"
                    />
                    <textarea
                        onChange={(e) =>
                            setproduct({ ...product, description: e.target.value })
                        }
                        value={product.description}
                        name="description"
                        placeholder="product description"
                    />
                    <input
                        onChange={(e) =>
                            //setproduct({ ...product, productimage: e.target.files[0] })
                            console.log(e.target.files[0])
                        }
                        //value={product.productimage}
                        name="productimage"
                        type="file"
                        accept="image/*"
                        multiple
                        placeholder="product image"
                    /> 
                    <input
                        onChange={(e) =>
                            setproduct({ ...product, rentprice: e.target.value })
                        }
                        value={product.rentprice}
                        name="rentprice"
                        type="number"
                        placeholder="rent price per day"
                    />
                    <input
                        onChange={(e) =>
                            setproduct({ ...product, category: e.target.value })
                        }
                        value={product.category}
                        name="category"
                        type="text"
                        placeholder="category"
                    />
                    

                    <button
                        type="submit"
                        className="bg-blue-600  text-white font-bold cursor-pointer px-6 py-2"
                    >
                        Register
                    </button>

                    </form>
            </div>
        </div>
    
    );


}