import React,{useState } from "react";
import Sidebar from './Sidebar';
import './Style/Createproduct.css';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";



export default function CreateProduct(props) {
    const [inputs, setInputs] = useState({ nameProduct:"", description:"", money:0,image:""});
    const [errors, setErrors] = useState({}); 
    const navigate = useNavigate();

    const handleSubmit = e =>{
        e.preventDefault()
        const newProduct= {
            nameProduct:inputs.nameProduct,
            description: inputs.description,
            money: inputs.money,
            image: inputs.image,
        }
        console.log(newProduct);

            axios.post('http://127.0.0.1:8000/api/newProduct', newProduct)
            .then(res=>{
                console.log(res)
                navigate('/')
            })
            .catch(err=>{
                console.log(err.response.data.message);
                const errorResponse = err.response.data.errors;
                const errorObj = {}; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorObj[key] = errorResponse[key].message;
            }
            // Set Errors
            setErrors(errorObj);
            
        })
    }
  return (
    <div >
         <NavBar/>
         <br/>
         <div>
         <div class="box" style={{color:"#589632"}}>
                    <a id="linking" >
                        <div class="right-side">
                            <div class="box-topic"></div>
                            <div class="number"> </div>
                            <div class="indicator">
                            </div>
                        </div>
                    </a>
                </div>
        
    <form className="form" onSubmit={handleSubmit}>
    <h1 className="title">Create Product</h1>
    <img className="pro" src="https://cdn.discordapp.com/attachments/1044204471049265185/1090797208426786816/xcloudiphoneipad.jpg"/>
      <label>
        Money:
        </label>
        <input type="number" value={inputs.money}  onChange={(e)=>setInputs({...inputs, money: e.target.value})} />
      
      <p >{errors.money}</p>
      <label>
        Name Product: 
        </label>
        <input 
          value={inputs.nameProduct}  onChange={(e)=>setInputs({...inputs, nameProduct: e.target.value})}
           />
      
      <p >{errors.nameProduct}</p>

      <label>
      description:
        </label>
        <textarea 
         value={inputs.description}  onChange={(e)=>setInputs({...inputs, description: e.target.value})} />
   
      <p >{errors.description}</p>
      <label>
        Images:
        </label>
        <input type="file" id="files" name="files" multiple
         value={inputs.image}  onChange={(e)=>setInputs({...inputs, image: e.target.value})} />
      <p> {errors.image}</p>
      <Link><button className="submitButton">Submit</button></Link>
    </form>
    </div>
    </div>
  );
}