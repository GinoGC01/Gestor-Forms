
export default function BtnShowPass({passVisibleF, passVisible}){

    return(
      <button onClick={passVisibleF} className="BtnShowPass">
        {passVisible ? 
        <span className="material-symbols-outlined">visibility</span>:
        <span className="material-symbols-outlined">visibility_off</span>}
      </button>
    )
  }