import { useState, useEffect } from "react"
import api from '../api/common.http'

export const useProductData = () => {
    const [products, setProducts] = useState([])
    const [changed, setChanged] = useState(false)
    const [limit, setLimit] = useState(4)
    const [page, setPage] = useState(1)
    const [query, setQuery] = useState('')
    const [pagination, setPagination] = useState(null)

    async function getProductById(id) {
        let success = { message: "", status: false, payload: null }
        await api.get(`/product/one/${id}`)
            .then(response => response.data)
            .then((data) => {
                success.message = "get the right Product";
                success.status = true;
                success.payload = data
            })
            .catch(error => {

                success.message = error?.response?.data?.error?.message
                success.status = false
                success.payload = null
            })

        return success
    }

    async function updateProduct(id, label, brand, description, price) {
        let success = { message: "", status: false }
        await api.put(`/product/update/${id}`, JSON.stringify({ label, brand, description, price }))
            .then(response => response.data)
            .then((data) => {
                success.message = data.message;
                success.status = true;
                setChanged(prev => !prev)

            })
            .catch(error => {
                success.message = error?.response?.data?.error?.message
                success.status = false
            })

        return success
    }

    async function getAllProdcts() {
        await api.get(`/product/all?page=${page}&limit=${limit}&search=${query}`)
            .then(response => response.data)
            .then(data => {
                setProducts(data.data)
                setPagination(data.info)
            })
            .catch(error => console.error(error.message))
    }


    const addNewProduct = async (label, brand, description, price) => {
        let success = { message: "", status: false }
        await api.post('/product/add', JSON.stringify({ label, brand, description, price }))
            .then(response => response.data)
            .then(() => {
                success.message = "Product added Successfully";
                success.status = true;
            })
            .catch(error => {

                success.message = error?.response?.data?.error?.message
                success.status = false
            })

        return success

    }

    async function removeProduct(id) {
        let success = { message: "", status: false }
        await api.delete(`/product/delete/${id}`)
            .then(response => response.data)
            .then((data) => {
                success.message = data.message;
                success.status = true;
                setChanged(prev => !prev)
            })
            .catch(error => {
                success.message = error?.response?.data?.error?.message
                success.status = false
            })

        return success


    }


    useEffect(() => {
        getAllProdcts()
    }, [changed, page, limit, query])

    return {
        products,
        getAllProdcts,
        addNewProduct,
        removeProduct,
        getProductById,
        updateProduct,
        setLimit,
        limit,
        setPage,
        page,
        setQuery,
        query,
        pagination
    }
}