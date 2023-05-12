// TODO
const { response } = require('express');
const Product = require('../models/Product');

const getProducts = async( req, res = response ) => {

    const products = await Product.find()

    res.json({
        ok: true,
        products
    });
}

const getProductById = async (req, res) => {
    try {
  
      const { id } = req.params;
      const product = await Product.findById(id);
  
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      res.status(200).json( product );
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Something went wrong, wait a moment and try again please' });
    }
  };

const createProduct = async ( req, res = response ) => {

    const product = new Product( req.body );

    try {
        const productSaved = await product.save();

        res.json({
            ok: true,
            product: productSaved
        })


    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Something went wrong, wait a moment and try again please'
        });
    }
}

const updateProduct = async( req, res = response ) => {
    
    const productoId = req.params.id;

    try {

        const product = await Product.findById( productoId );

        if ( !product ) {
            return res.status(404).json({
                ok: false,
                msg: 'The product id does not exists'
            });
        }

        const newProduct = {
            ...req.body,
        }

        const productUpdated = await Product.findByIdAndUpdate( productoId, newProduct, { new: true } );

        res.json({
            ok: true,
            product: productUpdated
        });

        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Something went wrong, wait a moment and try again please'
        });
    }

}

const deleteProduct = async( req, res = response ) => {
    
    const productoId = req.params.id;

    try {

        const product = await Product.findById( productoId );

        if ( !product ) {
            return res.status(404).json({
                ok: false,
                msg: 'The product id does not exists'
            });
        }

        await Product.findByIdAndDelete( productoId );

        res.json({
            ok: true,
        });
 
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Something went wrong, wait a moment and try again please'
        });
    }

}

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}