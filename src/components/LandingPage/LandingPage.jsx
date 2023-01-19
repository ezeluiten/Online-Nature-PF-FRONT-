import style from './landingPage.module.css'

export function LandingPage({children}) {


    return(
        <div className={style.container}>
            <h1>SOY EL LANDING PAGE!</h1>
            {children}
            
        </div>
    )
}