
export default function BtnShowPass({passVisibleF, passVisible}){

    return(
      <span onClick={passVisibleF} className="BtnShowPass">
        {passVisible ? 
        <span className="material-symbols-outlined">visibility</span>:
        <span className="material-symbols-outlined">visibility_off</span>}
      </span>
    )
  }