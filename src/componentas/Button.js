let index = 0
function inc(){
    console.log(index);
    index += 1;
}

const Button = () => {
  return (
    <button onClick={inc}>press in Button</button>
  )
}

export default Button