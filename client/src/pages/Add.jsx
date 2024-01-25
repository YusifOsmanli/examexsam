import React, { useContext } from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
import toast from 'react-hot-toast';
import mainContext from '../context/context';

const Add = () => {
    const {data,handleSearch,handleSorting}=useContext(mainContext)
    const formik = useFormik({
        initialValues: {
          name: '',
          desc: '',
          price: '',
          image:''
        },
        onSubmit: (values,{resetForm} )=> { 
     
          axios.post('http://localhost:8081/ports',{...values}).then(()=>{
            resetForm()
            toast.success('elave olundu')
          })
        },
      });
      return (
        <div>
            <form onSubmit={formik.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
    
          <label htmlFor="desc">Description</label>
          <input
            id="desc"
            name="desc"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.desc}
          />
    
          <label htmlFor="price">Price</label>
          <input
            id="price"
            name="price"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.price}
          />
          <label htmlFor="image">Image</label>
          <input
            id="image"
            name="image"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.image}
          />
    
          <button type="submit">Submit</button>
        </form>
        <div>
            <input type="text" placeholder='Search' onChange={handleSearch}/>
            <select name="" id="" onChange={handleSorting}>
                <option value="defaul">Default</option>
                <option value="az">A-Z</option>
                <option value="za">Z-A</option>
                <option value="09">min-max</option>
                <option value="90">max-min</option>
            </select>
        </div>

        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
   {
    data.map((item,index)=>{
        return(
            <tr key={index}>
            <th scope="row">{item._id}</th>
            <td>{item.name}</td>
            <td>{item.desc}</td>
            <td>{item.price}</td>
            <td><img src={item.image} style={{width:'90px', height:'180px'}} alt="" /></td>
          </tr>
        )
    })
   }
    
  </tbody>
</table>
        </div>
      );
}

export default Add