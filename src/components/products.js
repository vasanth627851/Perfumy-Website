//products component

import one from "../assets/images/one.jpg"
import two from "../assets/images/two.jpg"
import three from "../assets/images/three.jpg"


function Products ()
{
  return (<div className="products">
    <div className="box">
      <img src={one} alt="perfume"></img>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, quo.</p>
    </div>

    <div className="box">
      <img src={two} alt="perfume"></img>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, numquam!</p>
    </div>
    
    <div className="box">
      <img src={three} alt="perfume"></img>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, accusantium!</p>
    </div>

  </div>)
}

export default Products