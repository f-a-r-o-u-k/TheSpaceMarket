import React from 'react'
import NavBar from './NavBar'

function formgive() {
  return (
    <div>
      <NavBar/>
      <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div><br/>
  <div class="form-group">
    <label for="exampleInputPassword1">Phone Number</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div><br/>
  <div class="form-group">
    <label for="exampleInputPassword1">Adresse</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div><br/>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default formgive