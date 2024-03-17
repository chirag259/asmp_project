import cloudinary from "../../../llib/cloudinary";
import Product from "../../../models/productmodel";

export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
    
        const result = await cloudinary.uploader.upload(req.body.productimage, { folder: 'products' });
  
        
        const product = new Product({
          producttitle: req.body.producttitle,
          productbrand: req.body.productbrand,
          productmodel: req.body.productmodel,
          description: req.body.description,
          productimage: result.secure_url,
          rentprice: req.body.rentprice,
          category: req.body.category,
        });
  
        await product.save();
  
        res.status(201).json({ message: 'Product added successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }