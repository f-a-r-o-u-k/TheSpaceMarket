import React, {useState,useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Sidebar from './Sidebar';

const Products = () => {
    const[allProduct, setAllProduct]= useState()
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();
  const [nameProduct, setnameProduct] = useState('');
  const [image, setImage] = useState('');
  const [money, setmoney] = useState('');
  const [description, setdescription] = useState('');
  const [isAcceptd, setIsAccepted] = useState(false);


    useEffect (()=>{
        axios.get('http://127.0.0.1:8000/api/allProduct')
        .then(res => {
            console.log(res.data);
            setAllProduct(res.data);
            setAllProduct(allProduct.filter((product)=>product.isAccepted!== true))
            setIsLoading(false);
            
        })
        .catch(err => console.log(err))
    },[id]);

    useEffect (()=>{
      axios.get('http://127.0.0.1:8000/api/oneProduct/'+id)
      .then(res => {
          console.log(res.data);
        })
        .catch(err => console.log(err))
        },[]);

    const hadleDelete = (id) => {
        axios.delete('http://127.0.0.1:8000/api/deleteOneproduct/'+id)
        .then (res => {
            console.log(res.data)
            console.log("Delete Succesfully")
            setAllProduct(allProduct.filter((product)=> product._id !== id))
            })
        .catch(err => console.log(err))   
        }
        const updateHand = () => {
            axios
              .put(`http://localhost:8000/api/UpdateOneProduct/${id}`, { isAcceptd: !isAcceptd })
              .then((res) => setIsAccepted(!isAcceptd))
              .catch((err) => console.log(err));
          };
         
        return (
        <div style={{display:"flex"}}>
             <Sidebar/>
        <table class="table">
        <thead>
            <tr>
            <th scope="col">Id</th>
            <th scope="col">Product</th>    
            <th scope="col">Money</th>    
            <th scope="col"></th>    
            <th scope="col"></th>
            <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            {allProduct? allProduct.map((product)=>{
                return(
            <tr key={product._id}>
            <td>{product._id}</td>
            <td>{product.nameProduct}</td>
            <td>{product.money}</td>
            <td></td>
            <td></td>
            <td>
            <button class="btn btn-outline-primary">View</button><br/><br/>
            <Link><button onClick={()=>hadleDelete(product._id)} class="btn btn-outline-success">Accept</button></Link><br/><br/>
            <Link><button onClick={()=>hadleDelete(product._id)} className="btn btn-outline-danger">Delete</button> </Link>            </td>
            </tr>
            )}): isLoading}
        </tbody>
        </table>
     </div>
            
  )
}

export default Products